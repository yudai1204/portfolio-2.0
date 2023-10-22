import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { IconImg } from "./iconImg";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
      <Text fontSize={{ base: "md", sm: "xl" }} fontWeight="300" opacity="0.6">
        Engeneering Student
      </Text>
      <VStack spacing={0} align="flex-start">
        {["Web/Art/App Development", "UI/UX Design"].map((text) => (
          <Text fontSize={{ base: "xs", sm: "md" }} fontWeight="300" opacity="0.6" key={text}>
            {text}
          </Text>
        ))}
      </VStack>
    </VStack>
  </Flex>
);

export const IntroductionCard = () => {
  const bg = "linear-gradient(90deg, #fac11288, #feef0088)";

  return (
    <Box
      h="fit-content"
      maxW="720px"
      w="80%"
      bg="#fffa"
      borderRadius=".5rem"
      boxShadow="2px 2px 4px #fcd14644"
      css={css`
        animation: ${appear} 2s ease;
      `}
      mx="auto"
    >
      <Flex h="fit-content">
        <Box bg={bg} borderLeftRadius="1000px" w=".5rem" />
        <IntroductionCardMain />
        <Box bg={bg} borderRightRadius="1000px" w=".5rem" />
      </Flex>
    </Box>
  );
};
