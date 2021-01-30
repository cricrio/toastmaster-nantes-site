import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import { auth } from "lib/nhost";
import BackgroundContainer from "components/layout/BackgroundContainer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

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
        <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="my@email.fr"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" mt="2" width="100%">
            Se connecter
          </Button>
        </form>
        <Text fontSize="sm" textAlign="center" mt="2">
          Vous n'avez pas encore de compte ?
        </Text>
        <Link href="/register">
          <Text fontSize="sm" textAlign="center" mt="2">
            S'inscrire
          </Text>
        </Link>
      </BackgroundContainer>
    </div>
  );
}
