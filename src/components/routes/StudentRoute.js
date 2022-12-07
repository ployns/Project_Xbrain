import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect.js";

// children คือ route ที่อยู่ภายใน UserRoute อีกที (ในที่นี้คือ HomeUser)
const RouteStudent = ({ children }) => {
  // ให้ตัวแปร user = เข้าถึงค่า state ปัจจุบัน ( token , user ) ด้วย ...state
  let role = localStorage.getItem("role");

  // มีค่า userและtoken ไหม
  return role === "student" ? (
    children // ถ้ามีให้เข้าไปทำงานที่ children (HomeUser)
  ) : (
    <LoadingToRedirect />
  ); // ถ้าไม่มีให้ทำงาน
};

export default RouteStudent;
