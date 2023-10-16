"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const navbarData = [
  { title: "Home", link: "/" },
  { title: "Product", link: "/product" },
  { title: "About", link: "/about" },
  {
    title: "Skill",
    link: "/skill",
  },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [navToggler, setNavToggler] = useState(false);
  const pathname = usePathname();

  const handleNavToggler = () => {
    setNavToggler(!navToggler);
  };
  const closeNavToggler = () => {
    setNavToggler(false);
  };

  return (
    <header style={{ height: "4rem" }} className={styles.header}>
      <div className={styles.navToggler} onClick={handleNavToggler}>
        {navToggler ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.togglerIcon}
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.togglerIcon}
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <Link href="/" className="text-purple text-2xl sm:w-full ">
        AKSH PATEL
      </Link>

      <nav
        className={`${
          navToggler ? styles.visibleNavbar : styles.hiddenNavBar
        } ${styles.navBar}`}
      >
        {navbarData &&
          navbarData.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.link}
                className={`font-semibold text-purple hover:opacity-100 duration-300 ${
                  styles.link
                } ${pathname === item.link ? styles.activeLink : ""}`}
                onClick={closeNavToggler}
              >
                {item.title}
              </Link>
            );
          })}
      </nav>
    </header>
  );
};

export default Header;
