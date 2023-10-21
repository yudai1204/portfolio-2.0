import { Box, Flex, Skeleton, Spinner } from "@chakra-ui/react";

export const CanvaSlide = () => {
  return (
    <Box
      w="100%"
      aspectRatio="16/9"
      boxShadow="0 2px 8px 0 rgba(63, 69, 81, 0.16)"
      position="relative"
      borderRadius="1rem"
    >
      <Skeleton
        w="100%"
        h="0"
        pt="56.25%"
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
        startColor="#fbe5ed77"
        endColor="#ffe8b677"
        borderRadius="1rem"
      />
      <Flex position="absolute" top="0" left="0" zIndex={0} w="100%" h="100%" justify="center" align="center">
        <Spinner size="xl" />
      </Flex>
      <iframe
        loading="lazy"
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?embed"
        allowFullScreen
        allow="fullscreen"
        style={{
          width: "100%",
          height: "100%",
          border: "0",
          zIndex: 1,
          position: "absolute",
          top: "0",
          left: "0",
          borderRadius: "1rem",
        }}
      />
    </Box>
  );
};
