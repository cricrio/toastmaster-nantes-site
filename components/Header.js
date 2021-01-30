import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header({ loginUrl }) {
  return (
    <Box p="4" bgColor="#3600D2" color="white" as="header" height="4rem">
      <Flex alignItems="center">
        <HStack spacing="1rem">
          {/* <Image
            src="/logo.png"
            alt="Toastmaster international"
            width={111}
            height={93}
          /> */}
          <Link href="/">
            <Heading as="h1" size="s">
              Toastmaster Nantes
            </Heading>
          </Link>
        </HStack>
        <Spacer />
        <Link href="/login">
          <Text textAlign="center" p="1" borderWidth="1px" borderRadius="2xl">
            Se connecter
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
