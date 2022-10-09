import { notify } from "@/components/atoms";
import { postRegister } from "@/services";
import { useMutation } from "react-query"

export const useRegister = () => {
  return useMutation(postRegister, {
    onSuccess: (res) => {
      console.log(res, 'res');
      notify('success', "top-right", "Register success")
    }
  })
}