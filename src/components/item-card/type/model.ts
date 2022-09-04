import { HTMLChakraProps } from "@chakra-ui/react";

export type ItemCardProperties = HTMLChakraProps<"div"> & {
  title: string;
  imagePath: string;
  itemId: string;
  progress: number;
  remaining: number;
  bids: number;
  isExhibit: boolean;
  isPossession: boolean;
};
