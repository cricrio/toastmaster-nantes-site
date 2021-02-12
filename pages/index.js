import { Box } from "@chakra-ui/react";
import Head from "next/head";

import RegisterMeeting from "../components/RegisterMeeting";

export default function Home() {
  return (
    <Box minH="100%">
      <Head>
        <title>Toastmaster nantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterMeeting />
      </main>
    </Box>
  );
}
