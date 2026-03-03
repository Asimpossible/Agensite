import { NAV_LINKS } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface IProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: IProps) => {
  const sideBarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Overlay  */}
      <div
        className={`fixed ${sideBarOpenClose} inset-0 z-1000 transform transition-all duration-500 w-full h-screen bg-black opacity-70`}
      ></div>
      {/* Navlinks */}
      <div
        className={`w-[75%] ${sideBarOpenClose} h-full fixed inset-0 z-1000 text-white flex flex-col justify-center items-start 
      transform transition-all duration-500 delay-120 bg-blue-900 sm:w-[60%] space-y-6 pl-12`}
      >
        {NAV_LINKS.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="w-fit border-b-2 border-b-white text-[20px] font-semibold pb-1.5 cursor-pointer select-none">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-8 left-60 sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </>
  );
};

export default MobileNav;
