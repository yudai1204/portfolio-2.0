import { useColorMode, IconButton, Box } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" bottom={0} right={0} m=".8rem" w="fit-content" h="fit-content" zIndex={10000000}>
      <IconButton
        fontSize="2xl"
        p="1rem"
        bg={colorMode === "dark" ? "#9996" : "#f4e4c466"}
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};
