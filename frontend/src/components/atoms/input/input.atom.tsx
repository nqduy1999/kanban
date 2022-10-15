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
  wrapperClassName?: string;
}

const Input: FC<IInput> = ({
  suffix,
  prefix,
  className,
  wrapperClassName,
  type,
  ...rest
}) => {
  return (
    <div className={wrapperClassName + " flex"}>
      {prefix}
      <input className={className} type={type} aria-label={type} {...rest} />
      {suffix}
    </div>
  );
};

Input.defaultProps = {
  className: "w-full bg-transparent focus:outline-none",
  type: "text",
};
export { Input };
