import { Avatar, Stack, Text } from "@chakra-ui/react";

const UserDetail = ({ name, role, picture }) => (
  <Stack d="flex" alignItems="center" direction="row">
    <Avatar name={name} src={picture} />
    <Stack direction="column" spacing="0">
      <Text fontWeight="medium">{name}</Text>
      <Text color="#A0AEC0">{role}</Text>
    </Stack>
  </Stack>
);

export default UserDetail;
