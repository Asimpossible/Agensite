import React from "react";
import { CgAbstract } from "react-icons/cg";

const Logo = () => {
  return (
    <a href="/home">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
          <CgAbstract className="text-4xl text-black" />
        </div>
        <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
          Agensite
        </h1>
      </div>
    </a>
  );
};

export default Logo;
