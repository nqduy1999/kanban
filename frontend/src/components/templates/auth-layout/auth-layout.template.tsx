import { Header, Meta } from "@/components/organisms";
import { onCheckAuthencated } from "@/utils/auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

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
  const router = useRouter();

  const checkAuth = async () => {
    const isAuthencated = await onCheckAuthencated();
    if (!isAuthencated) {
      router.push("/login");
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
    </div>
  );
};

export { AuthLayout };
