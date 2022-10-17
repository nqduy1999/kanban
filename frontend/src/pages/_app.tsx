import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import React from "react";
import { Toaster } from "react-hot-toast";
import ConfigComponent from "./_config";
import { Provider } from "react-redux";
import { store } from "@/redux/appStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ThemeProvider enableSystem={true} attribute="class">
          <ConfigComponent />
          <Component {...pageProps} />
          <ReactQueryDevtools position="top-left" initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
