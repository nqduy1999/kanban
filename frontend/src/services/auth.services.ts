import HttpCommon from "@/utils/httpCommon"
import { API_CHECKING_USERNAME, API_GET_ANYTHING, API_GET_USER, API_LOGIN, API_REGISTER, API_VERIFY_TOKEN } from "@/commons/constants/api";
import { ICheckingUsername, IPostLogin, IPostRegister } from "@/commons/constants/api-request";
import { IResponseLogin } from "@/types/response";

const getAnything = async () => {
  const response = await HttpCommon.Get(API_GET_ANYTHING);
  return response
}

const postLogin = async (data: IPostLogin) => {
  const response = await HttpCommon.Post(API_LOGIN, data);
  return response
}

const postRegister = async (data: IPostRegister) => {
  const response: IResponseLogin = await HttpCommon.Post(API_REGISTER, data);
  return response
}

const checkingUserName = async (data: ICheckingUsername) => {
  const response = await HttpCommon.Post(API_CHECKING_USERNAME, data);
  return response
}

const fetchUser = async () => {
  const response = await HttpCommon.Post(API_GET_USER, {}, false);
  return response
}

const verifyToken = async () => {
  const response = await HttpCommon.Post(API_VERIFY_TOKEN, {}, false);
  return response
}

export {
  getAnything,
  postLogin,
  postRegister,
  checkingUserName,
  verifyToken,
  fetchUser
}