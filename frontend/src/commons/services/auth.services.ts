import HttpCommon from "@/utils/httpCommon"
import { API_CHECKING_USERNAME, API_GET_ANYTHING, API_LOGIN, API_REGISTER } from "../constants/api";
import { ICheckingUsername, IPostLogin, IPostRegister } from "../constants/api-request";

const getAnything = async () => {
  const response = await HttpCommon.Get(API_GET_ANYTHING);
  return response
}

const postLogin = async (data: IPostLogin) => {
  const response = await HttpCommon.Post(API_LOGIN, data);
  return response
}

const postRegister = async (data: IPostRegister) => {
  const response = await HttpCommon.Post(API_REGISTER, data);
  return response
}

const checkingUserName = async (data: ICheckingUsername) => {
  const response = await HttpCommon.Post(API_CHECKING_USERNAME, data);
  return response
}

export {
  getAnything,
  postLogin,
  postRegister,
  checkingUserName
}