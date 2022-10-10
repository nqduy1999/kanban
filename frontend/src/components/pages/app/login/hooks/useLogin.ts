import { postLogin } from "@/services";
import { setAccessToken } from "@/utils/auth";
import { useMutation } from "react-query"

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (res) => {
      console.log(res, 'res login');
      setAccessToken("")

    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}