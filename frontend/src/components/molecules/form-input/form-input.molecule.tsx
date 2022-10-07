import { IInput, Input } from "@/components/atoms";
import { FieldMetaProps } from "formik";
import { FC } from "react";

interface IMetaCustom extends FieldMetaProps<any> {
  errorMsg?: string;
}
export interface IFormInput extends IInput {
  meta: IMetaCustom;
  label: string;
  classLabel?: string;
  wrapperClassName?: string;
}

const FormInput: FC<IFormInput> = ({
  label,
  classLabel,
  meta,
  id,
  type,
  wrapperClassName,
  ...rest
}) => {
  console.log(meta, "errors.length > 0");

  return (
    <div className={`w-full flex flex-col ${wrapperClassName ?? ""}`}>
      {label && (
        <label className={classLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <Input id={id} {...rest} type={type} />
      </div>
      {((meta.touched && meta.error) || meta.errorMsg) && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {meta.error || meta.errorMsg}
        </span>
      )}
    </div>
  );
};

FormInput.defaultProps = {
  classLabel:
    "font-semibold text-sm leading-none text-gray-900 dark:text-white ",
  className:
    "leading-none w-full text-gray-900 dark:text-gray-50 p-3 focus:outline-none border-gray-400 dark:border-gray-600 mt-2 border-2 dark:bg-gray-600 rounded bg-white",
};
export { FormInput };
