import Link from "next/link";
import { FC } from "react";

interface ILink {
  href: string;
  className: string;
  children: React.ReactNode;
}

const NextLink: FC<ILink> = ({ children, className, ...rest }) => {
  return (
    <Link {...rest}>
      <a {...rest} className={className}>
        {children}
      </a>
    </Link>
  );
};
export { NextLink };
