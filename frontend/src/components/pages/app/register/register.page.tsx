import { IPostRegister } from "@/commons/constants/api-request";
import { RegisterForm } from "@/components/organisms/form";
import { BaseLayout, FormLayout } from "@/components/templates";
import { useRouter } from "next/router";
import { useRegister } from "./hooks/useRegister";

const RegisterPage = () => {
  const { locale } = useRouter();
  console.log(locale, "locale");

  const { mutate, isLoading } = useRegister();

  const onSubmit = (value: IPostRegister) => {
    mutate(value);
  };

  return (
    <BaseLayout>
      <FormLayout
        title="Register"
        subtitle="Input username and password to register"
      >
        <RegisterForm isLoading={isLoading} onSubmit={onSubmit} />
      </FormLayout>
    </BaseLayout>
  );
};

export { RegisterPage };
