import { Box, Heading, VStack } from "@chakra-ui/react";
import privateRoute from "components/layout/privateRoute";
import UserDetail from "components/UserDetail";

const MemberList = () => (
  <Box p="8" as="main">
    <Heading mb={4}>Liste des membres</Heading>
    <VStack spacing={4} align="flex-start">
      <UserDetail name="Oshigaki Kisame" role="Duput@etba.iue" />
      <UserDetail name="Oshigaki Kisame" email="Duput@etba.iue" />
    </VStack>
  </Box>
);

export default privateRoute(MemberList);
