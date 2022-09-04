import { HTMLChakraProps } from "@chakra-ui/react";

export type MatchCardProperties = HTMLChakraProps<"div"> & {
  name: string;
  score: number;
  itemId: string;
  userId: string;
  isSelect: boolean;
};
