import React from "react";
import { HomeCard } from "../../../components/utility/HomeCard";
import build from "../../../assets/icons/build.png";
import teach from "../../../assets/icons/teach.png";
import service from "../../../assets/icons/community.png";

const Card = () => {
  return (
    <div className="mt-8 md:mt-32 md:mb-32">
      <div className="text-center md:text-center xl:text-center">
        <h1 className="font-bold text-primary-80 text-2xl leading-8 md:text-4xl">
          Why join with <br /> X-brain ?
        </h1>
      </div>

      <div className="container mx-auto mt-20 px-16 flex flex-col gap-14 md:flex-row md:justify-center md:gap-16 font-body">
        {/* Home Cards */}
        <HomeCard
          icon={build}
          title="
          Build your network"
          description="สร้างเครือข่ายของคุณ เข้าร่วมกับออนไลน์คอมมูนิติ้
          เเลกเปลี่ยนความคิดเห็นกันเเละกัน"
        />
        <HomeCard
          icon={teach}
          title="Change a kid’s life 
          for the better"
          description="เปลี่ยนชีวิตเด็กให้ดีขึ้น สร้างประการณ์ ความรู้เเละความท้าทายให้เเก่เด็กๆ"
        />
        <HomeCard
          icon={service}
          title="It’s more than service"
          description="เลือกสอนได้ทั้งออนไลน์เเละออนไซต์ เเถมยังช่วยพัฒนาทักษาด้านความเป็นผู้นำเเละสร้างอาชีพในการช่วยเหลือผู้อื่น"
        />
      </div>
    </div>
  );
};

export default Card;
