import { Header } from "@/components/organisms";
import { onCheckAuthencated } from "@/utils/auth";
import { ReactNode, useEffect } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const BaseLayout = (props: ILayoutProps) => {
  const checkAuth = async () => {
    const isAuthencated = await onCheckAuthencated();
    if (isAuthencated) {
      window.location.replace("/");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 h-screen	">
      <Header />
      {props.children}
    </div>
  );
};

export { BaseLayout };
