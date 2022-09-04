import { client } from "../libs/axios";
import type { Balance } from "../types/balance";
import type { Item } from "../types/item";
import type { StockItem } from "../types/stock-item";

const SIGN_UP = process.env.NEXT_PUBLIC_SIGN_UP || "";
const LOG_IN = process.env.NEXT_PUBLIC_LOG_IN || "";
const DEPOSIT = process.env.NEXT_PUBLIC_DEPOSIT || "";
const PURCHASE = process.env.NEXT_PUBLIC_PURCHASE || "";
const GET_BALANCE = process.env.NEXT_PUBLIC_GETBALANCE || "";
const GET_ITEMS = process.env.NEXT_PUBLIC_GETITEMS || "";
const GET_MYITEMS = process.env.NEXT_PUBLIC_GETMYITEMS || "";
const SEARCH_POST = process.env.NEXT_PUBLIC_SEARCH_POST || "";
const APPLY_POST = process.env.NEXT_PUBLIC_APPLY_POST || "";
const BOARD_POST = process.env.NEXT_PUBLIC_BOARD_POST || "";
const SHOW_APPLIES = process.env.NEXT_PUBLIC_SHOW_APPLIES || "";

const signup = async (id: string, password: string): Promise<void> => {
  await client.post(`/Signup?${SIGN_UP}`, {
    id,
    password,
  });
};

const login = async (id: string, password: string): Promise<void> => {
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

const deposit = async (wallet: number): Promise<void> => {
  const id = localStorage.getItem("userId");
  await client.post(`/Deposit?${DEPOSIT}`, {
    id,
    wallet,
  });
};

const purchase = (event_id: string, price: number): Promise<Item> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const user_id = localStorage.getItem("userId");
  return new Promise<Item>((resolve, reject) => {
    client
      .post<{ items: Item }>(`/Purchase?${PURCHASE}`, {
        user_id,
        event_id,
        price,
      })
      .then((res) => resolve(res.data.items))
      .catch((err) => reject(err));
  });
};

const getBalance = (): Promise<number> => {
  const id = localStorage.getItem("userId");
  return new Promise<number>((resolve, reject) => {
    client
      .get<Balance>(`/GetMyBalance?${GET_BALANCE}&id=${id}`)
      .then((res) => resolve(res.data.balance))
      .catch((err) => reject(err));
  });
};

const getItems = (): Promise<Array<StockItem>> => {
  return new Promise<Array<StockItem>>((resolve, reject) => {
    client
      .get<{ items: Array<StockItem> }>(`/GetItems?${GET_ITEMS}&event_id=event`)
      .then((res) => resolve(res.data.items))
      .catch((err) => reject(err));
  });
};

const getMyItems = (): Promise<Array<Item>> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const user_id = localStorage.getItem("userId");
  return new Promise<Array<Item>>((resolve, reject) => {
    client
      .get<{ items: Array<Item> }>(`/GetMyItems?${GET_MYITEMS}?user_id=${user_id}&event_id=event`)
      .then((res) => resolve(res.data.items))
      .catch((err) => reject(err));
  });
};

const searchPost = (selectId: string, chooseId: string): Promise<Array<Item>> => {
  return new Promise<Array<Item>>((resolve, reject) => {
    client
      .post<{ items: Array<Item> }>(`/SearchPost?${SEARCH_POST}`, {
        event_id: "event",
        item_kind: chooseId,
        wanted_item_kind: selectId,
      })
      .then((res) => resolve(res.data.items))
      .catch((err) => reject(err));
  });
};

const applyPost = async (id: string, board_id: string, apply_point: string): Promise<void> => {
  await client.post(`/ApplyPost?${APPLY_POST}`, {
    id,
    event_id: "event",
    board_id,
    apply_point,
  });
};

const boardPost = async (
  id: string,
  wanted_item_kind: string,
  like_theme: string,
  post_point: string,
): Promise<void> => {
  await client.post(`/BoardPost?${BOARD_POST}`, {
    id,
    event_id: "event",
    wanted_item_kind,
    like_theme,
    post_point,
  });
};

const showApplies = (board_id: string): Promise<Array<Item>> => {
  return new Promise<Array<Item>>((resolve, reject) => {
    client
      .post<{ items: Array<Item> }>(`/SearchApplies?${SHOW_APPLIES}`, {
        event_id: "event",
        board_id,
      })
      .then((res) => resolve(res.data.items))
      .catch((err) => reject(err));
  });
};

export {
  signup,
  login,
  deposit,
  purchase,
  getBalance,
  getItems,
  getMyItems,
  searchPost,
  applyPost,
  boardPost,
  showApplies,
};
