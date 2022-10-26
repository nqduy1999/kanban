import {
  AddIcon,
  Button,
  MenuIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
} from "@/components/atoms";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

const sideBarItems = [
  {
    path: "home",
    renderIcon: (isActive: boolean) => (
      <MenuIcon className="h-6 w-6" isActive={isActive} />
    ),
  },
  {
    path: "search",
    renderIcon: (isActive: boolean) => (
      <SearchIcon className={`h-6 w-6 dark: ${isActive ? "text-[#3865E0]" : ""}`} />
    ),
  },
  {
    path: "create-note",
    renderIcon: (isActive: boolean) => (
      <AddIcon className="h-9 w-full" isActive={isActive} />
    ),
  },
  {
    path: "notification",
    renderIcon: (isActive: boolean) => (
      <NotificationIcon className="h-6 w-6" isActive={isActive} />
    ),
  },
  {
    path: "profile",
    renderIcon: (isActive: boolean) => (
      <ProfileIcon className="h-6 w-6" isActive={isActive} />
    ),
  },
];

const NavbarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const onDetectRoute = () => {
    setActiveIndex(sideBarItems.findIndex((e) => e.path === "home"));
  };

  useEffect(() => {
    onDetectRoute();
  }, [router]);

  return (
    <div className="fixed dark:bg-gray-800 bg-white w-full h-12 bottom-0 rounded-t-2xl border-t-2 dark:border-t-0	">
      <div className="flex w-full justify-between	items-center p-3 px-8">
        {sideBarItems.map((item, index) => (
          <Button
            className={
              index !== 2
                ? "w-6 h-6"
                : "w-16 h-16 dark:bg-gray-800 bg-white -mt-10 rounded-t-full	flex items-center content-center border-t-2	dark:border-t-0	"
            }
            key={item.path}
            onClick={() => setActiveIndex(index)}
          >
            {item.renderIcon(Number(activeIndex) === Number(index))}
          </Button>
        ))}
      </div>
    </div>
  );
};
export { NavbarMobile };
