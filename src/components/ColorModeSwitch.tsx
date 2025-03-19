import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack onClick={toggleColorMode} cursor="pointer">
      <ColorModeButton />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
