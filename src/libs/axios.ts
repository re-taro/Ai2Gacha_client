import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "";

const client = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export { client };
