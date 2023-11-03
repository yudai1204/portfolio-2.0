import { useColorMode, IconButton, Button, Box, Icon, Text } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

type Props = {
  details?: boolean;
};
export const DarkModeSwitch = (props: Props) => {
  const { details } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  if (details) {
    return (
      <Button onClick={toggleColorMode} variant="outline" size="sm">
        <Icon as={isDark ? MdOutlineLightMode : MdOutlineDarkMode} mr="0.3rem" />
        <Text fontWeight="500" fontSize="xs">
          Switch to {isDark ? "light" : "dark"} mode
        </Text>
      </Button>
    );
  }
  return (
    <Box>
      <IconButton
        fontSize="2xl"
        p="1rem"
        bg={isDark ? "#9996" : "#f4e4c466"}
        aria-label="Toggle dark mode"
        icon={isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};
