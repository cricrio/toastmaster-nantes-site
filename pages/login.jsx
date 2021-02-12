import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Text, VStack } from "@chakra-ui/react";

import { auth } from "lib/nhost";
import BackgroundContainer from "components/layout/BackgroundContainer";
import Form from "components/Form";

export default function Login() {
  const router = useRouter();

  async function handleSubmit({ email, password }) {
    try {
      await auth.login(email, password);
    } catch (error) {
      console.log(error);
      return alert("login failed");
    }

    router.push("/home");
  }

  return (
    <div>
      <BackgroundContainer title="Se connecter">
        <VStack spacing="2">
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Email"
              id="email"
              type="email"
              placeholder="my@email.fr"
            />
            <Form.Input label="Mot de passe" id="password" type="password" />
            <Form.Button isFullWidth mt="2">
              Se connecter
            </Form.Button>
          </Form>
          <Text fontSize="sm" textAlign="center">
            Vous n'avez pas encore de compte ?
          </Text>
          <Link href="/register">
            <Text fontSize="sm" textAlign="center" isFullWidth>
              S'inscrire
            </Text>
          </Link>
        </VStack>
      </BackgroundContainer>
    </div>
  );
}
