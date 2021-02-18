import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HTC_DOMAIN}/api`,
  responseType: "json"
});
