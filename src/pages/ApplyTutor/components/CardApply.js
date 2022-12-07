import React, { useState, useEffect } from "react";
import community from "../../../assets/icons/community.png";

const CardApply = ({ id, student, college, subject, type, wage, place }) => {
  //ผลการสมัคร
  const [result, setResult] = useState({
    ClickYes: false,
    ClickNo: false,
    canClick: true,
  });

  const handleApprove = () => {
    alert("ยืนยันผลการสมัคร");
    //e.preventDefault();

    setResult({
      canClick: false,
      ClickYes: true,
    });

    console.log("yes");
  };

  const handleReject = () => {
    alert("ยืนยันผลการสมัคร");
    //e.preventDefault();
    setResult({
      canClick: false,
      ClickNo: true,
    });
    console.log("no");
  };

  return (
    <div className="flex items-center">
      {/* Cards */}
      <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-white-100">
        <div className="mt-3 flex w-full values-center space-x-4">
          <img
            src={community}
            className="aspect-square w-12 mx-2 rounded-full "
            alt="ImageTutor"
          />
          <div className="flex w-full min-w-0 flex-col -space-y-1">
            <div className="ellipsis font-bold text-lg">{student}</div>
            <div className="text-sm font-normal">{college}</div>
          </div>
        </div>

        <div className=" border-b-2 border-[#999999]"></div>

        <div className="flex flex-row text-base">
          <div className="flex flex-row flex-auto space-x-[84px]">
            <label className="font-semibold">วิชา</label>
            <div className="font-normal">{subject}</div>
          </div>

          <div className="flex flex-row flex-auto space-x-8">
            <label className="font-semibold">ประเภท</label>
            <div className="font-normal">{type}</div>
          </div>
        </div>

        <div className="flex flex-row values-end space-x-8">
          <label className="font-semibold">ค่าตอบเเทน</label>
          <div className="font-normal">{wage}</div>
        </div>

        <div className="flex flex-row values-end space-x-16">
          <label className="font-semibold">สถานที่</label>
          <div className="font-normal">{place}</div>
        </div>

        <div className="flex flex-row flex-auto space-x-3 mb-6">
          <label className="font-semibold">คำขอการสมัคร</label>
          <button
            className={` ${
              result.ClickYes
                ? "bg-[#E2E2E2] hover:bg-[#E2E2E2]"
                : "bg-primary-80 hover:bg-primary-100 "
            } mt-1 px-3 py-1 font-normal rounded-2xl text-white-100  `}
            onClick={handleApprove}
            disabled={result.canClick === false}
          >
            ยอมรับคำขอ
          </button>
          <button
            className={` ${
              result.ClickNo
                ? "bg-[#E2E2E2] hover:bg-[#E2E2E2]"
                : "bg-[#FF3358] hover:bg-[#CE2D4A]"
            } mt-1 px-3 py-1 font-normal rounded-2xl text-white-100  `}
            onClick={handleReject}
            disabled={result.canClick === false}
          >
            ปฏิเสธคำขอ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardApply;
