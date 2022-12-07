import React, { useState, useEffect } from "react";
import { createPost } from "../../../api/post";
import { useNavigate } from "react-router-dom";
import TestData from "./TestData";
import Blog from "./Blog";
import axios from "axios";

//Create Post
const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    email: "",
  });

  const navigate = useNavigate();

  let storeEmail = localStorage.getItem("email");
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      email: storeEmail,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createPost(values).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };

  return (
    <div className="container w-full h-full px-10 py-10 rounded-xl drop-shadow-md bg-white-100 font-body">
      <div className="flex flex-col">
        {/* Create Post */}
        <h1 className="py-4 text-primary-80 font-bold text-2xl md:text-3xl">
          สร้างโพสต์
        </h1>
        {/* Title */}
        <div className="mt-4 mb-2 text-lg md:text-xl text-black">
          <label className="block">
            <span className="py-2 block text-xl md:text-2xl font-semibold text-black">
              หัวข้อ
            </span>
            <input
              name="title"
              type="text"
              onChange={handleChange}
              placeholder="กรุณากรอกหัวข้อ..."
              required
              className="cool-input mt-1 w-full px-3 py-2 bg-white-100 border border-slate-300 rounded-md text-base md:text-lg shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary-80 focus:ring-1 focus:ring-primary-80
   "
            />
          </label>
        </div>
        {/* Content */}
        <div className="my-4 text-lg md:text-xl text-black">
          <label className="block">
            <span className="py-2 block text-xl md:text-2xl font-semibold text-black">
              รายละเอียด
            </span>
            <textarea
              name="content"
              type="text"
              onChange={handleChange}
              placeholder="กรุณากรอกรายละเอียด..."
              required
              className="mt-1 w-full h-[200px] px-3 py-2 bg-white-100 border border-slate-300 rounded-md text-base md:text-lg shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary-80 focus:ring-1 focus:ring-primary-80
      "
            />
          </label>
        </div>
        {/* button submit */}
        <button
          className="mt-4 px-4 py-3 font-bold text-2xl md:text-3xl rounded-2xl bg-primary-80 text-white-100 hover:bg-primary-100"
          onClick={handleSubmit}
        >
          โพสต์
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
