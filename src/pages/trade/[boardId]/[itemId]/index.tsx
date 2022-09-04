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
    <chakra.div>
      <chakra.h1 color="white" textAlign="center" fontSize="30px">
        交換確認
      </chakra.h1>
      <MatchCard score={targetItem?.score as number} boardId="" itemId="" isSelect={false} />
      <chakra.p>あげるもの</chakra.p>
      <ItemCard type="tile" imagePath={myItem?.image_url as string} title={myItem?.name as string} />
      <chakra.p>もらうもの</chakra.p>
      <ItemCard type="tile" imagePath={targetItem?.image_url as string} title={targetItem?.name as string} />
      <ThemeCard theme={myItem?.like_theme as string} isTag />
      <chakra.textarea readOnly value={myItem?.apply_point} />
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
  );
};

export default TradeForm;
