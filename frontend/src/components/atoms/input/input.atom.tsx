import React, { FC, ReactNode } from "react";

export interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  name?: string | any;
  id?: string;
  disabled?: boolean;
  value?: string | number;
  suffix?: ReactNode;
  prefix?: ReactNode;
}

const Input: FC<IInput> = ({ suffix, prefix, className, type, ...rest }) => {
  return (
    <div className={className + " flex"}>
      {prefix}
      <input
        className="w-full bg-transparent focus:outline-none"
        type={type}
        aria-label={type}
        {...rest}
      />
      {suffix}
    </div>
  );
};

Input.defaultProps = {
  className:
    "border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500",
  type: "text",
};
export { Input };
