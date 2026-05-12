import clsx from "clsx";

import type { NavLinkItem } from "@/types";

interface NavLinkProps extends NavLinkItem {
  isActive: boolean;
  isSidebarExtended: boolean;
}

const NavLink = (props: NavLinkProps) => {
  const { isActive, isSidebarExtended, name, icon } = props;
  return (
    <div
      className={clsx(
        "flex items-center",
        isSidebarExtended ? "justify-start gap-2" : "",
      )}
    >
      <span
        className={clsx(
          "overflow-hidden text-sm whitespace-nowrap transition-opacity duration-300 ease-in-out",
          isSidebarExtended
            ? "max-w-fit opacity-100 delay-200"
            : "max-w-0 opacity-0 delay-0",
          isActive ? "font-bold text-white" : "text-foreground font-normal",
        )}
      >
        {name}
      </span>
      <div
        className={clsx(
          "z-10 cursor-pointer transition-all duration-300 *:size-10",
          isActive ? "scale-[1.3] *:text-white" : "*:text-foreground",
        )}
      >
        {icon}
      </div>
    </div>
  );
};

export default NavLink;
