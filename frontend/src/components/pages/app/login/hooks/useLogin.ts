import { postLogin } from "@/services";
import { setAccessToken } from "@/utils/auth";
import { useMutation } from "react-query"

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (res) => {
      setAccessToken(res.data.token)
    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}