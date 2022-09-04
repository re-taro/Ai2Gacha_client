import { client } from "../libs/axios";

const SIGN_UP = process.env.NEXT_PUBLIC_SIGN_UP || "";
const LOG_IN = process.env.NEXT_PUBLIC_LOG_IN || "";

const signup = async (id: string, password: string) => {
  await client.post(`/Signup?${SIGN_UP}`, {
    id,
    password,
  });
};

const login = async (id: string, password: string) => {
  await client
    .post(`/Login?${LOG_IN}`, {
      id,
      password,
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("userId", id);
      }
    });
};

export { signup, login };
