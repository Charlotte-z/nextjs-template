import { useState } from 'react';
import { ConnectionHandler, useFragment } from 'react-relay';

import { mutate } from '@/gqlHelpers/mutate';
import { WikiHeaderFragment } from '@/graphql/teams/query/HeaderFragment';
import { AddSkillMutation } from '@/graphql/teams/mutation/__generated__/AddSkillMutation.graphql';
import { HeaderFragment$key } from '@/graphql/teams/query/__generated__/HeaderFragment.graphql';
import { WikiAddSkillMutation } from '@/graphql/teams/mutation/AddSkillMutation';

type HeaderProps = {
  queryRef: HeaderFragment$key;
};

const Header = ({ queryRef }: HeaderProps) => {
  const data = useFragment<HeaderFragment$key>(WikiHeaderFragment, queryRef);

  const [value, setValue] = useState<string>();

  return (
    <header className='flex mb-8'>
      <h1>Add a skill for your member:</h1>
      <input
        type='text'
        className='border border-pink-300 rounded'
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className='ml-4'
        onClick={() => {
          if (value) {
            mutate<AddSkillMutation>({
              mutation: WikiAddSkillMutation,
              variables: {
                memberName: data.name,
                skill: value,
              },
              updater: (store) => {
                const member = store.get(data.id);
                const payload = store
                  .getRootField('addSkill')
                  .getLinkedRecord('edge');

                const conn = ConnectionHandler.getConnection(
                  member,
                  'teams__skillConnection',
                );

                ConnectionHandler.insertEdgeBefore(conn, payload);
              },
            });
          }
        }}>
        add
      </button>
    </header>
  );
};

export default Header;
