import { FormField } from "@/components/molecules";
import React from "react";
import { AutoCompletedUsername } from "./auto-completed-username-input";

export const RegisterFormContent = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <AutoCompletedUsername />
      <FormField
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        label="Password"
        name="password"
        id="password"
        placeholder="Input password"
        type="password"
      />
      <FormField
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        label="Confirm Password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Input confirm password"
        type="password"
      />
    </div>
  );
};
