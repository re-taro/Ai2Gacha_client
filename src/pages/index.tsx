import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import type { NextPage } from "next";
import type { FC } from "react";

const GradientText: FC<HTMLChakraProps<"span">> = (chakraProps) => (
  <chakra.span
    fontSize="6vw"
    background="linear-gradient(90deg, #4d62d0, #d152c9 30%, #e6b357)"
    backgroundClip="text"
    {...chakraProps}
  />
);

const Index: NextPage = () => (
  <chakra.div height="100vh" display="flex" justifyContent="center" alignItems="center">
    <GradientText as="h2">Hello Chakra UI</GradientText>
    <DarkModeSwitch marginLeft="64px" fontSize="2vw" />
  </chakra.div>
);

export default Index;
