"use client";
import { NAV_LINKS } from "@/constants/constant";
import Logo from "@/utils/Logo";
import ThemeToggler from "@/utils/ThemeToggler";
import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface IProps {
  openNav: () => void;
}

const Nav = ({ openNav }: IProps) => {
  const [navBg, setNavBg] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all  duration-200 ${navBg ? "dark:bg-gray-900 bg-blue-950 shadow-md duration-300" : "fixed"} fixed h-[12vh] z-100 w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white hover:text-indigo-400 transition-all hover:text-[17px] duration-200 font-semibold select-none"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-3">
          <a
            href="#"
            className="relative z-20 inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold 
          text-white transition-all duration-300 bg-indigo-700 rounded-md cursor-pointer ring-offset-2 
          ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center text-sm">
              Create Account
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Burger Menu */}
          <HiOutlineMenuAlt3
            onClick={openNav}
            className="text-2xl text-white cursor-pointer lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
