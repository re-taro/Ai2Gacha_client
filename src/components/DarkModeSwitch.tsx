import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton, HTMLChakraProps } from "@chakra-ui/react";
import { FC } from "react";

export const DarkModeSwitch: FC<HTMLChakraProps<"button">> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
