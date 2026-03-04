import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="py-24 dark:bg-gray-950 cursor-default select-none">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Image Content */}
          <div>
            {/* Image */}
            <Image
              src={"/images/collective.jpg"}
              alt="img"
              width={600}
              height={600}
              className="rounded-md"
            />
          </div>
          {/* Text Content */}
          <div>
            <h1 className="text-cyan-800 dark:text-cyan-600 font-medium">
              About Us
            </h1>
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 dark:text-white">
              Leading the Digital Shift Through Innovation
            </h1>
            {/* Description */}
            <p className="text-gray-500 dark:text-gray-200 text-base leading-8 mt-8">
              Excellence is found in the details. We bridge the gap between bold
              creativity and technical precision. From immersive gradients to
              seamless user journeys, our team crafts bespoke digital
              experiences that captivate audiences and define the new gold
              standard in modern web design.
            </p>
            {/* Statistics */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-900">
                    53K
                  </h1>
                  <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                    Layout Done
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-900">
                    10K
                  </h1>
                  <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                    Projct Done
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-900">
                    120
                  </h1>
                  <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                    Get Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
