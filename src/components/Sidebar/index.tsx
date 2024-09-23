import React from "react";
import Link from "next/link";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  ClientsSVG,
  DashboardSVG,
  FactorsSVG,
  ProductsSvg,
  ReferalSVG,
  ReportsSVG,
  SettingSVG,
  TransactionsSVG,
} from "../common/svgs";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: <DashboardSVG />,
        label: "داشبورد",
        route: "#",
      },
      {
        icon: <ClientsSVG />,
        label: "طرف حساب ها",
        route: "#",
      },
      {
        icon: <ProductsSvg />,
        label: "محصولات",
        route: "#",
        children: [{ label: "تست", route: "#" }],
      },
      {
        icon: <FactorsSVG />,
        label: "فاکتور ها",
        route: "/dashboard",
      },
      {
        icon: <TransactionsSVG />,
        label: "تراکنش ها",
        route: "#",
      },
      {
        icon: <ReportsSVG />,
        label: "گزارشات",
        route: "#",
      },
      {
        icon: <ReferalSVG />,
        label: "دعوت از دوستان",
        route: "#",
      },
      {
        icon: <SettingSVG />,
        label: "تنظیمات",
        route: "#",
        children: [
          { label: "Form Elements", route: "#forms/form-elements" },
          { label: "Form Layout", route: "#forms/form-layout" },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed right-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-[#FFFFFF] shadow-2 duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#578FFF] lg:p-8">
          <Link href="/">بشمار</Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 8.175h16.0125L10.6375 1.6875c-.3375-.3375-.3375-.8625-.675-1.2-.3375-.3375-.8625-.3375-1.2 0l-7.7625 7.875c-.3375.3375-.3375.8625 0 1.2l7.7625 7.875c.3375.3375.8625.3375 1.2 0 .3375-.3375.3375-.8625 0-1.2L4.975 9.8625H19c.45 0 .825-.375.825-.825s-.375-.825-1.2-.825z" />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="px-4 py-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
