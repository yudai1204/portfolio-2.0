import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const styledElm = css`
  display: inline-block;
  transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
`;

//TypeScriptの型定義 (今回は無視してOK)
type Props = {
  children: ReactNode;
};

export const ScrollAnimation = (props: Props) => {
  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  return (
    <Box ref={ref} css={styledElm} opacity={inView ? 1 : 0} w="100%">
      {children}
    </Box>
  );
};
