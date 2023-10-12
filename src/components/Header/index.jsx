"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
// import Image from "next/image";

const navbarData = [
  { title: "Home", link: "/" },
  { title: "Resume", link: "/resume" },
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
            viewBox="0 0 24 24"
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
            viewBox="0 0 24 24"
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
      <Link href="/" className="text-[#800080] text-2xl sm:w-full ">
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
                className={`font-semibold text-[#800080] hover:opacity-100 duration-300 ${
                  styles.link
                } ${pathname === item.link ? styles.activeLink : ""}`}
                onClick={closeNavToggler}
              >
                {item.title}
              </Link>
            );
          })}
        {/* <div className="flex space-x-4"> */}
        {/* <Link href="https://github.com/akshpatell">
          <Image src="/images/github.png" width={30} height={30} alt="alt" />
        </Link>{" "}
        <Link href="https://www.linkedin.com/in/akshpatel2003">
          {" "}
          <Image
            src="/images/linkedin.png"
            width={30}
            height={30}
            alt="alt"
          />{" "}
        </Link>{" "}
        <Link href="https://twitter.com/akshpatel08">
          {" "}
          <Image src="/images/Twitterx.png" width={30} height={30} alt="alt" />
        </Link>
        <Link href="https://www.instagram.com/syztechnologies/">
          {" "}
          <Image src="/images/Instagram.png" width={30} height={30} alt="alt" />
        </Link> */}
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// const NavbarData = [
//   { title: "Home", link: "/" },
//   { title: "About", link: "/about" },
//   { title: "Blog", link: "/blog" },
//   { title: "Skill", link: "/skill" },
// ];

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };
//   return (
//     <header className="bg-emerald-400 p-4 sticky">
//       <div className="container mx-auto">
//         <nav className="flex items-center justify-between">
//           <div>
//             <Link href="/">
//               <div className="text-white text-xl font-bold">AKSH PATEL</div>
//               {/* <div className="text-white text-xl font-bold sm:hidden">AP</div> */}
//             </Link>
//           </div>
//           <button className="lg:hidden p-2" onClick={toggleMenu}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-7 w-7 ${menuOpen ? "block" : ""}`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//           <div className={`flex flex-col ${menuOpen ? "hidden" : ""}`}>
//             <div>
//               {NavbarData.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.link}
//                   className="sm:p-2 max-sm:p-1 subtitle1 cursor-pointer text-white h-full"
//                   onClick={closeMenu}
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex space-x-4">
//               <Link href="https://github.com/akshpatell">
//                 <Image
//                   src="/images/github.png"
//                   width={30}
//                   height={30}
//                   alt="alt"
//                 />
//               </Link>
//               <Link href="https://www.linkedin.com/in/akshpatel2003">
//                 <Image
//                   src="/images/linkedin.png"
//                   width={30}
//                   height={30}
//                   alt="alt"
//                 />
//               </Link>
//               <Link href="https://twitter.com/akshpatel08">
//                 <Image
//                   src="/images/twitter.png"
//                   width={30}
//                   height={30}
//                   alt="alt"
//                 />
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
