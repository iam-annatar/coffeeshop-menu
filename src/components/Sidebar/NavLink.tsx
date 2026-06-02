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
        "flex cursor-pointer items-center",
        isSidebarExtended ? "justify-start gap-2" : "",
      )}
    >
      <span
        className={clsx(
          "overflow-hidden text-sm whitespace-nowrap transition-opacity duration-300 ease-in-out",
          isSidebarExtended
            ? "max-w-fit opacity-100 delay-200"
            : "max-w-0 opacity-0 delay-0",
          isActive ? "text-brand font-bold" : "text-foreground font-normal",
        )}
      >
        {name}
      </span>
      <div
        className={clsx(
          "z-10 transition-all duration-300 *:size-10",
          isActive ? "*:text-brand scale-[1.3]" : "*:text-foreground",
        )}
      >
        {icon}
      </div>
    </div>
  );
};

export default NavLink;
