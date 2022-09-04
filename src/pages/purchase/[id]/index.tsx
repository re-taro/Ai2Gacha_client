import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../../../components/button";
import { getItems } from "../../../utils/api";
import type { StockItem } from "../../../types/stock-item";
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{ item: StockItem | undefined }> = async (context) => {
  const { id } = context.query;
  const results = await getItems();
  const item = results.find((result) => result.id === id);
  return {
    props: {
      item,
    },
  };
};

const Submit: NextPage<Props> = ({ item }) => (
  <chakra.section height="100vh" display="flex" justifyContent="center" alignItems="center">
    <chakra.div display="flex" flexDirection="column" alignItems="center">
      <chakra.div display="flex" flexDirection="column" alignItems="center">
        <chakra.img
          src={item?.image_url}
          alt={item?.name}
          width={320}
          height={240}
          objectFit="cover"
          objectPosition="50% 0"
        />
        <chakra.p color="white" fontSize="1.625rem">
          おめでとうございます！
        </chakra.p>
        <chakra.p color="white" fontSize="1.625rem">
          {`${item?.name}が`}
        </chakra.p>
        <chakra.p color="white" fontSize="1.625rem">
          当たりました！
        </chakra.p>
        <Link href="/" passHref>
          <Button as="a" isNegative border disable={false}>
            ホームに戻る
          </Button>
        </Link>
      </chakra.div>
    </chakra.div>
  </chakra.section>
);

export default Submit;
