import { useState } from 'react';
import { useFragment } from 'react-relay';

import { mutate } from '@/gqlHelpers/mutate';
import { AddSkill } from '@/graphql/teams/mutation/AddSkillMutation';
import { AppHeaderFragment } from '@/graphql/teams/query/HeaderFragment';
import { AddSkillMutation } from '@/graphql/teams/mutation/__generated__/AddSkillMutation.graphql';
import { HeaderFragment$key } from '@/graphql/teams/query/__generated__/HeaderFragment.graphql';

type HeaderProps = {
  queryRef: HeaderFragment$key;
};

const Header = ({ queryRef }: HeaderProps) => {
  const data = useFragment<HeaderFragment$key>(AppHeaderFragment, queryRef);

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
              mutation: AddSkill,
              variables: {
                memberName: data.name,
                skill: value,
              },
              updater: (store, payload) => {
                const memberId = store.get(data.id);
                const skills = memberId.getLinkedRecords('skills');
                const addSkill = store.getRootField('addSkill');

                memberId.setLinkedRecords([...skills, addSkill], 'skills');
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
