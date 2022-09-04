import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../components/button";
import type { NextPage } from "next";

const Start: NextPage = () => (
  <chakra.section height="100vh" display="flex" justifyContent="center" alignItems="center">
    <chakra.div display="flex" flexDirection="column" alignItems="center">
      <chakra.p lineHeight={1} color="white" fontSize="1.875rem" mb="4.6875rem">
        ようこそ、
        <chakra.span display="inline-block">
          <chakra.img src="/statics/logo.svg" />
        </chakra.span>
        へ
      </chakra.p>
      <Link href="/signup" passHref>
        <Button as="a" isNegative={false} border={false} disable={false}>
          新規登録する
        </Button>
      </Link>
      <Link href="/login" passHref>
        <chakra.a color="white" fontSize="1.625rem" textDecoration="underline" mt="3.125rem">
          ログインする→
        </chakra.a>
      </Link>
    </chakra.div>
  </chakra.section>
);

export default Start;
