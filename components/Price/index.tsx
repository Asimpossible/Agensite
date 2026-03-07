"use client";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
        <div className="title">
          <h1 className="text-red-500 dark:text-red-300 font-medium text-center text-xl">
            Pricing Table
          </h1>
          <h1 className="title_2 text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold mt-4 tracking-wider ">
            Live Chat 24/7 Hours
          </h1>
        </div>
        <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
          {/* Price Card */}
          <div>
            <PriceCard price="20" title="Optimized & SEO" />
          </div>
          <div>
            <PriceCard price="50" title="Designing" />
          </div>
          <div>
            <PriceCard price="60" title="Development" />
          </div>
          <div>
            <PriceCard price="80" title="Supporting" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
