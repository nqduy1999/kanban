import { postLogin } from "@/services";
import { setAccessToken, setAuth } from "@/utils/auth";
import { useRouter } from "next/router";
import { useMutation } from "react-query"

export const useLogin = () => {
  const router = useRouter();
  return useMutation(postLogin, {
    onSuccess: (res) => {
      setAccessToken(res.data.token);
      setAuth(true);
      router.push('/')
    }
  })
}