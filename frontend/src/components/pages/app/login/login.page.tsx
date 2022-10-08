import { IPostLogin } from "@/commons/constants/api-request";
import { LoginForm } from "@/components/organisms/form";
import { BaseLayout, FormLayout } from "@/components/templates";
import { useRouter } from "next/router";
import { useLogin } from "./hooks/useLogin";

const LoginPage = () => {
  const { locale } = useRouter();

  console.log(locale, "locale");

  const { mutate, isLoading } = useLogin();

  const onSubmit = (value: IPostLogin) => {
    mutate(value);
  };

  return (
    <BaseLayout>
      <FormLayout title="Login" subtitle="Input username and password to login">
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
      </FormLayout>
    </BaseLayout>
  );
};

export { LoginPage };
