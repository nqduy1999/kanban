import { postRegister } from "@/services";
import { useMutation } from "react-query"

export const useRegister = () => {
  return useMutation(postRegister, {
    onSuccess: (res) => {
      console.log(res, 'res');
    }
  })
}