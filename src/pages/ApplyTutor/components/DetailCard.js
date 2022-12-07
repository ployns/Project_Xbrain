import React, { useState, useEffect } from "react";
import community from "../../../assets/icons/community.png";

import TestData from "./TestData"; //fake data เอามา test จร้า

import CardApply from "./CardApply";

import { listApplyTeacher } from "../../../api/tutorApply";

const DetailCard = () => {
  //รอเอาค่าจริงมาใส่ , [] ใส่มาเพื่อจะดู values. บลาๆ
  const [values, setValues] = useState([]);

  useEffect(() => {
    var teacher_id = localStorage.getItem("id");
    loadData(teacher_id);
    console.log(TestData);
  }, [TestData]);

  const loadData = (teacher_id) => {
    listApplyTeacher(teacher_id)
      .then((res) => {
        console.log("res ", res);
        console.log("res.data", res.data);

        setValues(res.data);
      })
      .catch((err) => {
        //err
        console.log("Error loadData", err.response.data);
      });
  };

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20 text-center md:text-center xl:text-center">
        <h1 className="font-bold text-2xl leading-8 md:text-3xl font-body">
          ใบสมัคร
        </h1>
      </div>
      {/* Map data */}
      {Object.values(values).map((value) => (
        <CardApply
          key={values.id}
          student={value.studentName}
          college={value.college}
          subject={value.course}
          type={value.teachType}
          wage={value.price}
          place={value.place}
        />
      ))}
    </div>
  );
};

export default DetailCard;
