import { Box, Text, Link } from "@chakra-ui/react";

export const Footer = () => (
  <Box
    as="footer"
    w="100%"
    margin="0 auto"
    mt="2rem"
    textAlign="center"
    bg="#f2f2f2"
    boxShadow="0 0 3px #f5f5f5"
    py="2rem"
  >
    <Link href="/" _hover={{ opacity: 0.5 }} title="yudai04">
      <Text fontSize="sm" color="#999">
        © 2023 yudai04.dev
      </Text>
    </Link>
  </Box>
);
