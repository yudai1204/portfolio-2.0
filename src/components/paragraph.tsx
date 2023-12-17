import { Box, Text, VStack, Icon, Flex } from "@chakra-ui/react";
import { useIsSafari } from "../utils/useIsSafari";
import { ScrollAnimation } from "./scrollAnimarion";

type Props = {
  title: string;
  children: React.ReactNode;
  animation?: boolean;
  icon: React.ReactNode;
};
export const Paragraph = (props: Props) => {
  const { title, children, animation = true } = props;
  const isSafari = useIsSafari();
  const ParagraphMain = () => (
    <Box maxW="780px" mx="auto" px="1rem" mt={{ base: "3rem", md: "2rem" }} mb={{ base: "4rem", md: "3rem" }}>
      <Flex align="center" justify="flex-start" mb=".8rem" gap=".8rem">
        {/* @ts-ignore */}
        <Icon as={props.icon} fontSize="3xl" />
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
      </Flex>
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
