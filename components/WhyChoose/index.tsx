import Image from "next/image";
import React from "react";
import { FaRocket } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <>
      <div className="section py-20">
        <div className="contentsDiv w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Center */}
          <div>
            <h1 className="text-red-500 dark:text-red-300 font-medium">
              Why Choose Us
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
              Where Visionary Design Meets Technical Precision
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
              We bridge the gap between visionary design and technical
              precision, crafting high-performance digital ecosystems that don’t
              just represent your brand, but actively accelerate its growth in
              an ever-evolving market.
            </p>
            <div className="mt-8">
              {/* 1st List Item */}
              <div className="flex items-center space-x-6 mb-10">
                <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-cyan-600 dark:bg-indigo-500">
                  <FaRocket className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Fast Working Process
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 leading-6 lg:w-[85%]">
                    We streamline complexity through an agile and high-velocity
                    workflow, transforming your boldest ideas into
                    production-ready digital solutions without compromising on
                    quality or precision
                  </p>
                </div>
              </div>
              {/* 2st List Item */}
              <div className="flex items-center space-x-6 mb-10">
                <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-orange-900 dark:bg-red-500">
                  <FaRocket className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Dedicated Team
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 leading-6 lg:w-[85%]">
                    We streamline complexity through an agile and high-velocity
                    workflow, transforming your boldest ideas into
                    production-ready digital solutions without compromising on
                    quality or precision
                  </p>
                </div>
              </div>
              {/* 3th List Item */}
              <div className="flex items-center space-x-6 mb-10">
                <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-yellow-600 dark:bg-green-500">
                  <FaRocket className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">
                    24/7 Hours Support
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 leading-6 lg:w-[85%]">
                    We streamline complexity through an agile and high-velocity
                    workflow, transforming your boldest ideas into
                    production-ready digital solutions without compromising on
                    quality or precision
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image Content */}
          <div>
            <Image
              src={"/images/chooseUs.jpg"}
              alt="img"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
