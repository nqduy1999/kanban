import { Button } from "@/components/atoms";
import {
  SearchIcon,
  PlusSmIcon,
  ViewListIcon,
  BellIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const sideBarItems = [
  {
    id: "plane",
    renderIcon: (isActive: boolean) => <ViewListIcon fill={isActive} />,
  },
  {
    id: "search",
    renderIcon: (isActive: boolean) => <SearchIcon fill={isActive} />,
  },
  {
    id: "notification",
    renderIcon: (isActive: boolean) => <BellIcon fill={isActive} />,
  },
  {
    id: "profile",
    renderIcon: (isActive: boolean) => <PlusSmIcon fill={isActive} />,
  },
];

const NavbarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed dark:bg-gray-800 bg-gray-200 w-full h-12 bottom-0 rounded-t-2xl">
      {sideBarItems.map((item, index) => (
        <Button className="" key={index} onClick={() => setActiveIndex(index)}>
          {item.renderIcon(Number(activeIndex) === Number(index))}
        </Button>
      ))}
    </div>
  );
};
export { NavbarMobile };
