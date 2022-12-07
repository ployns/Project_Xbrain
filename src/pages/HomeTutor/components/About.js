import React from "react";
import abouttutor from "../../../assets/pics/abouttutor.png";

const About = () => {
  return (
    <div className="w-full mt-8 md:mt-32 md:items-center">
      {/* Header */}

      <div className="container mx-auto mt-20 px-16 flex flex-col md:flex-row md:gap-8 xl:gap-16 ">
        <div className="rounded-xl mx-auto sm:self-center 2xl:justify-center ">
          {/* Image  */}
          <img
            src={abouttutor}
            alt="about"
            className="object-cover w-[500px] sm:h-[450px] h-[260px]"
          />
        </div>

        <div className="mt-8 md:w-2/4 lg:w-1/2">
          {/* title */}
          <div className="px-4 sm:text-left md:pb-4 ">
            <h1 className="font-bold text-primary-80 text-2xl leading-8 md:text-4xl">
              Suitable for ?
            </h1>
          </div>

          {/* Text */}
          <div className="flex-row md:items-center">
            <p className="text-base pt-4 px-4 indent-14 md:text-xl lg:text-2xl">
              ติวเตอร์หรือครูสอนพิเศษที่ต้องการให้ความรู้เพิ่มเติมเเก่นักเรียน
              นอกเหนือจากการเรียนในโรงเรียน
              ซึ่งสามารถเลือกสอนพิเศษได้ทั้งออนไลน์เเละออนไซต์
              เลือกวัน-เวลาที่สะดวกได้เลย
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
