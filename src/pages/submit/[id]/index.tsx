import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { ItemCard } from "../../../components/item-card";
import { Item } from "../../../types/item";
import { StockItem } from "../../../types/stock-item";
import { Submit } from "../../../types/submit";
import { getMyItems, boardPost, getItems } from "../../../utils/api";
import type { NextPage } from "next";

const SubmitForm: NextPage = () => {
  const router = useRouter();
  const [sendItem, setSednItem] = useState<Item>();
  const [chooseItems, setChooseItems] = useState<Array<StockItem>>([]);
  const { register, handleSubmit } = useForm<Submit>({ defaultValues: { point: "", wanted: "", theme: "" } });
  const { id } = router.query;
  const onSubmit: SubmitHandler<Submit> = async (data) => {
    await boardPost(id as string, data.wanted, data.theme, data.point);
    await router.push(`/submit/${id}/success`);
  };
  useEffect(() => {
    (async () => {
      const items = await getMyItems();
      setSednItem(items.find((item) => item.id === id));
      const res = await getItems();
      setChooseItems(res);
    })();
  }, [id]);
  return (
    <chakra.div height="100vh" display="flex" justifyContent="center">
      <chakra.h1 color="white" fontSize="1.875rem">
        出品確認
      </chakra.h1>
      <chakra.p color="white" fontSize="1.5rem">
        あげるもの
      </chakra.p>
      <ItemCard type="tile" title={sendItem?.name as string} imagePath={sendItem?.image_url as string} />
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <chakra.select {...register("wanted", { required: true })}>
          {chooseItems.map((item) => (
            <chakra.option value={item.id} key={item.id}>
              {item.name}
            </chakra.option>
          ))}
        </chakra.select>
        <chakra.input {...register("theme", { required: true })} type="text" placeholder="テーマを決めよう" />
        <chakra.textarea {...register("point", { required: true })} />
        <chakra.div display="flex">
          <Button isNegative border disable={false} onClick={() => router.back()}>
            戻る
          </Button>
          <Button isNegative={false} border={false} disable={false} type="submit">
            出品
          </Button>
        </chakra.div>
      </chakra.form>
    </chakra.div>
  );
};

export default SubmitForm;
