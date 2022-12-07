import React, { Fragment, useEffect, useState } from "react";
import "../components/CardStyle.css";
import CardTutor from "../FindTutor/components/CardTutor";

function Card() {
  /* InfoCard*/
  /* ดึงจากหลังบ้าน*/

  const [detailT, setDetailT] = useState([]);


  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      }).then((resJson) => {
        console.log(resJson);
        setDetailT(resJson.data);
      });
  }, []);

  const cardElements = detailT.map(detailT =>{
    return <h3 key={detailT.id}>{detailT.email}</h3>;
  })

 

  
  const cardInfo = [
    {}
  ];
  

  const [detail, setDetail] = useState(cardInfo);


  
  const cardBlock = detail.map(detail => {
    return (
    
      
      <Fragment key={detail.id}>
        {/* Card 1 Start*/}

        <a
          href="/findtutor/detailTutor"
          className="flex flex-col items-center ml-2 mr-5 rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-400 bg-[white]  dark:hover:bg-gray-400 "
        >
          <img
            className="object-cover ml-2 w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
            src={detail.image}
            alt=""
          />
          <div className=" grid grid-flow-col  p-4">
            {" "}
            {/* */}
            <div className="">
              <h4 className=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                {detail.nameTutor}
              </h4>

              <p className="mt-3 text-md font-bold text-skin-base leading-5">
                กำลังศึกษาอยู่ที่/จบจาก: {detail.gradFrom}
              </p>
              <p className="mt-3 text-md font-bold text-skin-base leading-5">
                วิชาที่สอน: {detail.subject}
              </p>
              <p className="mt-3 text-md font-bold text-skin-base leading-5 ">
                ระดับชั้นที่สอน: {detail.classTeach}
              </p>
              <p className="mt-3 text-md font-bold text-skin-base leading-5">
                ประเภทการสอน: {detail.category}
              </p>
            </div>
            <div className="    pl-3 pr-3 pt-1 ">
              <p className="mb-3 font-normal  text-[black] ">
                {detail.introduce}
              </p>
            </div>
          </div>
        </a>

        {/* Card 1 End*/}
      </Fragment>
    )
  });



  /* TheCard*/

  return (
    <div className="    pt-16 mx-auto h-screen grid grid-flow-row auto-rows-max  md:justify-center md:gap-3 md:items-center xl:gap-5  "  key={detail.id}>
      {/* {cardElements} */}
      {cardBlock}
    
      {/* {detail.map((detail) => { */}
        {/* return ( */}
          
          {/* <Fragment key={detail.id}> */}
            {/* Card 1 Start */}

            {/* <a */}
              {/* href="/findtutor/detailTutor" */}
              {/* className="flex flex-col items-center ml-2 mr-5 rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-400 bg-[white]  dark:hover:bg-gray-400 " */}
            {/* > */}
              {/* <img */}
                {/* className="object-cover ml-2 w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" */}
                {/* src={detail.image} */}
                {/* alt="" */}
              {/* /> */}
              {/* <div className=" grid grid-flow-col  p-4"> */}
                {/* {" "} */}
                {/* */}
                {/* <div className="">
                  <h4 className=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                    {detail.nameTutor}
                  </h4>

                  <p className="mt-3 text-md font-bold text-skin-base leading-5">
                    กำลังศึกษาอยู่ที่/จบจาก: {detail.gradFrom}
                  </p>
                  <p className="mt-3 text-md font-bold text-skin-base leading-5">
                    วิชาที่สอน: {detail.subject}
                  </p>
                  <p className="mt-3 text-md font-bold text-skin-base leading-5 ">
                    ระดับชั้นที่สอน: {detail.classTeach}
                  </p>
                  <p className="mt-3 text-md font-bold text-skin-base leading-5">
                    ประเภทการสอน: {detail.category}
                  </p>
                </div>
                <div className="    pl-3 pr-3 pt-1 ">
                  <p className="mb-3 font-normal  text-[black] ">
                    {detail.introduce}
                  </p>
                </div>
              </div> */}
            {/* </a> */}

            {/* Card 1 End*/}
          {/* </Fragment> */}
        {/* ); */}
      {/* })} */}
    </div>
  );
}

export default Card;
