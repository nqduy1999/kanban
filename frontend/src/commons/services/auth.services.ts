import HttpCommon from "@/utils/httpCommon"
import { API_GET_ANYTHING } from "../constants/api";

const getAnything = async () => {
  const res = await HttpCommon.Get(API_GET_ANYTHING);
  return res
}

export {
  getAnything
}