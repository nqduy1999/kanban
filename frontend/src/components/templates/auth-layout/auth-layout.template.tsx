import { Header, Meta, NavbarMobile } from "@/components/organisms";
import { useAppDispatch } from "@/hooks/useRedux";
import { getUserAction } from "@/redux/auth/auth.action";
import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";

type ILayoutProps = {
  meta:
    | {
        title: string;
        description: string;
      }
    | any;
  children: ReactNode;
};

const AuthLayout = (props: ILayoutProps) => {
  const [mounted, setMounted] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUserAction());
    setMounted(true);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 h-screen	">
      <Meta title={props.meta.title} description={props.meta.description} />
      <Header />
      {props.children}
      {mounted && isMobile && <NavbarMobile />}
    </div>
  );
};

export { AuthLayout };
