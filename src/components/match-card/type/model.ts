import { HTMLChakraProps } from "@chakra-ui/react";

export type MatchCardProperties = HTMLChakraProps<"div"> & {
  score: number;
  boardId: string;
  itemId: string;
  isSelect: boolean;
};
