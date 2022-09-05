import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/button";
import { ItemCard } from "../../../../components/item-card";
import { MatchCard } from "../../../../components/match-card";
import { ThemeCard } from "../../../../components/theme-card";
import { Item } from "../../../../types/item";
import { showApplies, getMyItems } from "../../../../utils/api";
import type { NextPage } from "next";

const TradeForm: NextPage = () => {
  const [myItem, setMyitem] = useState<Item>();
  const [targetItem, setTargetItem] = useState<Item>();
  const router = useRouter();
  const { boardId, itemId } = router.query;
  useEffect(() => {
    (async () => {
      const myItems = await getMyItems();
      setMyitem(myItems.find((item) => item.board_id === boardId));
      const targetItems = await showApplies(boardId as string);
      setTargetItem(targetItems.find((item) => item.id === itemId));
    })();
  }, [boardId, itemId]);
  return (
    <chakra.section height="100vh" display="flex" justifyContent="center">
      <chakra.div display="flex" flexDirection="column" alignItems="center" gap="1.875rem">
        <chakra.h1 color="white" textAlign="center" fontSize="30px">
          交換確認
        </chakra.h1>
        <MatchCard score={targetItem?.score as number} boardId="" itemId="" isSelect={false} />
        <chakra.p color="white" fontSize="1.25rem">あげるもの</chakra.p>
        <ItemCard type="tile" imagePath={myItem?.image_url as string} title={myItem?.name as string} />
        <chakra.p color="white" fontSize="1.25rem">もらうもの</chakra.p>
        <ItemCard type="tile" imagePath={targetItem?.image_url as string} title={targetItem?.name as string} />
        <ThemeCard theme={myItem?.like_theme as string} isTag />
        <chakra.div
          display="flex"
          flexDirection="column"
          px="1.5625rem"
          py="2.8125rem"
          bgColor="white"
          borderRadius="1.5625rem"
        >
          <chakra.p>{myItem?.apply_point}</chakra.p>
        </chakra.div>
        <chakra.div display="flex" w="100%" justifyContent="space-between">
          <Button isNegative border disable={false} onClick={() => router.back()}>
            戻る
          </Button>
          <Button
            isNegative={false}
            border={false}
            disable={false}
            onClick={() => router.push(`/trade/${boardId}/${itemId}/success`)}
          >
            確定
          </Button>
        </chakra.div>
      </chakra.div>
    </chakra.section>
  );
};

export default TradeForm;
