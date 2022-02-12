import { lazy, Suspense } from 'react';
import { loadQuery } from 'react-relay';

import RelayEnvironment from '@/gqlHelpers/RelayEnvironment';

import { WikiTeamsQuery } from '@/graphql/teams/query/TeamsQuery';
import { TeamsQuery } from '@/graphql/teams/query/__generated__/TeamsQuery.graphql';

const Teams = lazy(() => import('./_views/Teams'));

const preloadedQuery = loadQuery<TeamsQuery>(RelayEnvironment, WikiTeamsQuery, {
  first: 2,
});

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <h1>This is the demo for our team</h1>
        <section className='mt-8'>
          <Suspense fallback={<p>loading</p>}>
            <Teams preloadedQuery={preloadedQuery} />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default App;
