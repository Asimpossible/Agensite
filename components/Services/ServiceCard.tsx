"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

interface IProps {
  icon: string;
  title: string;
}

const ServiceCard = ({ icon, title }: IProps) => {
  return (
    <>
      <Tilt className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="w-20 h-20 text-white bg-blue-100 rounded-full mx-auto mt-5 shadow-md flex flex-col items-center justify-center">
          <Image src={icon} alt="img" width={50} height={50} />
        </div>
        <h1 className="title text-center mt-4 font-semibold text-lg text-gray-800 dark:text-gray-100">
          {title}
        </h1>
        <p className="description text-center text-sm mt-2 leading-6 text-gray-400 dark:text-gray-300 p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          recusandae quia et id illum provident nostrum ex assumenda vitae
          optio!
        </p>
        <div className="buttons text-center mx-auto justify-center flex items-center space-x-1 mb-4 text-gray-800 dark:text-gray-100 mt-4 font-semibold cursor-pointer hover:text-red-400 transition-all duration-200">
          <span>Learn More</span>
          <FaArrowRight />
        </div>
      </Tilt>
    </>
  );
};

export default ServiceCard;
