import { Input } from "@/components/atoms";

import React, { FC } from "react";

export const FormRemember: FC<any> = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <Input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="w-4 h-4  accent-gray-200 dark:accent-gray-800 rounded bg-transparent focus:ring-3 focus:ring-primary-300"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="remember"
            className="text-gray-500 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
      </div>
      {/* <a
        href="#"
        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Forgot password?
      </a> */}
    </div>
  );
};
