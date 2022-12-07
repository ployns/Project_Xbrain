import React, { useState, useEffect } from "react";
import { CardTutor2 } from "./CardTutor2";
import { Link } from "react-router-dom";
import picture from "./student1.png";

import { listSearch, testSearch } from "../../api/search";
function Search() {
  // const handleChange = (e) => {                             //การเปลี่ยนแปรงค่าเมื่อกรอก
  //     setValues({ ...values,
  //       [e.target.name]: e.target.value });
  //   };

  const [subject, setSubject] = useState({
    // เก็บค่า checkbox ของวิชาต่างๆ
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

  const [classTeach, setClassTeach] = useState({
    // เก็บค่า checkbox ของระดับชั้นต่างๆ
    kindergarten: false,
    high: false,
    primary: false,
    college: false,
    middle: false,
    graduated: false,
  });

  const [type, setType] = useState({
    // เก็บค่า checkbox ของประเภทการสอนต่างๆ
    grade: false,
    enHigh: false,
    knowledge: false,
    enPrimary: false,
    entrance: false,
  });

  const [place, setPlace] = useState({
    // เก็บค่า checkbox ของสภานที่สอนต่างๆ
    online: false,
    onsite: false,
  });

  const [searchdata, setSearch] = useState({
    openCourse: [],
    studentClass: [],
    teachType: [],
    place: [],
  });

  const [resultSearch, setResultSearch] = useState([]);

  const handleChangeSubjectCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วิชาต่างๆ
    setSubject((subject) => ({
      ...subject,
      [e.target.name]: !subject[e.target.name],
    }));
  };

  useEffect(() => {
    const newlistSubject = [];
    for (var e in subject) {
      if (subject[e]) {
        // newLikings += e + " ";
        newlistSubject.push(e);
      }
    }
    setSearch({ ...searchdata, openCourse: newlistSubject });
  }, [subject]);

  const handleChangeClassCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ระดับชั้นต่างๆ
    setClassTeach({
      ...classTeach,
      [e.target.name]: !classTeach[e.target.name],
    });
  };
  useEffect(() => {
    const newlistClassTeach = [];
    for (var e in classTeach) {
      if (classTeach[e]) {
        // newLikings += e + " ";
        newlistClassTeach.push(e);
      }
    }
    setSearch({ ...searchdata, studentClass: newlistClassTeach });
  }, [classTeach]);

  const handleChangeTypeCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setType({ ...type, [e.target.name]: !type[e.target.name] });
  };
  useEffect(() => {
    const newlistType = [];
    for (var e in type) {
      if (type[e]) {
        // newLikings += e + " ";
        newlistType.push(e);
      }
    }
    setSearch({ ...searchdata, teachType: newlistType });
  }, [type]);

  const handleChangePlaceCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setPlace({ ...place, [e.target.name]: !place[e.target.name] });
  };
  useEffect(() => {
    const newlistPlace = [];
    for (var e in place) {
      if (place[e]) {
        // newLikings += e + " ";
        newlistPlace.push(e);
      }
    }
    setSearch({ ...searchdata, place: newlistPlace });
  }, [place]);

  async function handleSubmit(e) {
    //ฟังชั่นจากการกด submit
    e.preventDefault();
    let keyP = ["openCourse", "studentClass", "teachType", "place"];
    for (var i = 0; i < keyP.length; i++) {
      if (searchdata[keyP[i]] === "" || searchdata[keyP[i]] === 0) {
        delete searchdata[keyP[i]];
      }
    }
    // const xhr = new XMLHttpRequest();
    console.log("searchdata", searchdata);
    await sendData(searchdata);
  }

  async function sendData(searchdata) {
    await listSearch(searchdata)
      .then((res) => {
        console.log("res data ;", res.data);
        // setUsers(res.data)
        setResultSearch(res.data);
        const a = res.data;
        console.log(a);

        setResultSearch(res.data);
        setUsers(res.data);
        console.log("search res is ... ", resultSearch);
      })
      .catch((err) => {
        //err
        console.log("Error sentData", err.response.data);
      });
  }

  const handletest = (e) => {
    console.log(classTeach.kindergarten); //ฟังชั่นจากการกด test
  };

  const [users, setUsers] = useState(
    []
    // JsonData.slice(0, 0)
  );

  var displayUsers = users.map((user, index) => {
    console.log("user is !!!" + user);
    return (
      //link ไปยัง detail tutor ของเเต่ละ user
      <Link to={`/detailTutor/${user.post_id}`}>
        <CardTutor2
          image={picture}
          introduce={user.teacherName}
          gradFrom={user.freeTime.join("    ")}
          subject={user.openCourse.join("    ")}
          classTeach={user.studentClass.join("    ")}
          category={user.place.join("    ")}
        />
      </Link>
    );
  });

  return (
    <div className="font-body ">
      <div
        className="mx-24 text-black border-2 border-gray-200" //ส่วนของการเลือกฟิลเตอร์
      >
        <div //เลือกฟิลเตอร์วิชา เว้น value ไว้ก่อนนะ
        >
          <div className="text-xl text-center mt-16 font-bold">
            วิชาที่ต้องการเรียน
          </div>
          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวแรก
          >
            <div>
              <input
                type="checkbox"
                id="english"
                name="english"
                className="hidden peer"
                checked={subject.english}
                onChange={handleChangeSubjectCheckbox} // checkbox อังกฤษ
              ></input>
              <label
                for="english"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">อังกฤษ</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="maths"
                name="maths"
                className="hidden peer"
                checked={subject.maths}
                onChange={handleChangeSubjectCheckbox} // checkbox คณิตศาสตร์
              ></input>
              <label
                for="maths"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">คณิตศาสตร์</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="bio"
                name="bio"
                className="hidden peer"
                checked={subject.bio}
                onChange={handleChangeSubjectCheckbox} // checkbox ชีวะ
              ></input>
              <label
                for="bio"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ชีวะ</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="physics"
                name="physics"
                className="hidden peer"
                checked={subject.physics}
                onChange={handleChangeSubjectCheckbox} // checkbox ฟิสิกส์
              ></input>
              <label
                for="physics"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ฟิสิกส์</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="chemistry"
                name="chemistry"
                className="hidden peer"
                checked={subject.chemistry}
                onChange={handleChangeSubjectCheckbox} // checkbox เคมี
              ></input>
              <label
                for="chemistry"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">เคมี</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="thai"
                name="thai"
                className="hidden peer"
                checked={subject.thai}
                onChange={handleChangeSubjectCheckbox} // checkbox ภาษาไทย
              ></input>
              <label
                for="thai"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ภาษาไทย</div>
              </label>
            </div>
          </div>

          <div
            className="flex flex-row ml-auto space-x-10 mb-5 justify-center" //แถวสอง
          >
            <div>
              <input
                type="checkbox"
                id="science"
                name="science"
                className="hidden peer"
                checked={subject.science}
                onChange={handleChangeSubjectCheckbox} // checkbox อังกฤษ
              ></input>
              <label
                for="science"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">วิทยาศาสตร์</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="social"
                name="social"
                className="hidden peer"
                checked={subject.social}
                onChange={handleChangeSubjectCheckbox} // checkbox คณิตศาสตร์
              ></input>
              <label
                for="social"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">สังคม</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="gat"
                name="gat"
                className="hidden peer"
                checked={subject.gat}
                onChange={handleChangeSubjectCheckbox} // checkbox ชีวะ
              ></input>
              <label
                for="gat"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">GAT เชื่อมโยง</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="astronomy"
                name="astronomy"
                className="hidden peer"
                checked={subject.astronomy}
                onChange={handleChangeSubjectCheckbox} // checkbox ฟิสิกส์
              ></input>
              <label
                for="astronomy"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ดาราศาสตร์</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="french"
                name="french"
                className="hidden peer"
                checked={subject.french}
                onChange={handleChangeSubjectCheckbox} // checkbox เคมี
              ></input>
              <label
                for="french"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ภาษาฝรั่งเศส</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="german"
                name="german"
                className="hidden peer"
                checked={subject.german}
                onChange={handleChangeSubjectCheckbox} // checkbox ภาษาไทย
              ></input>
              <label
                for="german"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ภาษาเยอรมัน</div>
              </label>
            </div>
          </div>

          <div
            className="flex flex-row ml-auto space-x-10 mb-5 justify-center" //แถวสาม
          >
            <div>
              <input
                type="checkbox"
                id="japanese"
                name="japanese"
                className="hidden peer"
                checked={subject.japanese}
                onChange={handleChangeSubjectCheckbox} // checkbox อังกฤษ
              ></input>
              <label
                for="japanese"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ภาษาญี่ปุ่น</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="arabic"
                name="arabic"
                className="hidden peer"
                checked={subject.arabic}
                onChange={handleChangeSubjectCheckbox} // checkbox คณิตศาสตร์
              ></input>
              <label
                for="arabic"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ภาษาอาหรับ</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="korean"
                name="korean"
                className="hidden peer"
                checked={subject.korean}
                onChange={handleChangeSubjectCheckbox} // checkbox ชีวะ
              ></input>
              <label
                for="korean"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ภาษาเกาหลี</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="russian"
                name="russian"
                className="hidden peer"
                checked={subject.russian}
                onChange={handleChangeSubjectCheckbox} // checkbox ฟิสิกส์
              ></input>
              <label
                for="russian"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ภาษารัสเซีย</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="chinese"
                name="chinese"
                className="hidden peer"
                checked={subject.chinese}
                onChange={handleChangeSubjectCheckbox} // checkbox เคมี
              ></input>
              <label
                for="chinese"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ภาษาจีน</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="programming"
                name="programming"
                className="hidden peer"
                checked={subject.programming}
                onChange={handleChangeSubjectCheckbox} // checkbox ภาษาไทย
              ></input>
              <label
                for="programming"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">เขียนโปรแกรม</div>
              </label>
            </div>
          </div>
        </div>

        <div //เลือกฟิลเตอร์ระดับชั้น เว้น value ไว้ก่อนนะ
        >
          <div className="text-xl text-center mt-10 font-bold">ระดับชั้น</div>

          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวแรก
          >
            <div>
              <input
                type="checkbox"
                id="kindergarten"
                name="kindergarten"
                className="hidden peer"
                checked={classTeach.kindergarten}
                onChange={handleChangeClassCheckbox} // checkbox อนุบาล
              ></input>
              <label
                for="kindergarten"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">อนุบาล</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="primary"
                name="primary"
                className="hidden peer"
                checked={classTeach.primary}
                onChange={handleChangeClassCheckbox} // checkbox ประถม
              ></input>
              <label
                for="primary"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ประถม</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="middle"
                name="middle"
                className="hidden peer"
                checked={classTeach.middle}
                onChange={handleChangeClassCheckbox} // checkbox มัธยมต้น
              ></input>
              <label
                for="middle"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">มัธยมต้น</div>
              </label>
            </div>
          </div>
          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวสอง
          >
            <div>
              <input
                type="checkbox"
                id="high"
                name="high"
                className="hidden peer"
                checked={classTeach.high}
                onChange={handleChangeClassCheckbox} // checkbox มัธยมปลาย
              ></input>
              <label
                for="high"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">มัธยมปลาย</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="college"
                name="college"
                className="hidden peer"
                checked={classTeach.college}
                onChange={handleChangeClassCheckbox} // checkbox มหาลัย
              ></input>
              <label
                for="college"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">มหาลัย</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="graduated"
                name="graduated"
                className="hidden peer"
                checked={classTeach.graduated}
                onChange={handleChangeClassCheckbox} // checkbox เรียนจบแล้ว
              ></input>
              <label
                for="graduated"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">เรียนจบแล้ว</div>
              </label>
            </div>
          </div>
        </div>

        <div //เลือกฟิลเตอร์เป้าหมายการเรียน เว้น value ไว้ก่อนนะ
        >
          <div className="text-xl text-center mt-10 font-bold">
            เป้าหมายการเรียน
          </div>

          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวแรก
          >
            <div>
              <input
                type="checkbox"
                id="grade"
                name="grade"
                className="hidden peer"
                checked={type.grade}
                onChange={handleChangeTypeCheckbox} // checkbox เพิ่มเกรดแต่ละชั้นปี
              ></input>
              <label
                for="grade"
                className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">
                  เพิ่มเกรดแต่ละชั้นปี
                </div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="enPrimary"
                name="enPrimary"
                className="hidden peer"
                checked={type.enPrimary}
                onChange={handleChangeTypeCheckbox} // checkbox สอบเข้ามัธยมต้น
              ></input>
              <label
                for="enPrimary"
                className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">
                  สอบเข้ามัธยมต้น
                </div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="enHigh"
                name="enHigh"
                className="hidden peer"
                checked={type.enHigh}
                onChange={handleChangeTypeCheckbox} // checkbox สอบเข้ามัธยมปลาย
              ></input>
              <label
                for="enHigh"
                className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">
                  สอบเข้ามัธยมปลาย
                </div>
              </label>
            </div>
          </div>
          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวสอง
          >
            <div>
              <input
                type="checkbox"
                id="entrance"
                name="entrance"
                className="hidden peer"
                checked={type.entrance}
                onChange={handleChangeTypeCheckbox} // checkbox สอบเข้ามหาลัย
              ></input>
              <label
                for="entrance"
                className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">
                  สอบเข้ามหาลัย
                </div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="knowledge"
                name="knowledge"
                className="hidden peer"
                checked={type.knowledge}
                onChange={handleChangeTypeCheckbox} // checkbox เพิ่มความรู้
              ></input>
              <label
                for="knowledge"
                className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">เพิ่มความรู้</div>
              </label>
            </div>
          </div>
        </div>

        <div //เลือกฟิลเตอร์สถานที่ เว้น value ไว้ก่อนนะ
        >
          <div className="text-xl text-center mt-10 font-bold">สถานที่</div>

          <div
            className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center" //แถวแรก
          >
            <div>
              <input
                type="checkbox"
                id="online"
                name="online"
                className="hidden peer"
                checked={place.online}
                onChange={handleChangePlaceCheckbox} // checkbox ออนไลน์
              ></input>
              <label
                for="online"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg   text-center">ออนไลน์</div>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="onsite"
                name="onsite"
                className="hidden peer"
                checked={place.onsite}
                onChange={handleChangePlaceCheckbox} // checkbox ออนไซต์
              ></input>
              <label
                for="onsite"
                className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 "
              >
                <div className="w-full text-lg  text-center">ออนไซต์</div>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button //ปุ่ม submit
            className="mt-5 flex-center inline-block px-16 py-3 mb-8 bg-primary-80 text-white-100 text-xl font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
            id="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
          {/* <button                                                         //ปุ่ม test ชั่วคราว
                                    className="mt-5 flex-center inline-block px-24 py-3 bg-primary-80 text-white-100 text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                                    id="submit" 
                                    onClick={handletest}
                                >
                                    test
                                </button> */}
        </div>
      </div>

      {displayUsers}
    </div>
  );
}
export default Search;
