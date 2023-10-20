import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
export const SkillDetail = (props: Props) => {
  const { title, children } = props;
  return (
    <Box w="100%" mb=".5rem">
      <Heading as="h4" fontSize="1.2rem" mb="1rem">
        {title}
      </Heading>
      <Box w="100%" maxW="880px" margin="0 auto">
        {children}
      </Box>
    </Box>
  );
};
