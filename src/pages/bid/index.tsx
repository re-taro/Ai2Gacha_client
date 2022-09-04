import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { ItemCard } from "../../components/item-card";
import { getMyItems } from "../../utils/api";
import type { Item } from "../../types/item";
import type { NextPage } from "next";

const Bid: NextPage = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  useEffect(() => {
    (async () => {
      const res = await getMyItems();
      setItems(res);
    })();
  }, []);
  return (
    <chakra.section height="100vh" display="flex" justifyContent="center">
      <chakra.h1 color="white" fontSize="1.875rem">
        差し出す商品
      </chakra.h1>
      {items.map((item) => (
        <ItemCard type="select" title={item.name} imagePath={item.image_url} itemId={item.item_kind} key={item.id} />
      ))}
      <Link href="/" passHref>
        <Button as="a" isNegative border disable={false}>
          戻る
        </Button>
      </Link>
    </chakra.section>
  );
};

export default Bid;
