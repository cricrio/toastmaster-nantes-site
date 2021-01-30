import React, { useState } from "react";
import { useRouter } from "next/router";

import { auth } from "lib/nhost";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import BackgroundContainer from "components/layout/BackgroundContainer";

export default function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await auth.register(email, password, {
        display_name: displayName,
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
      <form onSubmit={handleSubmit}>
        <FormControl id="displayName">
          <FormLabel>Prenom</FormLabel>
          <Input
            placeholder="Christopher"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="my@email.fr"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Mot de passe</FormLabel>
          <Input
            type="password"
            placeholder="my@email.fr"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Rejoindre</Button>
      </form>
    </BackgroundContainer>
  );
}
