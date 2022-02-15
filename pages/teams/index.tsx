import { lazy, Suspense } from 'react';
import { loadQuery } from 'react-relay';
import { css } from '@emotion/react';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';

import RelayEnvironment from '@gqlHelpers/RelayEnvironment';

import { WikiTeamsQuery } from '@graphql/teams/query/TeamsQuery';
import type { TeamsQuery } from '@graphql/teams/query/__generated__/TeamsQuery.graphql';

import Tree from '@/common/Tree';


// -------------------------------Only for testing----------------------------------
const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);
// -------------------------------Only for testing----------------------------------

const Teams = lazy(() => import('@components/teams/views/Teams'));

const preloadedQuery = loadQuery<TeamsQuery>(RelayEnvironment, WikiTeamsQuery, {
  first: 2,
});

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <h1>This is the demo for our team</h1>
        <section className='mt-8'>
          <SomeComponent>
            <AnotherComponent />
          </SomeComponent>
          <Stack spacing={3}>
            <Alert status='error'>
              <AlertIcon />
              There was an error processing your request
            </Alert>

            <Alert status='success'>
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>

            <Alert status='warning'>
              <AlertIcon />
              Seems your account is about expire, upgrade now
            </Alert>

            <Alert status='info'>
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
          </Stack>
          {/* ---------------styling lost, will be refactor by emotion-------------- */}
          {/* <Suspense fallback={<p>loading</p>}>
          <Teams preloadedQuery={preloadedQuery} />
          </Suspense> */}
        </section>
      </div>
    </div>
  );
};

export default App;
