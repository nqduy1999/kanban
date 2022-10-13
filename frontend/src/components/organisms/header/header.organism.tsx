import { LanguageToogle, ThemeToggler } from "@/components/molecules";
import { HomeIcon } from "@heroicons/react/outline";
import MenuDropdownMobile from "../menu/menu.organism";

const Header = () => {
  return (
    <nav className="px-2 p-4 bg-gray-200 border-gray-200  dark:shadow-none dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <HomeIcon className="mr-4" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Kanban
          </span>
        </a>
        <MenuDropdownMobile />
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col bg-gray-200 rounded-lg border border-gray-100 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <LanguageToogle />
              </div>
            </li>
            <li>
              <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <ThemeToggler />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export { Header };
