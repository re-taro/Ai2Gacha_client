import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../../../components/button";
import { ItemCard } from "../../../components/item-card";
import { getItems } from "../../../utils/api";
import type { StockItem } from "../../../types/stock-item";
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{
  items: Array<StockItem>;
  selectId: string | Array<string> | undefined;
}> = async (context) => {
  const { selectId } = context.query;
  const items = await getItems();
  return {
    props: {
      items,
      selectId,
    },
  };
};

const Choose: NextPage<Props> = ({ items, selectId }) => (
  <chakra.section height="100vh" display="flex" justifyContent="center">
    <chakra.h1 color="white" fontSize="1.875rem">
      受け取る商品
    </chakra.h1>
    {items.map((item) => (
      <ItemCard
        type="choose"
        title={item.name}
        imagePath={item.image_url}
        itemId={selectId as string}
        chooseItemId={item.id}
        key={item.id}
      />
    ))}
    <Link href="/bid" passHref>
      <Button as="a" isNegative border disable={false}>
        戻る
      </Button>
    </Link>
  </chakra.section>
);

export default Choose;
