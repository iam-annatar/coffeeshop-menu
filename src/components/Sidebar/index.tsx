"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { NavLinkItem } from "@/types";

import ActiveCircleShape from "./ActiveCircleShape";
import { navLinks } from "./constants";
import NavLink from "./NavLink";

const Sidebar = () => {
  const [isSidebarExtended, setIsSidebarExtended] = useState<boolean>(false);
  const [selected, setSelected] = useState<NavLinkItem>(navLinks[0]);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Recalculate indicator position whenever selected changes
  useEffect(() => {
    const activeIndex = navLinks.findIndex((n) => n.slug === selected.slug);
    const el = itemRefs.current[activeIndex];
    if (el) {
      // Center the indicator on the li item
      setIndicatorTop(el.offsetTop + el.offsetHeight / 2);
    }
  }, [selected]);

  return (
    <aside
      className={clsx(
        "bg-primary absolute top-0 right-0 min-h-screen w-full shrink-0 shadow-xl shadow-black/50 transition-[max-width] duration-300 ease-in-out",
        isSidebarExtended ? "max-w-[160px]" : "max-w-[80px]",
      )}
    >
      <div className="flex flex-col gap-16 pt-5 pb-20">
        <div className="z-20 self-end pr-3">
          <Image
            height={60}
            width={60}
            alt="menuicon"
            className="animate-scale-in cursor-pointer"
            src="./logo.svg"
            loading="eager"
            onClick={() => setIsSidebarExtended(!isSidebarExtended)}
          />
        </div>

        <nav>
          <ul
            aria-label="sidebar-icons"
            className={clsx("relative flex flex-col items-end gap-16 pr-5")}
          >
            <ActiveCircleShape
              isSidebarExtended={isSidebarExtended}
              indicatorTop={indicatorTop}
            />

            {navLinks.map((nav, index) => {
              const isActive = selected?.slug === nav.slug;

              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={nav.slug}
                  ref={(el) => (itemRefs.current[index] = el as any)}
                  onClick={() => setSelected(nav)}
                >
                  <NavLink
                    isActive={isActive}
                    isSidebarExtended={isSidebarExtended}
                    {...nav}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
