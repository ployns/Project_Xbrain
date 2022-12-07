import React, { useState, useEffect } from "react";
import { CardBlog } from "../components/CardBlog";
import CreatePost from "./CreatePost";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { listPost } from "../../../api/post";
import TestData from "./TestData";

// หน้ารวม Blog ใหม่ๆ
const Blog = () => {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listPost()
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        //err
        console.log("Error loadData", err.response.data);
      });
  };


  
  return (
    <div className="container items-center justify-center mx-auto w-full md:w-3/5 bg-slate-200">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="h-full w-full md:w-8/12 lg:w-[516px] mx-1.5 md:mb-0">
          <CreatePost />
        </div>
        {/* right side */}
        <div className="container w-full md:w-[616px] lg:w-[875px] h-full bg-white-100 rounded-xl drop-shadow-md px-10 py-10">
          {/* card ข่าวสารใหม่ๆ */}
          <div className="flex flex-col mx-1.5 gap-5">
            <h1 className="py-4 font-bold text-2xl leading-8 md:text-3xl text-primary-80 font-body">
              ข่าวสาร
            </h1>
            {/* Map data */}
            {values.map((value) => (
              <Link to={`/Feed/${value.id}`} className="">
                <CardBlog title={value.title} content={value.content} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
