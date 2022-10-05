import { postLogin } from "@/commons/services";
import { useMutation } from "react-query"

export const useLogin = () => {

  return useMutation(postLogin, {
    onSuccess: (res) => {
      console.log(res, 'res');

      console.log('on Success');
    },
    onError: (err) => {
      console.log(err, 'err');

      console.log('onError');

    }
  })
}