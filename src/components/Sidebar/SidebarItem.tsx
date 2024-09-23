import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropDownSVG } from "../common/svgs";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "bg-[#EEEEEE] !text-[#222222] dark:bg-meta-4" : ""} group relative flex flex-row-reverse items-center gap-2.5 rounded-lg px-4 py-2 text-sm font-normal text-[#7F7F7F] duration-300 ease-in-out hover:bg-[#EEEEEE] hover:text-[#222222] dark:hover:bg-meta-4`}
        >
          {item.icon}
          {item.label}
          {item.children && <DropDownSVG />}
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
