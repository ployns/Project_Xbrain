import React from "react";
import CardTutor from "./components/CardTutor"




function FindTutor() {
  return (
    <div className="grid grid-flow-row auto-rows-max   w-screen   bg-[#CFD8DC] ">
    <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
      Navbar
    </div>

      <p className=" mt-28 pt-10 pb-10 w-screen absolute z-20 text-5xl font-bold pl-10 bg-[#ACB9FF]">
        หาติวเตอร์ที่โดนใจ
      </p>
   

    <div className="   mt-28 pt-20" key={CardTutor.id}>
      <CardTutor />
    </div>
  </div>
    
  );
}

export default FindTutor;
