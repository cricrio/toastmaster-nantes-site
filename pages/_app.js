import { ChakraProvider } from "@chakra-ui/react";
import Header from "components/Header";
import { NhostAuthProvider, useAuth } from "@nhost/react-auth";
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
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default App;
