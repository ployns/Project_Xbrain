import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardTutor2 = ({
  id,
  image,
  nameTutor,
  gradFrom,
  subject,
  classTeach,
  category,
  introduce,
}) => {
  return (
    <div
      key={id}
      className="group container mx-auto px-6 py-6 gap-5 mt-6 rounded-xl drop-shadow-lg font-body md:w-3/5 bg-white-100 hover:bg-[#F7C9FF]"
    >
      <div className="flex flex-col md:flex-row space-x-10">
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="profile"
            className="object-cover ml-2 w-48 h-48 rounded-xl md:h-full md:w-64 bg-slate-200"
          />
        </div>

        <div className="flex flex-col my-6 space-y-4">
          <h1 className="text-primary-80 underline text-2xl md:text-3xl leading-6 font-semibold text-skin-inverted group-hover:text-skin-primary">
            {nameTutor}
          </h1>

          <p className="mb-3 font-normal text-primary-100 leading-normal">
            " {introduce} "
          </p>
          <p className="font-normal text-base leading-5">
            กำลังศึกษาอยู่ที่/จบจาก : {gradFrom}
          </p>
          <p className="font-normal text-base leading-5">
            วิชาที่สอน : {subject}
          </p>
          <p className="font-normal text-base leading-5">
            ระดับชั้นที่สอน : {classTeach}
          </p>
          <p className="font-normal text-base leading-5">
            ประเภทการสอน : {category}
          </p>
        </div>
      </div>
    </div>
  );
};

//export default CardTutor2;