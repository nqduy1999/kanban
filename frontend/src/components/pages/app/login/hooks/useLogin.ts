import { postLogin } from "@/services";
import { useMutation } from "react-query"

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (res) => {
      // notify()
      console.log(res, 'res');
    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}