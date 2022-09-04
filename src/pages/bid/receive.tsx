import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "src/components/button";
import { SvgWrapper } from "src/components/svg-wrapper";

const receiveResult: NextPage = () => {
    return (
        <chakra.div textAlign="center" height="100vh">
            <chakra.h1 color="white" paddingTop="190px" paddingBottom="20px" fontSize="30px">受け取りました！</chakra.h1>
            <SvgWrapper path="/statics/undraw_gift_re_qr17 1.svg" />
            <chakra.div
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                marginTop="160px"
            >
                <Link href="/" passHref>
                    <Button as="a" isNegative border disable={false}>
                        ホームに戻る
                    </Button>
                </Link>
            </chakra.div>
        </chakra.div>
    )
}

export default receiveResult