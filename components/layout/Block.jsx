const { Box, Heading } = require("@chakra-ui/react");

const Block = ({ title, children }) => (
  <Box m="4" bg="white" p="4" borderRadius="md" boxShadow="sm">
    {title && (
      <Box mb="2">
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </Box>
    )}
    {children}
  </Box>
);

export default Block;
