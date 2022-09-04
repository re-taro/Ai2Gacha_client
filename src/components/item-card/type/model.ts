import { HTMLChakraProps } from "@chakra-ui/react";

export type ItemCardProperties =
  | HTMLChakraProps<"div"> &
      (
        | {
            type: "select";
            title: string;
            imagePath: string;
            itemId: string;
            chooseItemId?: never;
            boardId?: never;
            bids?: never;
          }
        | {
            type: "choose";
            title: string;
            imagePath: string;
            itemId: string;
            chooseItemId: string;
            boardId?: never;
            bids?: never;
          }
        | {
            type: "exhibit";
            title: string;
            imagePath: string;
            itemId?: never;
            chooseItemId?: never;
            boardId: string;
            bids: number;
          }
        | {
            type: "submit";
            title: string;
            imagePath: string;
            itemId: string;
            chooseItemId?: never;
            boardId?: never;
            bids?: never;
          }
        | {
            type: "tile";
            title: string;
            imagePath: string;
            itemId?: never;
            chooseItemId?: never;
            boardId?: never;
            bids?: never;
          }
      );
