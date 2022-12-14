import React, { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { RegisterFormProvider } from "./register-form.provider";
import { LoadingButton } from "@/components/molecules";
import { RegisterFormContent } from "./register-form.content";
import {
  confirmPasswordValidationSchema,
  passwordValidationSchema,
  usernameValidationSchema,
} from "../../schema/auth.schema";
import { NextLink } from "@/components/molecules/link/link.molecule";

const validationSchema = Yup.object({
  username: usernameValidationSchema,
  password: passwordValidationSchema,
  confirmPassword: confirmPasswordValidationSchema,
});

interface IRegisterForm {
  onSubmit: any;
  isLoading: boolean;
}

export const RegisterForm: FC<IRegisterForm> = ({ onSubmit, isLoading }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <RegisterFormProvider>
          <RegisterFormContent />
          <LoadingButton
            className="mt-6 w-full text-white bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            loading={isLoading}
            type="submit"
          >
            Register
          </LoadingButton>
          <NextLink
            href="/login"
            className="font-bold dark:text-primary-600 mt-4 text-sm font-light text-gray-600 text-gray-400 block"
          >
            Back to login
          </NextLink>
        </RegisterFormProvider>
      </Form>
    </Formik>
  );
};
