import { Box, Text, VStack } from "@chakra-ui/react";
import { ScrollAnimation } from "./scrollAnimarion";

type Props = {
  title: string;
  children: React.ReactNode;
  animation?: boolean;
};
export const Paragraph = (props: Props) => {
  const { title, children, animation = true } = props;
  const ParagraphMain = () => (
    <Box maxW="780px" mx="auto" px="1rem" mt="2rem">
      <Text fontSize="2xl" fontWeight="bold" mb=".8rem">
        {title}
      </Text>
      <VStack gap=".8rem" align="flex-start">
        {children}
      </VStack>
    </Box>
  );

  return animation ? (
    <ScrollAnimation>
      <ParagraphMain />
    </ScrollAnimation>
  ) : (
    <ParagraphMain />
  );
};
