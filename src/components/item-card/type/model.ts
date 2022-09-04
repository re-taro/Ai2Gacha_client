import { HTMLChakraProps } from "@chakra-ui/react";

export type ItemCardProperties =
  | (HTMLChakraProps<"div"> & {
      type: "select";
      title: string;
      imagePath: string;
      itemId: string;
      chooseItemId?: never;
      bids?: never;
    })
  | {
      type: "choose";
      title: string;
      imagePath: string;
      itemId: string;
      chooseItemId: string;
      bids?: never;
    }
  | {
      type: "exhibit";
      title: string;
      imagePath: string;
      itemId: string;
      chooseItemId?: never;
      bids: number;
    }
  | {
      type: "submit";
      title: string;
      imagePath: string;
      itemId: string;
      chooseItemId?: never;
      bids?: never;
    };
