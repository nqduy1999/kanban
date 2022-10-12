import { Header } from "@/components/organisms";
import { ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const BaseLayout = (props: ILayoutProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 h-screen	">
      <Header />
      {props.children}
    </div>
  );
};

export { BaseLayout };
