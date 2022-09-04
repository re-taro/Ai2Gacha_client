import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { login } from "../utils/api";
import type { Input } from "../types/input";
import type { NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Input>({ defaultValues: { userId: "", password: "" } });
  const router = useRouter();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    await login(data.userId, data.password);
    await router.push("/");
  };
  return (
    <chakra.section height="100vh" display="flex" justifyContent="center" alignItems="center">
      <chakra.div display="flex" flexDirection="column" alignItems="center">
        <chakra.form
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="35vh"
          onSubmit={handleSubmit(onSubmit)}
        >
          <chakra.input type="text" placeholder="user id" {...register("userId", { required: true })} />
          <chakra.input type="text" placeholder="pass word" {...register("password", { required: true })} />
          <Button isNegative={false} border={false} disable={false} type="submit">
            ログイン
          </Button>
        </chakra.form>
      </chakra.div>
    </chakra.section>
  );
};

export default Login;
