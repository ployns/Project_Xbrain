import React from "react";
import herotutor from "../../../assets/pics/herotutor.png";
import lightbulb from "../../../assets/icons/lightbulb.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // home bg
    <div className="bg-[#F9F871]">
      <div className=" container mx-auto py-24 flex flex-col-reverse relative md:flex-row md:justify-center md:gap-8 md:items-center xl:gap-24">
        {/* left side */}
        <div className="text-center font-body mb-16 md:pl-10 md:mt-20 md:text-left">
          <h1 className="text-4xl font-bold text-black md:text-4xl lg:text-[40px] xl:mt-10">
            สมัครเป็นติวเตอร์
          </h1>
          <h1 className="text-5xl font-bold text-primary-80 md:text-7xl lg:text-[128px] xl:mt-2">
            X-Brain
          </h1>

          <div className="flex flex-row justify-center space-x-2 mt-3 mb-4 md:mb-2 xl:mt-8 ">
            <img
              src={lightbulb}
              alt="herotutor"
              className=" w-[32px] h-[32px]"
            />
            <p className=" text-gray-100 font-normal md:text-3xl ">
              เข้าถึงนักเรียนได้หลายคน สามารถลงสอน <br />
              ได้ตามใจชอบ เลือกวัน-เวลาที่สะดวกในการสอน
            </p>
          </div>

          {/* button click */}
          <Link to={"/postteach"}>
            <button className="mt-6 px-6 py-3.5 font-bold text-3xl rounded-2xl bg-primary-80 text-white-100 hover:bg-primary-100">
              ลงสอนพิเศษ
            </button>
          </Link>
        </div>

        {/* right side */}
        <div className="flex justify-center mb-10 md:self-end">
          <div className="relative">
            <div className="bg-primary-50 absolute -top-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-2xl md:top-0 md:w-[400px] md:h-[400px]  "></div>
            <img
              src={herotutor}
              alt="herotutor"
              className="relative left-4 w-[250px] md:w-[600px] xl:w-[600px] xl:left-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
