"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import type { NavLinkItem } from "@/types";

import { navLinks } from "./constants";
import NavLink from "./NavLink";

const Sidebar = () => {
  const [isSidebarExtended, setIsSidebarExtended] = useState<boolean>(false);
  const [selected, setSelected] = useState<NavLinkItem>(navLinks[0]);

  return (
    <aside
      className={clsx(
        "bg-primary/60 fixed top-0 right-0 z-10 h-screen w-full shrink-0 shadow-xl shadow-black backdrop-blur transition-[max-width] duration-300 ease-in-out",
        isSidebarExtended ? "max-w-[170px]" : "max-w-[80px]",
      )}
    >
      <div className="flex h-screen flex-col gap-5 pt-5">
        <div
          className={clsx(
            "z-20",
            !isSidebarExtended ? "self-end pr-3" : "self-center",
          )}
        >
          {isSidebarExtended ? (
            <Image
              height={100}
              width={140}
              alt="menuicon-wide"
              className="cursor-pointer"
              src="./wide-logo.svg"
              loading="eager"
              onClick={() => setIsSidebarExtended(!isSidebarExtended)}
            />
          ) : (
            <Image
              height={60}
              width={60}
              alt="menuicon"
              className="animate-scale-in cursor-pointer"
              src="./logo.svg"
              loading="eager"
              onClick={() => setIsSidebarExtended(!isSidebarExtended)}
            />
          )}
        </div>

        <nav className="grow overflow-y-auto">
          <ul
            aria-label="sidebar-icons"
            className={clsx(
              "relative flex flex-col items-end gap-16 pt-5 pr-5 pb-10",
            )}
          >
            {navLinks.map((nav) => {
              const isActive = selected?.slug === nav.slug;

              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={nav.slug}
                  onClick={() => {
                    setSelected(nav);
                    setTimeout(() => setIsSidebarExtended(false), 300);
                  }}
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
