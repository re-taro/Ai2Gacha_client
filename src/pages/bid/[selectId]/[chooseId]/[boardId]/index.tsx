import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../../components/button";
import { ItemCard } from "../../../../../components/item-card";
import { ThemeCard } from "../../../../../components/theme-card";
import { searchPost, getMyItems, applyPost } from "../../../../../utils/api";
import type { Apply } from "../../../../../types/apply";
import type { Item } from "../../../../../types/item";
import type { NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";

const ApplyForm: NextPage = () => {
  const router = useRouter();
  const { selectId, chooseId, boardId } = router.query;
  const [id, setId] = useState<string | undefined>("");
  const [item, setItem] = useState<Item>();
  const { register, handleSubmit } = useForm<Apply>({ defaultValues: { point: "" } });
  useEffect(() => {
    (async () => {
      const items = await getMyItems();
      const it = items.find((i) => i.item_kind === selectId);
      setId(it?.id);
      const results = await searchPost(selectId as string, chooseId as string);
      setItem(results.find((res) => res.board_id === boardId));
    })();
  }, [boardId, chooseId, selectId]);
  const onSubmit: SubmitHandler<Apply> = async (data) => {
    await applyPost(id as string, boardId as string, data.point);
    await router.push(`/bid/${selectId}/${chooseId}/${boardId}/success`);
  };
  return (
    <chakra.section height="100vh" display="flex" justifyContent="center">
      <chakra.h1 color="white" fontSize="1.875rem">
        入札申請
      </chakra.h1>
      <chakra.p color="white" fontSize="1.5rem">
        受け取る商品
      </chakra.p>
      <ItemCard type="tile" title={item?.name as string} imagePath={item?.image_url as string} />
      <chakra.p color="white" fontSize="1.5rem">
        {item?.apply_number}
      </chakra.p>
      <ThemeCard theme={item?.like_theme as string} isTag />
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <chakra.textarea {...register("point", { required: true })} />
        <chakra.div display="flex">
          <Button isNegative border disable={false} onClick={() => router.back()}>
            戻る
          </Button>
          <Button isNegative={false} border={false} disable={false} type="submit">
            確定
          </Button>
        </chakra.div>
      </chakra.form>
    </chakra.section>
  );
};

export default ApplyForm;
