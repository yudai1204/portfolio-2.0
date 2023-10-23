import { Box, Text, VStack } from "@chakra-ui/react";
import { useIsSafari } from "../utils/useIsSafari";
import { ScrollAnimation } from "./scrollAnimarion";

type Props = {
  title: string;
  children: React.ReactNode;
  animation?: boolean;
};
export const Paragraph = (props: Props) => {
  const { title, children, animation = true } = props;
  const isSafari = useIsSafari();
  const ParagraphMain = () => (
    <Box maxW="780px" mx="auto" px="1rem" mt={{ base: "3rem", md: "2rem" }} mb={{ base: "4rem", md: "3rem" }}>
      <Text fontSize="2xl" fontWeight="bold" mb=".8rem">
        {title}
      </Text>
      <VStack gap=".8rem" align="flex-start" overflow={isSafari ? "hidden" : undefined}>
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
