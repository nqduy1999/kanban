import { onCheckAuthencated, setTheme } from "@/utils/auth";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ConfigComponent = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const checkAuth = async () => {
    const isAuthencated = await onCheckAuthencated();
    if (isAuthencated) {
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (theme === "system") {
      setTheme("light");
    }
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) checkAuth();

  return <></>;
};

export default ConfigComponent;
