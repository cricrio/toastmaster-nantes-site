import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { auth } from "lib/nhost";
import { Button, Text, VStack } from "@chakra-ui/react";
import BackgroundContainer from "components/layout/BackgroundContainer";
import Form from "components/Form";

export default function Register() {
  const router = useRouter();

  async function handleSubmit({ email, password, name }) {
    try {
      await auth.register(email, password, {
        display_name: name,
      });
    } catch (error) {
      console.log(error);
      return alert("Registration failed");
    }

    alert("Registration OK. Now login!");
    router.push("/login");
  }

  return (
    <BackgroundContainer title="Rejoindre">
      <VStack spacing="2">
        <Form onSubmit={handleSubmit}>
          <Form.Input label="Nom" id="name" placeholder="Patrick Leroux" />
          <Form.Input
            label="Email"
            id="email"
            type="email"
            placeholder="my@email.fr"
          />
          <Form.Input label="Mot de passe" id="password" type="password" />
          <Button type="submit" mt="2" isFullWidth>
            Rejoindre
          </Button>
        </Form>

        <Text fontSize="sm" textAlign="center">
          Vous avez déjà un compte ?
        </Text>
        <Link href="/login">
          <Text fontSize="sm" textAlign="center">
            Se connecter
          </Text>
        </Link>
      </VStack>
    </BackgroundContainer>
  );
}
