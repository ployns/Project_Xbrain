import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import About from "./components/About";

const HomeStudent = () => {
  return (
    <div className="w-full justify-center">
      <Hero />
      <Card />
      <About />
    </div>
  );
};

export default HomeStudent;
