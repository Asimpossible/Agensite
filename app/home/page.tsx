"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
