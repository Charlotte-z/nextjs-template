import { RelayEnvironmentProvider } from 'react-relay';
import { ChakraProvider } from '@chakra-ui/react';

import RelayEnvironment from '@gqlHelpers/RelayEnvironment';

const App = ({ Component, pageProps }) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  );
};

export default App;
