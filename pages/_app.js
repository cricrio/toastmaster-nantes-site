import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "components/Header";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";

import { auth } from "lib/nhost";

function App({ Component, pageProps }) {
  return (
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint={process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}
      >
        <ChakraProvider>
          <Box minH="100vh">
            <Header />
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default App;
