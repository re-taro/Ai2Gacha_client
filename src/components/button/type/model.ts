import type { HTMLChakraProps } from "@chakra-ui/react";

export type ButtonProperties = Omit<HTMLChakraProps<"button">, "border" | "children"> & {
  isNegative: boolean;
  border: boolean;
  children: string;
  disable: boolean;
};
