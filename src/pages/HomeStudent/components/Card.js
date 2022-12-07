import React from "react";
import { HomeCard } from "../../../components/utility/HomeCard";
import knowledge from "../../../assets/icons/knowledge.png";
import consult from "../../../assets/icons/consult.png";
import community from "../../../assets/icons/community.png";

const Card = () => {
  return (
    <div className="mt-8 md:mt-16 md:mb-16 font-body">
      <div className="text-center md:text-center xl:text-center">
        <h1 className="font-bold text-primary-80 text-2xl leading-8 md:text-4xl">
          Why learn with <br /> X-brain ?
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="container mx-auto mt-20 px-16 flex flex-col gap-14 md:flex-row md:justify-center md:gap-16 font-body">
          {/* Home Cards */}
          <HomeCard
            icon={knowledge}
            title="Knowledge"
            description="ประสบความสำเร็จทางด้านการเรียนกับติวเตอร์ที่ใช่ พร้อมรับคำเเนะนำจากผู้มีประสบการณ์"
          />
          <HomeCard
            icon={consult}
            title="Easy to find"
            description="หาติวเตอร์ง่าย เเถมยังไม่มีค่าใช้จ่ายในการเเนะนำค่าติวเตอร์"
          />
          <HomeCard
            icon={community}
            title="Community"
            description="คลังความรู้ที่ทุกคนจะมาเเบ่งปันเเละถามตอบปัญหา
          เรื่องเรียน รวมไปถึงการซื้อขายหรือเเลกเปลี่ยน
          หนังสือเรียน"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
