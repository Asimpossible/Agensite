import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="sectionDiv py-20 bg-[#eff3f6] dark:bg-gray-900">
        <div className="title">
          <h1 className="text-red-500 dark:text-red-300 font-medium text-center text-xl">
            Our Services
          </h1>
          <h1 className="title_2 text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold mt-4 tracking-wider ">
            Provided Features
          </h1>
        </div>
        {/* Services Cards */}
        <div className="cardSection w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card">
            <ServiceCard title="Design And Develop" icon="/images/c1.png" />
          </div>
          <div className="card">
            <ServiceCard title="Account Settings" icon="/images/c2.png" />
          </div>
          <div className="card">
            <ServiceCard title="Notification Manage" icon="/images/c3.png" />
          </div>
          <div className="card">
            <ServiceCard title="Customer Support" icon="/images/c4.png" />
          </div>
          <div className="card">
            <ServiceCard title="Email Marketing" icon="/images/c5.png" />
          </div>
          <div className="card">
            <ServiceCard title="Digital Agency" icon="/images/c6.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
