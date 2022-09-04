import { HTMLChakraProps } from "@chakra-ui/react";

export type ThemeCardProperties = HTMLChakraProps<"div"> & {
  theme: string;
  itemKindId: string
  itemId: string;
  bids: number;
  isTag: boolean;
};
