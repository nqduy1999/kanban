import { checkingUserName } from "@/commons/services";
import { FormInput } from "@/components/molecules";
import { useField } from "formik";
import _ from "lodash";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
const AutoCompletedUsername: FC<any> = ({ rest }) => {
  const [field, meta] = useField({ name: "username", type: "text" });
  const [isExisted, setIsExisted] = useState<boolean>(false);
  const [debonceText, setDebounceText] = useState<string>();
  const [errors, setErrors] = useState();

  console.log(errors, "errors");

  const { mutate, isLoading } = useMutation(checkingUserName, {
    onSuccess: (res) => {
      console.log(res, "response");
    },
    onError: (error: any) => {
      setErrors(error);
    },
  });

  const onChange = (value: string) => {
    setDebounceText(value);
  };

  const debounceFn = useCallback(_.debounce(onChange, 1000), []);

  useEffect(() => {
    if (debonceText) {
      mutate({ username: debonceText });
    }
  }, [debonceText]);

  return (
    <FormInput
      meta={meta}
      name={field.name}
      value={field.value}
      placeholder="Input username"
      label="Username"
      classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      className={`leading-none w-full text-gray-900 dark:text-gray-50 p-3 focus:outline-none ${
        meta.touched && meta.error
          ? "border-rose-500"
          : "border-gray-400 dark:border-gray-600"
      } mt-2 border-2 dark:bg-gray-600 rounded-lg bg-white`}
      onChange={(e: any) => {
        debounceFn(e.target.value);
        return field.onChange(e);
      }}
      type={"text"}
      {...rest}
    />
  );
};

export { AutoCompletedUsername };
