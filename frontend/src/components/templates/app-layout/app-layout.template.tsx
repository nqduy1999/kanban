import { Header } from "@/components/organisms";
import { onCheckAuthencated } from "@/utils/auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const BaseLayout = (props: ILayoutProps) => {
  const router = useRouter();

  const checkAuth = async () => {
    const isAuthencated = await onCheckAuthencated();
    if (isAuthencated) {
      router.push("/");
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
