import { checkingUserName } from "@/commons/services";
import { IconChecking, IconLoading } from "@/components/atoms/svg";
import { FormInput } from "@/components/molecules";
import { useField } from "formik";
import _ from "lodash";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";

const AutoCompletedUsername: FC<any> = ({ rest }) => {
  const [field, meta] = useField({ name: "username", type: "text" });
  const [debonceText, setDebounceText] = useState<string>();
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const { mutate } = useMutation(checkingUserName, {
    onSuccess: (res) => {
      setErrors("");
      setIsValid(true);
      console.log(res, "response");
    },
    onError: (error: any) => {
      setIsValid(false);
      setErrors(error.response.data.msg);
    },
  });

  const onChange = (value: string) => {
    setLoading(false);
    setDebounceText(value);
  };

  const debounceFn = useCallback(_.debounce(onChange, 500), []);

  useEffect(() => {
    if (debonceText) {
      mutate({ username: debonceText });
    }
  }, [debonceText]);

  const renderSuffix = () => {
    if (loading) return <IconLoading />;
    if (!loading && !meta.error && isValid) return <IconChecking />;
    return null;
  };
  return (
    <FormInput
      meta={errors.length > 0 ? { ...meta, errorMsg: errors } : meta}
      name={field.name}
      value={field.value}
      placeholder="Input username"
      label="Username"
      classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      className={`leading-none w-full text-gray-900 dark:text-gray-50 p-3 focus:outline-none ${
        (meta.touched && meta.error) || errors.length > 0
          ? "border-rose-500"
          : "border-gray-400 dark:border-gray-600"
      } mt-2 border-2 dark:bg-gray-600 rounded-lg bg-white h-12`}
      onChange={(e: any) => {
        setLoading(true);
        debounceFn(e.target.value);
        return field.onChange(e);
      }}
      suffix={renderSuffix()}
      type={"text"}
      {...rest}
    />
  );
};

export { AutoCompletedUsername };
