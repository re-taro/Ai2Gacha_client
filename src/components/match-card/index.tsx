import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../button";
import type { MatchCardProperties } from "./type/model";
import type { FC } from "react";

const MatchCard: FC<MatchCardProperties> = ({ score, boardId, itemId, isSelect = true, ...rest }) => (
  <chakra.div
    maxWidth="21.25rem"
    paddingX="0.625rem"
    paddingY="0.75rem"
    bgColor="white"
    borderRadius="0.5rem"
    {...rest}
  >
    <chakra.div display="flex" alignItems="flex-end" justifyContent="space-between">
      <chakra.p color="black" fontSize="1.25rem">
        マッチ度
      </chakra.p>
      <chakra.p fontSize="4.5rem" lineHeight={1} color={score >= 90 ? "primary" : "black"}>
        {score}
      </chakra.p>
      {isSelect ? (
        <Link href={`/trade/${boardId}/${itemId}`} passHref>
          <Button
            as="a"
            isNegative={false}
            border={false}
            disable={false}
            paddingX="1.25rem"
            paddingY="0.125rem"
            fontSize="1.25rem"
          >
            選択
          </Button>
        </Link>
      ) : (
        <chakra.div width="2.5rem" />
      )}
    </chakra.div>
  </chakra.div>
);

export { MatchCard };
