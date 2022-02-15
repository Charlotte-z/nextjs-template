import { useState } from 'react';
import { usePaginationFragment } from 'react-relay';

import { WikiTeamsFragment } from '@graphql/teams/query/TeamsFragment';

import type { TeamsFragment$key } from '@graphql/teams/query/__generated__/TeamsFragment.graphql';

import Item from '../Item';
import Header from '../Header';
import { FragmentRefs } from 'relay-runtime';
import { SkillsListPaginationQuery } from '@graphql/teams/query/__generated__/SkillsListPaginationQuery.graphql';

type TodoProps = {
  queryRef: {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"TeamsFragment" | "HeaderFragment">;
  }
};

const Todo = (props: TodoProps) => {
  const data = usePaginationFragment<SkillsListPaginationQuery, TeamsFragment$key>(WikiTeamsFragment, props.queryRef);
  const [pointer, setPointer] = useState(-1);


  return (
    <div className='w-full'>
      <Header queryRef={props.queryRef} />
      <h1 className='text-pink-400 flex-inline justify-center min-h-min-48 w-full'>
        {/* Member of geek team: {data?.data.name ?? ''} ! */}
        <div onClick={() => {data.loadNext(1)}}>test</div>
        <div>
          {data?.data.skillConnection.edges
            ?.filter((skill) => skill) // it's not grace to filter null values
            .map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setPointer(index)}
                className='hover:bg-pink-200 rounded-md flex justify-items-center'>
                <Item
                  queryRef={skill.node}
                  member={'data.data.name'}
                  memberId={data.data.id}
                  hoverNow={index === pointer}
                />
              </div>
            ))}
        </div>
      </h1>
    </div>
  );
};

export default Todo;
