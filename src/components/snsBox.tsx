import { Icon, Text, Flex, Link, Box, useColorModeValue } from "@chakra-ui/react";
import { contacts } from "@/data";

type Props = {
  direction?: "row" | "column" | object;
  gap?: string;
  inGap?: string;
  align?: string;
  justify?: string;
  px?: string;
  py?: string;
  displayDetail?: boolean | object;
  boxShadow?: string;
};
export const SNSBox = (props: Props) => {
  const {
    direction = "row",
    gap = "1.5rem",
    align = "center",
    justify = "center",
    px = "1rem",
    py = "2rem",
    inGap = ".5rem",
    displayDetail = false,
    boxShadow = "none",
  } = props;
  return (
    <Flex direction={direction} gap={gap} align={align} justify={justify} px={px} py={py} w="fit-content">
      {contacts.map((contact, idx) => (
        <Link
          key={idx}
          href={contact.url}
          isExternal
          borderRadius="md"
          py=".5rem"
          px="1rem"
          w="100%"
          boxShadow={boxShadow}
        >
          <Flex justify="flex-start" align="center" gap={inGap}>
            <Icon as={contact.icon} fontSize="1.4rem" />
            <Box>
              <Text fontWeight="600">{contact.genre}</Text>
              {displayDetail && <Text color={useColorModeValue("gray.600", "gray.300")}>{contact.value}</Text>}
            </Box>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};
