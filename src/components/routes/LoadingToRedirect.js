import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect.js";

// children คือ route ที่อยู่ภายใน UserRoute อีกที (ในที่นี้คือ HomeUser)
const TutorRoute = ({ children }) => {
  // ให้ตัวแปร user = เข้าถึงค่า state ปัจจุบัน ( token , user ) ด้วย ...state
  const { user } = useSelector((state) => ({ ...state }));

  // มีค่า userและtoken ไหม
  return role == "tutor" ? (
    children // ถ้ามีให้เข้าไปทำงานที่ children (HomeUser)
  ) : (
    <LoadingToRedirect />
  ); // ถ้าไม้มีให้ทำงาน
};

export default TutorRoute;
