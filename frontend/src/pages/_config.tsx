import { setTheme } from "@/utils/auth";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const ConfigComponent = () => {
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "system") {
      setTheme("light");
    }
  }, []);

  return <></>;
};

export default ConfigComponent;
