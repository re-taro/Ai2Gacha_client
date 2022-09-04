import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../button";
import type { ItemCardProperties } from "./type/model";
import type { FC } from "react";

const ItemCard: FC<ItemCardProperties> = ({ type, title, imagePath, itemId, chooseItemId, bids, ...rest }) => {
  let link;
  if (type === "select") {
    link = `/bid/${itemId}`;
  } else if (type === "choose") {
    link = `/bid/${itemId}/${chooseItemId}`;
  } else if (type === "exhibit") {
    link = `/trade/${itemId}`;
  } else {
    link = `/submit/${itemId}`;
  }
  return (
    <chakra.div
      minHeight="7.5rem"
      maxWidth="21.25rem"
      paddingX="0.75rem"
      paddingY="0.9375rem"
      bgColor="white"
      borderRadius="0.5rem"
      display="flex"
      justifyContent={type !== "exhibit" ? "flex-start" : "space-between"}
      {...rest}
    >
      <chakra.img src={imagePath} alt={title} width={120} height={90} objectFit="cover" objectPosition="50% 0" />
      <chakra.div
        display="flex"
        flexDirection="column"
        marginLeft="1.25rem"
        justifyContent={type === "tile" ? "center" : "space-between"}
      >
        <chakra.h2 overflowWrap="break-word" color="black" fontSize="1.25rem">
          {title}
        </chakra.h2>
        <chakra.div display="flex" alignItems="flex-end" justifyContent="space-between">
          {type !== "tile" && (
            <>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href={link} passHref>
                <Button
                  as="a"
                  isNegative={type === "exhibit"}
                  border={false}
                  disable={false}
                  paddingX="1.25rem"
                  paddingY="0.125rem"
                  fontSize="1.25rem"
                >
                  {type === "exhibit" ? "出品中" : "選択"}
                </Button>
              </Link>
            </>
          )}
          {type === "exhibit" && <chakra.p fontSize="0.875rem" color="black">{`入札数: ${bids}`}</chakra.p>}
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export { ItemCard };
