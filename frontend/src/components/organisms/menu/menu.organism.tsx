import { LanguageToogle, ThemeToggler } from "@/components/molecules";
import { Menu, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

export default function MenuDropdownMobile() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <div className="md:hidden top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          onClick={() => setShowSideBar(!showSideBar)}
          className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium "
        >
          <CogIcon
            className="ml-2 -mr-1 h-5 w-5 dark:text-white icn-spinner"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-900 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {() => (
                  <button className="w-full">
                    <LanguageToogle
                      className="w-full h-12 rounded-lg flex items-center justify-center 
                  hover:bg-gray-700 text-white transition-all duration-300 focus:outline-none"
                    />
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {() => (
                  <button className="w-full">
                    <ThemeToggler className="w-full bg-transparent h-12 rounded-lg flex items-center justify-center hover:bg-gray-700 text-white dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none" />
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
