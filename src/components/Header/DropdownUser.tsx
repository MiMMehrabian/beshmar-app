import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import {
  DropDownUserSVG,
  ExitSVG,
  NotificationSVG,
  ProfileSVG,
} from "../common/svgs";
import { useRouter } from "next/navigation";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div className="flex gap-x-3">
        <Link
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex flex-row-reverse items-center gap-4"
          href="#"
        >
          <span className="hidden text-right lg:block">
            <span className="block text-sm font-medium text-black dark:text-white">
              علی احمدی
            </span>
          </span>

          <DropDownUserSVG />
        </Link>
        <NotificationSVG />
      </div>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute left-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                href="/profile"
                className="flex items-center justify-end gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                پروفایل
                <ProfileSVG />
              </Link>
            </li>
          </ul>
          <button
            onClick={(e) => {
              localStorage.removeItem("auth");
              router.push("/");
            }}
            className="flex items-center justify-end gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            خروج
            <ExitSVG />
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
