import React from "react";
import aboutstudent from "../../../assets/pics/aboutstudent.png";

const About = () => {
  return (
    <div className="w-full mt-8 md:mt-32 md:items-center">
      {/* Header  */}

      <div className="container mx-auto mt-20 px-16 flex flex-col md:flex-row md:gap-8 xl:gap-16 ">
        <div className="rounded-xl mx-auto sm:self-center 2xl:justify-center ">
          {/* Image  */}
          <img
            src={aboutstudent}
            alt="about"
            className="w-[500px] sm:h-[450px] h-[260px]"
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
              ผู้ที่สนใจที่จะศึกษาเนื้อหาวิชาต่างๆ
              อย่างจริงจังหรือผู้ปกครองที่ต้องการหาผู้สอนพิเศษสำหรับบุตร-หลานที่มีความน่าเชื่อถือ
              ความปลอดภัยเเละสถานที่ในการสอนที่สามารถตรวจสอบได้
              เพื่อที่จะทำให้มั่นใจในคุณภาพของการสอนก่อนสมัครเรียนกับอาจารย์สอนพิเศษนั้นๆ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
