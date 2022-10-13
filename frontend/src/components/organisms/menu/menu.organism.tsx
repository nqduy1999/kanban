import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function MenuDropdownMobile() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <div className="md:hidden top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          onClick={() => setShowSideBar(!showSideBar)}
          className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium "
        >
          <MenuIcon
            className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <div
          className={`top-0 right-0 w-full bg-blue-600 top-[4.25rem] p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSideBar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <h3 className="mt-20 text-4xl font-semibold text-white">
            I am a sidebar
          </h3>
        </div>
      </Menu>
    </div>
  );
}
