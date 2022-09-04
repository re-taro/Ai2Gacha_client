import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../../../components/button";
import { MatchCard } from "../../../components/match-card";
import { Item } from "../../../types/item";
import { showApplies } from "../../../utils/api";
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{
  items: Array<Item>;
  boardId: string | Array<string> | undefined;
}> = async (context) => {
  const { boardId } = context.query;
  const items = await showApplies(boardId as string);
  return {
    props: {
      items,
      boardId,
    },
  };
};

const MatchBoard: NextPage<Props> = ({ items, boardId }) => {
  const router = useRouter();
  return (
    <chakra.div>
      <chakra.h1 color="white" textAlign="center" fontSize="30px">
        入札一覧
      </chakra.h1>
      {items.map((item) => (
        <MatchCard score={item.score} boardId={boardId as string} itemId={item.id} isSelect key={item.id} />
      ))}
      <Button isNegative border disable={false} onClick={() => router.back()}>
        戻る
      </Button>
    </chakra.div>
  );
};

export default MatchBoard;
