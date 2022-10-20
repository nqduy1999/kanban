import { notify } from "@/components/atoms";
import { Header, Meta, NavbarMobile } from "@/components/organisms";
import { useAppDispatch } from "@/hooks/useRedux";
import { getUserAction } from "@/redux/auth/auth.action";
import { onCheckAuthencated } from "@/utils/auth";
import React, { ReactNode, useEffect } from "react";
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

  const checkAuth = async () => {
    const isAuthencated = await onCheckAuthencated();
    if (!isAuthencated) {
      notify("error", "top-right", "Unauthorize");
      window.location.replace("/login");
    }
  };

  useEffect(() => {
    checkAuth();
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
