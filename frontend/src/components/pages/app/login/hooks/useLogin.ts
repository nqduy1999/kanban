import { notify } from "@/components/atoms";
import { postLogin } from "@/services";
import { useMutation } from "react-query"

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (res) => {
      notify('success', "top-right", "Login success")
      console.log(res);

    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}