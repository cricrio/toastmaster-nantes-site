import Head from "next/head";

import RegisterMeeting from "../components/RegisterMeeting";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toastmaster nantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterMeeting />
      </main>
    </>
  );
}
