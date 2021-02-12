import { Text } from "@chakra-ui/react";
import Block from "components/layout/Block";
import Layout from "components/layout/Layout";
import Page from "components/layout/Page";
import privateRoute from "components/layout/privateRoute";

const Home = () => (
  <Page>
    <Layout>
      <Block title="Welcome">
        <Text>You are log in !</Text>
      </Block>
    </Layout>
  </Page>
);

export default privateRoute(Home);
