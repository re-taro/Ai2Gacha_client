import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/button";
import { ThemeCard } from "../../../../components/theme-card";
import { searchPost } from "../../../../utils/api";
import type { Item } from "../../../../types/item";
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{
  items: Array<Item>;
  selectId: string | string[] | undefined;
  chooseId: string | string[] | undefined;
}> = async (context) => {
  const { selectId, chooseId } = context.query;
  const items = await searchPost(selectId as string, chooseId as string);
  return {
    props: {
      items,
      selectId,
      chooseId,
    },
  };
};

const Theme: NextPage<Props> = ({ items, selectId, chooseId }) => {
  const router = useRouter();
  return (
    <chakra.section height="100vh" display="flex" justifyContent="center">
      <chakra.h1 color="white" fontSize="1.875rem">
        テーマ選択
      </chakra.h1>
      {items.map((item) => (
        <ThemeCard
          theme={item.like_theme}
          selectId={selectId as string}
          chooseId={chooseId as string}
          boardId={item.board_id}
          bids={item.apply_number}
          isTag={false}
          key={item.id}
        />
      ))}
      <Button isNegative border disable={false} onClick={() => router.back()}>
        戻る
      </Button>
    </chakra.section>
  );
};

export default Theme;
