import { Button, HStack, VStack } from "@chakra-ui/react";
import BackgroundContainer from "components/layout/BackgroundContainer";
import Form from "./Form";

const RegisterMeeting = ({ onSubmit = () => {} }) => {
  return (
    <BackgroundContainer
      title="Assister à la première réunion"
      subtitle="Prochaine réunion le 5 mars 2021"
    >
      <Form onSubmit={console.log}>
        <VStack mb="2">
          <Form.Input
            name="name"
            title="Name"
            placeholder="Bob marley"
            required
          />
          <Form.Input
            name="email"
            title="Email"
            placeholder="my@email.fr"
            required
          />
          <Button type="submit" isFullWidth>
            Rejoindre
          </Button>
        </VStack>
      </Form>
    </BackgroundContainer>
  );
};

export default RegisterMeeting;
