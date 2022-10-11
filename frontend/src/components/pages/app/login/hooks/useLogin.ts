import { postLogin } from "@/services";
import { setAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import { useMutation } from "react-query"

export const useLogin = () => {
  const router = useRouter();
  return useMutation(postLogin, {
    onSuccess: (res) => {
      setAccessToken(res.data.token)
      router.push('/')
    },
    onError: (err) => {
      console.log(err, 'err');
    }
  })
}