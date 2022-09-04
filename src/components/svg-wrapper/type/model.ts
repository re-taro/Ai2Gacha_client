import { HTMLChakraProps } from "@chakra-ui/react";

export type WrapperProperties = HTMLChakraProps<"div"> & {
  path: string;
};
