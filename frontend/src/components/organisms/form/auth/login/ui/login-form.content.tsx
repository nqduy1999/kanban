import { FormField, FormRemember } from "@/components/molecules";
import React from "react";

export const LoginFormContent = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <FormField
        label="Username"
        name="username"
        id="username"
        placeholder="Input username"
        type="text"
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      />
      <FormField
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        label="Password"
        name="password"
        id="password"
        placeholder="Input password"
        type="password"
      />
      <FormRemember />
    </div>
  );
};
