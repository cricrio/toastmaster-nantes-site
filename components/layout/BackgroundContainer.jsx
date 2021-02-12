import { Box, Center, Heading } from "@chakra-ui/react";
import Image from "next/image";

const BackgroundContainer = ({ title, subtitle, children }) => (
  <Center position="relative" height="calc(100vh - 4rem)">
    <Box bgColor="white" zIndex="docked" p="8" borderRadius="lg">
      <Box mb="8">
        <Heading size="md">{title}</Heading>
        {subtitle && (
          <Heading size="md" color="#A0AEC0">
            {subtitle}
          </Heading>
        )}
      </Box>
      {children}
    </Box>
    <Image
      priority
      quality={25}
      src="/home.jpg"
      layout="fill"
      objectFit="cover"
    />
  </Center>
);

export default BackgroundContainer;
