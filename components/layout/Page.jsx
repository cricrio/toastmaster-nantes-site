const { Center, Box } = require("@chakra-ui/react");

const Page = ({ children }) => (
  <Box backgroundColor="#f2edeb" minH="100%" height="calc(100vh - 4rem)" p="4">
    <Box maxW="80rem" margin="auto">
      {children}
    </Box>
  </Box>
);

export default Page;
