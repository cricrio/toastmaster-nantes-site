const { Box } = require("@chakra-ui/react");

const Layout = ({ children }) => (
  <Box backgroundColor="#f2edeb" minH="100%" height="calc(100vh - 4rem)" p="4">
    {children}
  </Box>
);

export default Layout;
