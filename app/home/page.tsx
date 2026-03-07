"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
    </div>
  );
};

export default Home;
