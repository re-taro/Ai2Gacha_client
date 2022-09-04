import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { Button } from "../../components/button";
import { SvgWrapper } from "../../components/svg-wrapper";
import { deposit, purchase, getBalance } from "../../utils/api";
import type { NextPage } from "next";

const Purchase: NextPage = () => {
  const [balance, setBalance] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const res = await getBalance();
      setBalance(res);
    })();
  }, []);
  const router = useRouter();
  const [Modal, open, close] = useModal("root");
  const addDeposit = () => {
    deposit(1000);
  };
  const buy = async () => {
    const item = await purchase("event", 100);
    await router.push(`/purchase/${item.item_kind}`);
  };
  return (
    <>
      <chakra.section height="100vh" display="flex" justifyContent="center" alignItems="center">
        <chakra.div display="flex" flexDirection="column" alignItems="center">
          <SvgWrapper path="/statics/undraw_successful_purchase_re_mpig 1.svg" />
          <Button isNegative={false} border={false} disable={false} onClick={addDeposit} my="1.875rem">
            残高を増やす
          </Button>
          <chakra.div display="flex" justifyContent="space-between" w="100%">
            <Link href="/" passHref>
              <Button as="a" isNegative border disable={false}>
                戻る
              </Button>
            </Link>
            <Button isNegative={false} border={false} disable={false} onClick={open}>
              購入に進む
            </Button>
          </chakra.div>
        </chakra.div>
      </chakra.section>
      <Modal>
        <chakra.div
          display="flex"
          flexDirection="column"
          px="1.5625rem"
          py="2.8125rem"
          bgColor="white"
          borderRadius="1.5625rem"
        >
          <chakra.p color="black" fontSize="1.625rem">{`利用可能額 ${balance}円`}</chakra.p>
          <chakra.p color="black" fontSize="1.625rem" my="1.5rem">
            購入額 100円
          </chakra.p>
          <chakra.p color="black" fontSize="1.625rem">{`残高 ${balance - 100}`}</chakra.p>
          <Button my="1.875rem" isNegative={false} border={false} disable={false} onClick={buy}>
            購入して開封
          </Button>
          <Button isNegative border={false} disable={false} onClick={close}>
            キャンセル
          </Button>
        </chakra.div>
      </Modal>
    </>
  );
};

export default Purchase;
