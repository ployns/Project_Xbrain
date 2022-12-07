// import { isDisabled } from "@testing-library/user-event/dist/utils";

import React, { useState, useEffect } from "react";
import PopUp from "../components/Popup";
import PopupSuccess from "../components/PopupSuccess";
import {  getTeacherPostById} from "../../../api/studentSentApply"
import { addApplyPost , test } from "../../../api/addApply";
import "../DetailTutor/index.css";

function DetailTutor() {
  const [infotutor, setInfotutor] = useState({
    // เก็บค่า infotutor    ดึงจากหลังบ้าน ไม่มีส่ง
    id: "1",
    image: "",
    nameTutor: "พี่หญิง",
    gradFrom: "วิทยาลัยเทคโนโลยีมารีย์บริหารธุรกิจ",
    subject: "คณิตศาสตร์",
    classTeach: "มัธยมต้น มัธยมปลาย",
    category: "เพิ่มความรู้",
    introduce:
      "ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ",
    detailTech: "เน้นทำความเข้าใจพื้นฐานเพื่อสามารถทำข้อสอบประยุกต์ได้",
    experience:
      "มีประสบการณ์การสอน เด็ก ระดับ ประถมปลาย (น้อง ป.5 ระยะเวลาสอน 2 เดือน เน้นการวิเคราะห์โจทย์ปัญหาธุรกิจ)",
  });
  const [lastData,setLastData] = useState({
      post_id : "" , // change this 
      course : "", 
      place : "",
      teachType : ""
  })
  // ช่องม่วง 
  const [subjectReg, setSubjectReg] = useState({
    // เก็บค่า checkbox ของวิชาต่างๆ จากที่จอง ส่งไปหลังบ้าน
    subject: "",
    id:"",
  });

  const [sentFinal,setSentFinal]=  useState({
    freeday: ""
  });

  const [typeReg, setTypeReg] = useState({
    // เก็บค่า checkbox ของประเภทการสอนต่างๆ ส่งไปหลังบ้าน
    grade: false,
    enHigh: false,
    knowledge: false,
    enPrimary: false,
    entrance: false,
  });

  const [placeReg, setPlaceReg] = useState({
    // เก็บค่า checkbox ของสภานที่สอนต่างๆ ส่งไปหลังบ้าน
    online: false,
    onsite: false,
  });

  const [priceReg, setPriceReg] = useState({
    // เก็บค่าตัวเลข ราคาของวิชาต่างๆ ส่งไปหลังบ้าน ไม่น่าได้ใช้
    english: "",
    maths: "1000",
    bio: "",
    physics: "",
    chemistry: "",
    thai: "",
    social: "",
    gat: "1000",
    astronomy: "",
    science: "",
    french: "",
    german: "",
    japanese: "",
    arabic: "",
    korean: "",
    russian: "",
    chinese: "",
    programming: "",
  });

  const [dayTutorReg, setDayTutorReg] = useState({
    monDayTeach: false, //วันว่างของติวเตอร์ ส่งไปหลังบ้าน
    tuesDayTeach: false, //
    wednesDayTeach: false, //
    thursDayTeach: false, //
    friDayTeach: false, //
    saturDayTeach: false, //
    sunDayTeach: false, //
  });

  {
    /*------------------------------------------------------------------------------------------*/
  }
  // วิชาที่เปิดสอนดึงจากหลังบ้าน 
  const [subject, setSubject] = useState({
    // เก็บค่า checkbox ของวิชาต่างๆ จากที่post ดึงมาจากหลังบ้าน
    english: true,
    maths: true,
    bio: true,
    physics: false,
    chemistry: false,
    thai: false,
    social: false,
    gat: true,
    astronomy: false,
    science: false,
    french: false,
    german: false,
    japanese: false,
    arabic: false,
    korean: false,
    russian: false,
    chinese: false,
    programming: false,
  });
  // ไม่ต้องยุ่งเลย ฝฝ 
  const [type, setType] = useState({
    // เก็บค่า checkbox ของประเภทการสอนต่างๆ ดึงมาจากหลังบ้าน
    grade: false,
    enHigh: false,
    knowledge: false,
    enPrimary: false,
    entrance: false,
  });

  //ดึง 
  const [place, setPlace] = useState({
    // เก็บค่า checkbox ของสภานที่สอนต่างๆ ดึงมาจากหลังบ้าน
    online: true,
    onsite: true,
  });

  // เวลาของวันที่ดึงมาล่างช่องม่วง 
  const [day, setDay] = useState({
    // เก็บค่า text เวลาของวันต่างๆ ดึงมาจากหลังบ้าน
    monday: "11:00 - 99:30",  
    tuesday: "11:00 - 99:30",
    wednesday: "11:00 - 99:30",
    thursday: "11:00 - 99:30",
    friday: "11:00 - 99:30",
    saturday: "11:00 - 99:30",
    sunday: "11:00 - 99:30",
  });

  //ราคาด้านข้าง 
  const [price, setprice] = useState({
    // เก็บค่าตัวเลข ราคาของวิชาต่างๆ ดึงมาจากหลังบ้าน
    english: "",
    maths: "",
    bio: "",
    physics: "",
    chemistry: "",
    thai: "",
    social: "",
    gat: "",
    astronomy: "",
    science: "",
    french: "",
    german: "",
    japanese: "",
    arabic: "",
    korean: "",
    russian: "",
    chinese: "",
    programming: "",
  });
  // วันช่องมว่ง 
  const [dayTutor, setdayTutor] = useState({
    monday: '', //วันว่างของติวเตอร์ ดึงมาจากหลังบ้าน
    tuesday: '', //
    wednesday: '', //
    thursday: '', //
    friday: '', //
    saturday: '', //
    sunday: '', //
  });
  //------------------------########*-*SUBMIT*-*########-----------------------------

  const getTrueKey = obj => {
    for (const key in obj) {
      var keys = Object.keys(obj);

var filtered = keys.filter(function(key) {
    return obj[key]
});



    };
    return filtered;
  };

  async function onSubmit(e) {

    let dayTutorRegTrue = getTrueKey(dayTutorReg);
    let placeRegTrue = getTrueKey(placeReg);
    let typeRegTrue = getTrueKey(typeReg);

  
    Object.entries(price).forEach(([key, value]) => {
      // if ()
      console.log(key, value);
  
    });

    // console.log(temp_price);
    var mylastlist = sentFinal.freeday
    console.log("mylastlist", mylastlist);

    const uplondReg = {    //###########################################################################ไอ้ตัวนี้เอาไว้ส่งงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง
      post_id : 1 , // change this 
      course : mylastlist, 
      place : placeRegTrue,
      teachType : typeRegTrue
    }
    console.log("submit upload", uplondReg);
    // change this 
    
    var student_id = 1
    sendData(student_id ,uplondReg )
   
  };

  async function sendData (student_id,value) {
     await addApplyPost(student_id,value).then((res) => {
      console.log ("res data ",res.data)
    } ).catch((err) => {
      //err
      console.log("Error sendData", err.response.data);
    })
  };

  async function loadData  (post_id) {
    await getTeacherPostById(post_id).then((res) => {
      console.log ("res data  ",res.data)
      
      var freeTime = res.data.freeTime
      console.log("freetime data : ",freeTime)
      var freeTimeDay = []
      var freeTimeTime = []

      var freeday = {}
      
      var opencourse = res.data.openCourse
      var coursename = []
      var courseprice = []

      for( var i = 0; i <freeTime.length ; i++ ) {
        freeTimeDay.push(freeTime[i].split(" ")[0] )
        freeTimeTime.push(freeTime[i].split(" ")[1] )
        freeday[freeTime[i].split(" ")[0]] = freeTime[i].split(" ")[1]
      }
      
      var temp = {}
      var cp  = {}
    

      Object.entries(dayTutor).forEach(([key, value]) => {
        if (freeTimeDay.includes(key.toString()) == true){
          temp[key] = true
  
        }else {
          temp[key] = false
        }
      });
    
        //  -------------------------------------------------------------------
      for( var i = 0; i <opencourse.length ; i++ ) {
          coursename.push(opencourse[i].split(" ")[0] )
          courseprice.push(opencourse[i].split(" ")[1] )
          cp[opencourse[i].split(" ")[0]] = opencourse[i].split(" ")[1]
        }

      var temp4 = {}

      Object.entries(subject).forEach(([key, value]) => {
          if (coursename.includes(key.toString()) == true){
            temp4[key] = true
    
          }else {
            temp4[key] = false
          }
        });


      setdayTutor(temp)
      setDay(freeday) 
      setSubject(temp4)
      setprice(cp)
      setSentFinal({...sentFinal,freeday:freeTime})

      console.log("dayTutor",dayTutor)
      console.log("day",day)
      console.log("subject",subject)
      console.log("price",price)
      console.log("sentFinal",sentFinal)

      

       //setdayTutor(temp)
   
    } ).catch((err) => {
      //err
      console.log("Error loadData", err.response.data);
    })
  };

  // console.log("dayTutor" , dayTutor)
 

  // post_id = 1
  useEffect(() => {
    loadData(1)
    console.log("dattt",dayTutor)
    console.log("dayyyy",day)
  },[]);


  //-----------Any Funcation---------------------------------------

  const [subjectRegCheck, setSubjectRegCheck] = useState({
    // เอาไว้เช็คค่าเมื่อตอนจะกดจอง ถ้าไม่กดวิชา ก็กดไม่ได้
    english: false,
    maths: false,
    bio: false,
    physics: false,
    chemistry: false,
    thai: false,
    social: false,
    gat: false,
    astronomy: false,
    science: false,
    french: false,
    german: false,
    japanese: false,
    arabic: false,
    korean: false,
    russian: false,
    chinese: false,
    programming: false,
  });

  const handleChangeRegSubjectCheckCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วิชาต่างๆ เอาไว้เช็คว่ากดยัง
    setSubjectRegCheck({
      ...subjectRegCheck,
      [e.target.id]: !subjectRegCheck[e.target.id],
    });
  };

  //----------------------------handle------------------------

  const handleChangeRegDayTutorCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วันต่างๆ
    setDayTutorReg({
      ...dayTutorReg,
      [e.target.name]: !dayTutorReg[e.target.name],
    });
  };

  function handleChangeRegSubjectCheckbox(event) {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วิชาต่างๆ Return ออกมาเป็น string
    console.log(event);
    const { name, id ,value, type, checked,title  } = event.target;
    setSubjectReg((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        [title]: type === "checkbox" ? checked : id,

      };
    });
  }

  const handleChangeRegTypeCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setTypeReg({ ...typeReg, [e.target.name]: !typeReg[e.target.name] });
  };

  const handleChangeRegPlaceCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setPlaceReg({ ...placeReg, [e.target.name]: !placeReg[e.target.name] });
  };

  //------------------initialState------------------------------
  const initialStatePlaceReg = {
    online: false,
    onsite: false,
  };
  const initialStateSubjectRegCheck = {
    // คืนค่าต่างๆ เป็น false
    english: false,
    maths: false,
    bio: false,
    physics: false,
    chemistry: false,
    thai: false,
    social: false,
    gat: false,
    astronomy: false,
    science: false,
    french: false,
    german: false,
    japanese: false,
    arabic: false,
    korean: false,
    russian: false,
    chinese: false,
    programming: false,
  };

  const initialStateSubjectReg = {
    // คืนค่าต่างๆ เป็น ""
    subject: "",
  };

  const initialStateTypeReg = {
    // คืนค่าต่างๆ เป็น false
    grade: false,
    enHigh: false,
    knowledge: false,
    enPrimary: false,
    entrance: false,
  };

  const initialStatePriceReg = {
    //  // คืนค่าต่างๆ เป็น ...เอ่อ ไม่น่าได้ใช้
    english: "",
    maths: "1000",
    bio: "",
    physics: "",
    chemistry: "",
    thai: "",
    social: "",
    gat: "1000",
    astronomy: "",
    science: "",
    french: "",
    german: "",
    japanese: "",
    arabic: "",
    korean: "",
    russian: "",
    chinese: "",
    programming: "",
  };

  const initialStateDayTutorReg = {
    monDayTeach: false, // คืนค่าต่างๆ เป็น false
    tuesDayTeach: false, //
    wednesDayTeach: false, //
    thursDayTeach: false, //
    friDayTeach: false, //
    saturDayTeach: false, //
    sunDayTeach: false, //
  };

  const resetState = () => {
    //แก้แล้ว
    setDayTutorReg(initialStateDayTutorReg);
    setSubjectRegCheck(initialStateSubjectRegCheck);
    setSubjectReg(initialStateSubjectReg);
    setTypeReg(initialStateTypeReg);
    setPlaceReg(initialStatePlaceReg);
    setShowModalSuccess(false);
  };
  //------------------------------------------------------------------

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  // console.log("day has hit", dayTutorReg);
  // console.log("subject has hit", subjectReg);
  // console.log("subjectRegCheck has hit", subjectRegCheck);
  // console.log("type has hit", typeReg);
  // console.log("place has hit", placeReg);

  return (
    <>
      <div className="  ">
        <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
          Navbar
        </div>

        <div className=" bg-[#ACB9FF] flex flex-nowrap pb-20 w-screen top-15 pt-14  mt-28 absolute z-20  pl-1  ">
          <img
            alt="..."
            src="" //ดึงจากหลังบ้าน
            className="max-w-xs ml-20 shadow-lg rounded-lg group-hover:opacity-75"
          />
          <div className="pl-20 font-bold">
            <h4 className=" text-[#855CF8]  mb-5 text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
              {infotutor.nameTutor} {/*ดึงจากหลังบ้าน*/}
            </h4>
            <p> กำลังศึกษาอยู่ที่/จบจาก {infotutor.gradFrom}</p>{" "}
            {/*ดึงจากหลังบ้าน*/}
            {/*ดึงจากหลังบ้าน*/}
            <p> วิชาที่สอน {infotutor.subject}</p> {/*ดึงจากหลังบ้าน*/}
            <p> ระดับชั้นที่สอน {infotutor.classTeach}</p> {/*ดึงจากหลังบ้าน*/}
            <p> ประเภทการสอน {infotutor.category}</p> {/*ดึงจากหลังบ้าน*/}
          </div>

          <PopUp visible={showModal} onClose={() => setShowModal(false)}>
            <div
              id="defaultModal"
              className="   relative p-4 w-full max-w-2xl h-auto md:h-auto"
            >
              {/* <!-- Modal content --> */}
              <div className=" relative bg-white rounded-lg shadow bg-[white] ">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-[black]">
                    จองวัน/เวลาเรียน
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className=" pl-6 pr-6 pt-1 pb-1 space-y-auto overscroll-auto ">
                  <div className=" ">
                    <h4 className="text-xl  font-semibold ">
                      เลือกวันที่ต้องการจะเรียน
                    </h4>

                    <div className=" grid grid-cols-7 gap-3">
                      <div id="ck-button" className="">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="monDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.monday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.monday
                                ? "text-[black]"
                                : "text-gray-400"
                            } `}
                          >
                            จ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="tuesDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.tuesday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.tuesday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            อ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="wednesDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.wednesday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.wednesday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            พ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="thursDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.thursday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.thursday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            พฤ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="friDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.friday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.friday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            ศ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="saturDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.saturday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.saturday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            ส
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            name="sunDayTeach"
                            onChange={handleChangeRegDayTutorCheckbox}
                            hidden
                            disabled={!dayTutor.sunday}
                          />

                          <span
                            className={`text-xl ${
                              dayTutor.sunday
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            อา
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="text-xl grid grid-flow-col auto-cols-2 gap-12 overflow-y-auto h-32">
                    {" "}
                    {/*overflow-y-auto h-64*/}
                    <div>
                      <div>
                        <h2> วันจันทร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.monday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันอังคาร</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.tuesday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันพุธ</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.wednesday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันพฤหัสบดี</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.thursday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        {" "}
                        <h2> วันศุกร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.friday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันเสาร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.saturday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <h2> วันอาทิตย์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.sunday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className=" flex justify-start text-sm leading-relaxed  text-[gray] dark:border-gray-600">
                    นี่คือเวลาว่างของติวเตอร์ท่านนี้ หากมีเวลาว่างตรงกัน
                    สามารถเลือกเรียนเวลานั้นได้เลย!
                  </p>
                  <form
                    className="grid  overflow-y-auto h-64"
                    //onSubmit={}
                  >
                    <h3 className="text-sm font-semibold leading-relaxed mb-1 text-[black] ">
                      รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </h3>

                    {/* <!-- รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน  ส่งไปหลังบ้าน--> */}

                    <label
                      className="block text-[black] text-m font-bold mb-4" // วิชาที่สอน
                    >
                      วิชาที่สอน
                    </label>
                    <div className="pb-5 pt-5 flex flex-row space-x-1">
                      <div className="ml-1 mr-3">
                        <div className="flex items-center mb-4 ">
                          <input
                             title="id"
                            type="radio"
                            id="english"
                            name="subject"
                            value={`ภาษาอังกฤษ`}
                            checked={subjectReg.subject === "ภาษาอังกฤษ"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4  h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.english
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.maths ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />

                          <label className="block text-gray-700 text-m ml-4 mr-1 ">
                            ภาษาอังกฤษ
                          </label>
                          <label
                            className={`text-m ml-1   
                          ${subject.english ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.english} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="maths"
                            value={"คณิตศาสตร์"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "คณิตศาสตร์"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.maths
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />

                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            คณิตศาสตร์
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.maths ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.maths} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="bio"
                            value={"ชีวะวิทยา"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ชีวะวิทยา"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.bio
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ชีวะวิทยา
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.bio ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.bio} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="physics"
                            value={"ฟิสิกส์"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ฟิสิกส์"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.physics
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ฟิสิกส์
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.physics ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.physics} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="chemistry"
                            value={"เคมี"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "เคมี"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.chemistry
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            เคมี
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.chemistry ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.chemistry} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="thai"
                            value={"ไทย"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ไทย"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.thai
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาไทย
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.thai ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.thai} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="social"
                            value={"สังคม"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "สังคม"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.social
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            สังคม
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.social ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.social} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="gat"
                            value={"GAT เชื่อมโยง"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "GAT เชื่อมโยง"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.gat
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            GAT เชื่อมโยง
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.gat ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.gat} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="astronomy"
                            value={"ดาราศาสตร์"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ดาราศาสตร์"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.astronomy
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ดาราศาสตร์
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.astronomy ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.astronomy} บาท/ชม.
                          </label>
                        </div>
                      </div>
                      <div className="ml-1">
                        <div className="flex items-center mb-4">
                          <input
                            id="science"
                            value={"วิทยาศาสตร์"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "วิทยาศาสตร์"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.science
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            วิทยาศาสตร์
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.science ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.science} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="french"
                            value={"ภาษาฝรั่งเศส"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาฝรั่งเศส"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.french
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาฝรั่งเศส
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.french ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.french} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="german"
                            value={"ภาษาเยอรมัน"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาเยอรมัน"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.german
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาเยอรมัน
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.german ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.german} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="japanese"
                            value={"ภาษาญี่ปุ่น"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาญี่ปุ่น"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.japanese
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาญี่ปุ่น
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.japanese ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.japanese} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="arabic"
                            value={"ภาษาอาหรับ"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาอาหรับ"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.arabic
                                // &&
                                // (subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาอาหรับ
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.arabic ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.arabic} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="korean"
                            value={"ภาษาเกาหลี"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาเกาหลี"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.korean
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาเกาหลี
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.korean ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.korean} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="russian"
                            value={"ภาษารัสเซีย"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษารัสเซีย"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.russian
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษารัสเซีย
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.russian ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.russian} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="chinese"
                            value={"ภาษาจีน"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "ภาษาจีน"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.chinese
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.programming ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาจีน
                          </label>
                          <label
                            className={`text-m ml-1
                          ${subject.chinese ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.chinese} บาท/ชม.
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="programming"
                            value={"เขียนโปรแกรม"}
                            name="subject"
                            type="radio"
                            checked={subjectReg.subject === "เขียนโปรแกรม"}
                            onChange={(e) => {
                              handleChangeRegSubjectCheckCheckbox(e);
                              handleChangeRegSubjectCheckbox(e);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={
                              !(
                                subject.programming
                                // &&
                                // (subjectReg.arabic ||
                                //   subjectReg.astronomy ||
                                //   subjectReg.bio ||
                                //   subjectReg.chemistry ||
                                //   subjectReg.chinese ||
                                //   subjectReg.english ||
                                //   subjectReg.french ||
                                //   subjectReg.gat ||
                                //   subjectReg.german ||
                                //   subjectReg.japanese ||
                                //   subjectReg.korean ||
                                //   subjectReg.physics ||
                                //   subjectReg.russian ||
                                //   subjectReg.science ||
                                //   subjectReg.social ||
                                //   subjectReg.thai)
                              )
                            }
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            เขียนโปรแกรม
                          </label>
                          <label
                            className={`text-m ml-1
                          ${
                            subject.programming ? "text-[black]" : "invisible"
                          }`}
                          >
                            ราคา: {price.programming} บาท/ชม.
                          </label>
                        </div>
                      </div>
                    </div>

                    <label
                      className="block text-[black] text-m font-bold my-4" // ประเภทการสอน
                    >
                      ประเภทการสอน
                    </label>
                    <div>
                      <div className="px-10 flex flex-row space-x-10">
                        <div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="grade"
                              disabled={
                                typeReg.enHigh ||
                                typeReg.enPrimary ||
                                typeReg.entrance ||
                                typeReg.knowledge
                              }
                              onChange={handleChangeRegTypeCheckbox}
                              className="form-check-input  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              เพิ่มเกรดแต่ละชั้นปี
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="enHigh"
                              disabled={
                                typeReg.enPrimary ||
                                typeReg.entrance ||
                                typeReg.knowledge ||
                                typeReg.grade
                              }
                              onChange={handleChangeRegTypeCheckbox}
                              className="form-check-input w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามัธยมปลาย
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="knowledge"
                              disabled={
                                typeReg.enHigh ||
                                typeReg.enPrimary ||
                                typeReg.entrance ||
                                typeReg.grade
                              }
                              onChange={handleChangeRegTypeCheckbox}
                              className="form-check-input w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              เพิ่มความรู้ทั่วไป
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="enPrimary"
                              disabled={
                                typeReg.enHigh ||
                                typeReg.entrance ||
                                typeReg.knowledge ||
                                typeReg.grade
                              }
                              onChange={handleChangeRegTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามัธยมต้น
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="entrance"
                              disabled={
                                typeReg.enHigh ||
                                typeReg.enPrimary ||
                                typeReg.knowledge ||
                                typeReg.grade
                              }
                              onChange={handleChangeRegTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามหาลัย
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label
                      className="block text-[black] text-m font-bold mt-6 mb-4" // สถานที่สอน
                    >
                      สถานที่สอน
                    </label>
                    <div>
                      <div className="px-10 flex flex-row space-x-10">
                        <div className="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            name="online"
                            onChange={handleChangeRegPlaceCheckbox}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!place.online}
                          />
                          <label className="block text-gray-700 text-m mx-4">
                            Online (ออนไลน์)
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            name="onsite"
                            onChange={handleChangeRegPlaceCheckbox}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!place.onsite}
                          />
                          <label className="block text-gray-700 text-m mx-4">
                            Onsite (ออนไซต์)
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <textarea
                      name="detailStudy"
                      id="detailStudy"
                      type="text"
                      cols="30"
                      rows="3"
                      required
                      onChange={handleChange}
                      placeholder="ตัวอย่าง 1.คอร์สเพิ่มเติมความรู้การบริหารธุรกิจ"
                      className="peer border border-slate-400 pl-1"
                      value={dayTutor.detailStudy}
                    ></textarea>
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      *กรุณากรอก รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </p> */}
                  </form>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex justify-end p-6 space-x-2  rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="book-modal"
                    type="button"
                    onClick={() => setShowModal(false) & resetState()}
                    className="text-[white] bg-[#656262] hover:bg-[#656262]-100 focus:ring-4 focus:outline-none focus:ring-[#656262]-300 rounded-lg border border-[#656262]-200 text-sm font-medium px-5 py-2.5 hover:text-[#656262]-900 focus:z-10 dark:bg-[#656262]-700 dark:text-[#656262]-300 dark:border-[#656262]-500 dark:hover:text-white dark:hover:bg-[#656262]-600 dark:focus:ring-[#656262]-600"
                  >
                    ปิด
                  </button>
                  <button
                    data-modal-toggle="book-modal"
                    type="submit"
                    className={` ${
                      place.online || place.onsite //งงๆ แต่อย่าใส่ใจ
                        ? "text-[black]"
                        : "text-gray-400"
                    } text-[white] bg-[#855CF8] hover:bg-[#855CF8]-800 focus:ring-4 focus:outline-none focus:ring-[#855CF8]-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center dark:bg-[#855CF8]-600 dark:hover:bg-[#855CF8]-700 dark:focus:ring-[#855CF8]-800"`}
                    id="submit"
                    // checked={s}
                    disabled={
                      !(
                        (placeReg.online || placeReg.onsite) &&
                        (typeReg.enHigh ||
                          typeReg.entrance ||
                          typeReg.enPrimary ||
                          typeReg.knowledge ||
                          typeReg.grade) &&
                        (dayTutorReg.monDayTeach ||
                          dayTutorReg.tuesDayTeach ||
                          dayTutorReg.wednesDayTeach ||
                          dayTutorReg.thursDayTeach ||
                          dayTutorReg.friDayTeach ||
                          dayTutorReg.saturDayTeach ||
                          dayTutorReg.sunDayTeach) &&
                        (subjectRegCheck.arabic ||
                          subjectRegCheck.astronomy ||
                          subjectRegCheck.bio ||
                          subjectRegCheck.chemistry ||
                          subjectRegCheck.chinese ||
                          subjectRegCheck.english ||
                          subjectRegCheck.french ||
                          subjectRegCheck.gat ||
                          subjectRegCheck.german ||
                          subjectRegCheck.japanese ||
                          subjectRegCheck.korean ||
                          subjectRegCheck.maths ||
                          subjectRegCheck.physics ||
                          subjectRegCheck.programming ||
                          subjectRegCheck.russian ||
                          subjectRegCheck.science ||
                          subjectRegCheck.social ||
                          subjectRegCheck.thai)
                      )
                    }
                    onClick={() =>
                      setShowModal(false) &
                      setShowModalSuccess(true) &
                      onSubmit()
                    }
                  >
                    จอง
                  </button>
                  {/* กดส่งไปหลังบ้าน */}
                </div>
              </div>
            </div>
          </PopUp>

          <PopupSuccess
            visible={showModalSuccess}
            onClose={() => setShowModalSuccess(false)}
          >
            <div
              id="defaultModal"
              className="relative p-4  max-w-2xl h-full md:h-auto"
            >
              {/* <!-- Modal content --> */}

              <div
                id="alert-additional-content-3"
                className="p-4 mb-4 border border-[#855CF8]-800 rounded-lg bg-[white] dark:bg-[white]"
                role="alert"
              >
                <div className="flex items-center  justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 text-green-800 dark:text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <h6 className="font-md text-2xl text-green-700 dark:text-green-800 pb-1 ">
                    จองสำเร็จ!!!
                  </h6>
                </div>
                <div className="mt-2 mb-4 text-sm text-[green] dark:text-[green]">
                  เราได้ทำการจองวัน และ เวลาเรียนให้ท่านแล้ว <br></br>
                  โปรดรอการยืนยันจากติวเตอร์อีกครั้ง
                  โดยสามารถตรวจสอบได้ที่หน้าประวัติการจอง
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-md text-[#855CF8] bg-transparent border border-green-700 hover:bg-[gray] hover:text-[white] focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-5 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                    data-dismiss-target="#alert-additional-content-3"
                    aria-label="Close"
                    onClick={() => setShowModalSuccess(false) & resetState()}
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </PopupSuccess>
        </div>

        <div className="pt-16 bg-blueGray-50">
          <div className="w-full px-4 mx-auto pt-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6 mt-20 pt-20">
                {/* ---------------- */}
                <div className="text-left mt-20 pt-5 ml-10 mb-7">
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    แนะนำตัว
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label>
                      {infotutor.introduce}{" "}
                      {/* ------แนะนำตัว---หลังบ้าน---- */}
                    </label>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    รายละเอียดเกี่ยวกับวิชาที่สอน
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label>
                      {infotutor.detailTech}{" "}
                      {/* ------รายละเอียดเกี่ยวกับวิชาที่สอน----หลังบ้าน--- */}
                    </label>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    ประสบการณ์
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label>
                      {infotutor.experience}{" "}
                      {/* -------ประสบการณ์-----หลังบ้าน---- */}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          title="จองวันและเวลาเรียน"
          className="     container mx-auto fixed w-1/3 bottom-5 inset-x-10  bg-[#855CF8] hover:bg-[#854CF8] text-3xl text-[#FFFFFF] font-bold py-2 px-4 rounded-full"
          type="button"
          data-modal-toggle="book-modal"
          onClick={() => setShowModal(true)}
        >
          จองวัน/เวลาเรียน
        </button>
      </div>
    </>
  );
}

export default DetailTutor;
