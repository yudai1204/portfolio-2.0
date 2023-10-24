import { Image, Box, useColorModeValue as useCM } from "@chakra-ui/react";

type Props = {
  size?: string | object;
  boxShadow?: string;
  borderColor?: string;
};
export const IconImg = (props: Props) => {
  const { size } = props;
  return (
    <Box
      bg="#000"
      w={size || "100%"}
      borderRadius="30%"
      border="1px solid"
      borderColor={useCM("#fff", "#664")}
      boxShadow={`0 0 4px ${useCM("#0004", "#0006")}`}
      overflow="hidden"
    >
      <Image src="/icon.jpg" alt="logo" w="100%" aspectRatio="1/1" opacity={useCM(1, 0.8)} />
    </Box>
  );
};
