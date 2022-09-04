import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "src/components/button";

const Index: NextPage = () => {
  return (
    <chakra.div display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <chakra.div display="flex" flexDirection="column" justifyContent="space-between" height="35vh">
        <Link href="/purchase" passHref>
          <Button as="a" isNegative={false} border={false} disable={false}>
            購入
          </Button>
        </Link>
        <Link href="/bid" passHref>
          <Button as="a" isNegative={false} border={false} disable={false}>
            検索
          </Button>
        </Link>
        <Link href="/submit" passHref>
          <Button as="a" isNegative={false} border={false} disable={false}>
            出品
          </Button>
        </Link>
      </chakra.div>
    </chakra.div>
  );
};

export default Index;
