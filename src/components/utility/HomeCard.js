import React from "react";

export const HomeCard = ({ icon, title, description }) => {
  return (
    <div className="group px-8 py-12 shadow-lg rounded-2xl md:w-[370px] md:min-h-[400px] transition duration-200 bg-[#F7C9FF] hover:-translate-y-4">
      <img
        src={icon}
        alt="logo"
        className="w-32 h-32 mx-auto mb-10 md:mb-14 group-hover:invert"
      />

      <h1 className="pb-4 text-primary-80 font-semibold text-xl text-center md:text-2xl font-body">
        {title}
      </h1>
      <p className="text-center font-body text-base md:text-lg">
        {description}
      </p>
    </div>
  );
};
