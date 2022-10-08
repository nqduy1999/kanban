import { postLogin } from "@/commons/services";
import { useMutation } from "react-query"

export const useLogin = () => {

  return useMutation(postLogin, {
    onSuccess: (res) => {
      console.log(res, 'res');
    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}