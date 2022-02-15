import { useFragment } from 'react-relay';

import { mutate } from '@gqlHelpers/mutate';
import { WikiRemoveSkillMutation } from '@graphql/teams/mutation/RemoveSkillMutation';
import { WikiItemFragment } from '@graphql/teams/query/ItemFragment';

import type { RemoveSkillMutation } from '@graphql/teams/mutation/__generated__/RemoveSkillMutation.graphql';
import type { ItemFragment$key } from '@graphql/teams/query/__generated__/ItemFragment.graphql';

import styles from './Item.module.scss';
import { useState } from 'react';
import { UpdateSkillMutation } from '@graphql/teams/mutation/__generated__/UpdateSkillMutation.graphql';
import { WikiUpdateSkillMutation } from '@graphql/teams/mutation/UpdateSkillMutation';

interface ItemProps {
  queryRef: ItemFragment$key;
  hoverNow: boolean;
  member: string;
  memberId: string;
}

const Item = (props: ItemProps) => {
  const data = useFragment<ItemFragment$key>(WikiItemFragment, props.queryRef);

  const [editing, setEditing] = useState<boolean>(false)

  const handleDelete = () => {
    mutate<RemoveSkillMutation>({
      mutation: WikiRemoveSkillMutation,
      variables: {
        memberName: props.member,
        skill: data.name,
      },
      // updater: (store) => {
      //   // Doesn't need payload here, just find it out and drop it away, and backend is delete for real
      //   const member = store.get(props.memberId);
      //   const skills = member.getLinkedRecords('skills');
      //   const skillIndex = skills.findIndex(
      //     (skill) => skill.getValue('name') === data.name,
      //   );
      //   skills.splice(skillIndex, 1);
      //   member.setLinkedRecords(skills, 'skills');
      // },
    });
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input
          style={{ borderRadius: '50%' }}
          type={'checkbox'}
        />
      </label>

      <span className='ml-4 w-80 flex justify-between'>
        {editing ? (
          <input type='text' defaultValue={data.name}
          onBlur={(e) => {
            setEditing(false)
            mutate<UpdateSkillMutation>({
              mutation: WikiUpdateSkillMutation,
              variables: {
                memberName: props.member,
                skill: data.name,
                update: e.target.value
              }
            })
          }}
          />
        ) : (
          <span
            className={`${styles.name} cursor-pointer`}
            onClick={() => setEditing(true)}>
            {data.name}
          </span>
        )}
      </span>
      {
        props.hoverNow ? <span className='cursor-pointer' onClick={handleDelete}>x</span> : null
      }
    </div>
  );
};

export default Item;
