"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./links";
import styles from "./styles.module.css";
import Logo from "../icons/Logo";
import Hamburger from "./Hamburger";
import Account from "./Account";

import Headroom from "react-headroom";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const Index = () => {
  const path = usePathname();

  return (
    <Headroom>
      <header className="bg-[var(--color-bg)] z-[9] w-full flex-row  items-center no-underline flex h-[13vh] px-8 py-0 left-0 justify-between md:gap-12 xl:gap-30">
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

        <nav className="hidden lg:flex flex-row justify-between items-center no-underline w-full ">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex justify-center items-center gap-[var(--spacing-xs)] stroke-[color:var(--color-contrast-medium)] text-[color:var(--color-contrast-medium)]",
                  {
                    ["text-[color:var(--color-contrast-higher)] stroke-[color:var(--color-contrast-higher)] fill-[var(--color-contrast-higher)]"]:
                      path === link.href,
                  }
                )}
              >
                <LinkIcon className={link.name !== "" ? "stroke-1" : ""} />
                <span className={styles.navMenu__text}>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-row gap-4 align-middle items-center">
          <Hamburger className="flex justify-center align-middle lg:hidden"></Hamburger>

          <Magnetic range={200}>
            <Account className="flex justify-center align-middle rounded-full p-2 -mr-2 hover:bg-accent transition duration-300 ease-in-out"></Account>
          </Magnetic>
        </div>
      </header>
    </Headroom>
  );
};

export default Index;
