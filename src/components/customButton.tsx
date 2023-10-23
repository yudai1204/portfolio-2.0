import { Button, Box, Text } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomButton = (props: any) => {
  return (
    <Box
      m={props.margin || 0}
      bg="#f0800f"
      borderRadius="md"
      position="relative"
      boxShadow="0 0 6px #f0800f99"
      _hover={{ boxShadow: "0 0 4px #f0800f00" }}
      transition=".5s"
      mt={props.mt || 0}
      mb={props.mb || "10px"}
    >
      <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" fontWeight="600">
        {props.children}
      </Text>
      <Button
        {...props}
        maxW={{ base: "280px", sm: "720px" }}
        m="0"
        bg="linear-gradient(70deg, #f0800f, #f0ad0f)"
        transition=".3s"
        _hover={{ bg: "linear-gradient(70deg, #f0800f, #f0ad0f)", opacity: "0.2" }}
        _active={{ bg: "linear-gradient(70deg, #f0800f, #f0ad0f)", opacity: "0" }}
      />
    </Box>
  );
};
