"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/Logo";
import Account from "./Account";
import Hamburger from "./Hamburger";
import links from "./links";

import Headroom from "react-headroom";

const Index = () => {
  const path = usePathname();

  return (
    <Headroom>
      <header className="bg-[var(--color-bg)] z-[9] w-full flex-row  items-center no-underline flex h-15 px-4 md:px-8 py-0 left-0 justify-between ">
        <Link
          href="/"
          className={clsx(
            "flex justify-center items-center gap-[var(--spacing-xs)] stroke-[color:var(--color-contrast-medium)] text-[color:var(--color-contrast-medium)]",
            {
              ["text-[color:var(--color-contrast-higher)] stroke-[color:var(--color-contrast-higher)] fill-[var(--color-contrast-higher)]"]:
                path === "/",
            }
          )}
        >
          <Logo></Logo>
        </Link>

        <nav className="hidden gap-8 lg:flex flex-row justify-end items-center no-underline w-full ">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex gap-5 justify-center items-center stroke-contrast-medium text-contrast-medium",
                  {
                    ["text-[color:var(--color-contrast-higher)] stroke-[color:var(--color-contrast-higher)] fill-[var(--color-contrast-higher)]"]:
                      path === link.href,
                  }
                )}
              >
                {/* <LinkIcon className={link.name !== "" ? "stroke-1" : ""} /> */}
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-row gap-4 align-middle items-center">
          <Hamburger className="flex justify-center align-middle lg:hidden"></Hamburger>

          <Account className="hidden flex justify-center align-middle rounded-full p-2 -mr-2 hover:bg-accent transition duration-300 ease-in-out"></Account>
        </div>
      </header>
    </Headroom>
  );
};

export default Index;
