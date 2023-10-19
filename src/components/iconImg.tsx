import { Image } from "@chakra-ui/react";

type Props = {
  size?: string | object;
};
export const IconImg = (props: Props) => {
  const { size } = props;
  return (
    <Image
      src="/icon.jpg"
      alt="logo"
      w={size || "100%"}
      aspectRatio="1/1"
      borderRadius="30%"
      border="1px solid #fff"
      boxShadow="0 0 4px #0004"
    />
  );
};
