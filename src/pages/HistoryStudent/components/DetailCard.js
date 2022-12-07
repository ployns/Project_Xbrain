import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import community from "../../../assets/icons/community.png";
import { listApplyPostStudent } from "../../../api/studentHistory";
const DetailCard = () => {
  //เก็บค่าตัวเเปร
  const [values, setValues] = useState({
    tutor: "", //ชื่อ tutor
    college: "", //ชื่อมหาลัย
    subject: "", //ชื่อวิชา
    type: "", //ประเภท
    price: "", //ราคา
    place: "", //สถานที่
    result: "", //ผลการสมัคร
  });

  const params = useParams();
  useEffect(() => {
    var post_id = params.post_id;

    loadData(post_id);
  }, []);

  const loadData = (post_id) => {
    listApplyPostStudent("1")
      .then((res) => {
        console.log("res.data.apply", res.data["applyPostEntity"]);
        console.log("res.data", res.data);
        var b = res.data["applyPostEntity"];
        setValues(res.data);
      })
      .catch((err) => {
        //err
        console.log("Error loadData", err.response.data);
      });
  };

  //สีปุ่ม status ผลการสมัคร
  const makeStyles = (status) => {
    if (status == "Approved") {
      return {
        background: "#855CF8",
        color: "white",
        border: "solid 4px #855CF8",
        borderRadius: "15px",
        padding: "5px",
      };
    } else if (status == "pending") {
      return {
        background: "#FAAC40",
        color: "white",
        border: "solid 8px #FAAC40 ",
        borderRadius: "15px",
        padding: "5px",
      };
    } else {
      return {
        background: "#FF3358",
        color: "white",
        border: "solid 4px #FF3358",
        borderRadius: "15px",
        padding: "5px",
      };
    }
  };

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20  text-center md:text-center xl:text-center">
        <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-[#503795]">
          <h1 className="font-bold text-2xl leading-8 md:text-3xl text-white-100">
            ประวัติการสมัคร
          </h1>
        </div>
      </div>

      {/* Cards */}
      {/* เอาข้อมูลมา map */}
      <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-white-100">
        {/* Profile pic */}
        <div className="mt-3 flex w-full items-center space-x-4">
          <img
            src={community}
            className="aspect-square w-12 shrink-0 rounded-full "
            alt="ImageTutor"
          />
          <div className="flex w-full min-w-0 flex-col -space-y-1">
            {/* ชื่อติวเตอร์ + ชื่อมหาลัย */}
            <div className="ellipsis font-bold text-lg">{values.tutor}</div>
            <div className="text-sm font-normal">{values.college}</div>
          </div>
        </div>

        <div className=" border-b-2 border-[#999999]"></div>

        <div className="flex flex-row text-base">
          <div className="flex flex-row flex-auto space-x-[86px]">
            <label className="font-semibold">วิชา</label>
            <div className="font-normal">{values.subject}</div>
          </div>

          <div className="flex flex-row flex-auto space-x-8">
            <label className="font-semibold">ประเภท</label>
            <div className="font-normal">{values.type}</div>
          </div>
        </div>

        <div className="flex flex-row items-end space-x-[77px]">
          <label className="font-semibold">ราคา</label>
          <div className="font-normal">{values.price}</div>
        </div>

        <div className="flex flex-row items-end space-x-16">
          <label className="font-semibold">สถานที่</label>
          <div className="font-normal">{values.place}</div>
        </div>

        <div className="flex flex-row flex-auto space-x-6">
          <label className="font-semibold">ผลการสมัคร</label>
          <div className="-mt-1 px-3 py-1 font-normal rounded-2xl text-white-100">
            <span className="status" style={makeStyles(values.result)}>
              {values.result}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
