import React, { useState, useEffect } from "react";
import community from "../../../assets/pics/community.png";
import community2 from "../../../assets/pics/community2.png";
// import butterfly from "../../../assets/pics/butterfly.png";

// หน้าปก
const CoverHero = () => {
  return (
    <div className="mx-auto h-[400px] w-full md:w-3/5 mb-16 overflow-hidden rounded-xl shadow-lg font-body">
      <div className="relative flex w-full items-end px-4 py-8 bg-[#503795]"></div>
      <div className="flex h-full w-full flex-col items-center space-y-6 bg-primary-80 ">
        <div className="mt-16 px-5 py-2 text-sm text-[#999999] bg-[#FFFE6B] rounded-2xl shadow-sm">
          X-BRAIN
        </div>
        <div className="text-4xl lg:text-5xl font-bold text-white-100">
          คอมมูนิตี้
        </div>
      </div>
      <div className="relative flex h-full w-full px-4 py-4 overflow-hidden lg:overflow-visible">
        <img
          src={community}
          alt="community-hero"
          className="absolute bottom-[390px] left-[-20px] lg:h-[412px] lg:w-[412px]  "
        />
        <img
          src={community2}
          alt="community-hero"
          className="absolute bottom-[480px] right-5 h-[412px] w-[412px] overflow-content"
        />
        {/* <img
          src={butterfly}
          alt="community"
          className="absolute bottom-[625px] right-[185px] h-[52px] w-[52px]"
        /> */}
      </div>
    </div>
  );
};

export default CoverHero;
