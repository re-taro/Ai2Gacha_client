import { HTMLChakraProps } from "@chakra-ui/react";

export type ThemeCardProperties = HTMLChakraProps<"div"> & {
  theme: string;
  selectId?: string;
  chooseId?: string;
  boardId?: string;
  bids?: number;
  isTag: boolean;
};
