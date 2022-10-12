import { postRegister } from "@/services";
import { useRouter } from "next/router";
import { useMutation } from "react-query"

export const useRegister = () => {
  const router = useRouter();

  return useMutation(postRegister, {
    onSuccess: () => {
      router.push('/')
    }
  })
}