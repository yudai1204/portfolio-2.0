import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export interface LinkProps extends ChakraLinkProps {
  href: string;
}
export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};
