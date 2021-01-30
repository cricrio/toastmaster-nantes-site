import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import BackgroundContainer from "components/layout/BackgroundContainer";

const RegisterMeeting = ({ onSubmit = () => {} }) => {
  return (
    <BackgroundContainer
      title="Assister à la première réunion"
      subtitle="Prochaine réunion le 5 mars 2021"
    >
      <HStack>
        <FormControl id="no">
          <FormLabel>Prénom</FormLabel>
          <Input placeholder="Bob marley" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="my@email.fr" />
        </FormControl>
      </HStack>
      <Button mt="2">Rejoindre</Button>
    </BackgroundContainer>
  );
};

export default RegisterMeeting;
