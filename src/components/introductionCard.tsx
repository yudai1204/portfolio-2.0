import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { IconImg } from "./iconImg";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroductionCardMain = () => (
  <Flex
    bg="linear-gradient(70deg, #fffabc88, #e0ebaf99)"
    w="100%"
    py="2rem"
    gap={2}
    justify="space-evenly"
    align="center"
  >
    <IconImg size={{ base: "72px", sm: "96px", md: "128px" }} />
    <VStack spacing={1.5} align="flex-start">
      <Text fontSize={{ base: "xl", sm: "2xl" }} fontWeight="300">
        yudai04 / yudai1204
      </Text>
      <Text fontSize="md" fontWeight="300" opacity="0.6">
        Hiyama Yudai
      </Text>
      <Text fontSize="sm" fontWeight="300" opacity="0.6" mt={1}>
        Chiba, Japan
      </Text>
    </VStack>
  </Flex>
);

export const IntroductionCard = () => {
  const bg = "linear-gradient(90deg, #fac11288, #feef0088)";

  return (
    <Flex
      mx="auto"
      maxW="720px"
      w="100%"
      h="fit-content"
      css={css`
        animation: ${appear} 2s ease;
      `}
    >
      <Box bg={bg} borderLeftRadius="1000px" w=".5rem" />
      <IntroductionCardMain />
      <Box bg={bg} borderRightRadius="1000px" w=".5rem" />
    </Flex>
  );
};
