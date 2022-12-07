import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { createTeacherPost } from "../../api/teacherPostCreate";
import { getTeacherPostById } from "../../api/studentSentApply";
function PostTeach() {
  // value

  const [values, setValues] = useState({
    //เก็บค่าตัวแปรต่างๆที่เป็น text
    experience: "", //รายละเอียดเพิ่มเติม (คะแนนสอบต่างๆ ประสบการณ์)
    detail: "",
  });

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

  const [price, setPrice] = useState({
    // เก็บค่า text ราคา ของวิชาต่างๆ
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

  const [checked, setChecked] = useState({
    // เก็บค่า checkbox ของวันต่างๆ
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const [day, setDay] = useState({
    // เก็บค่า text ของวันต่างๆ
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  const [postdata, setPost] = useState({
    description: "",
    experience: "",
    openCourse: "",
    studentClass: "",
    teachType: "",
    place: "",
    freeTime: "",
  });

  const [recivePost, setRecivePost] = useState([]);
  var { user } = useState((state) => ({ ...state }));

  // const [listClassTeach, setListClassTeach] = useState([])
  // const [listType, setListType] = useState([])
  // const [listPlace, setListPlace] = useState([])
  // const [listDay, setListDay] = useState([])
  // const [listSubject, setListSubject] = useState([])

  async function sentData(teacher_id, values) {
    await createTeacherPost(teacher_id, values)
      .then((res) => {})
      .catch((err) => {
        //err
        console.log("Error sentData", err.response.data);
      });
  }

  // handleChange

  const handleChange = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อกรอก (ทั่วไป)
    setValues({ ...values, [e.target.name]: e.target.value });
    //setPost({ ...postdata, [e.target.name]: values[e.target.name] });
  };

  useEffect(() => {
    //เรียกใช้เมื่อ detail มีการเปลี่ยนแปลง ไม่ใช้ useEffect ไม่ได้เพราะ setState ทำเสร็จเมื่อจบฟังก์ชั่น
    setPost({ ...postdata, description: values.detail });
  }, [values.detail]);

  useEffect(() => {
    setPost({ ...postdata, experience: values.experience });
  }, [values.experience]);

  const handleChangeDayText = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อกรอกของวันต่างๆ
    setDay({ ...day, [e.target.name]: e.target.value });
  };

  const handleChangeDayCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วันต่างๆ
    if ({ ...checked, [e.target.name]: true }) {
      setDay({ ...day, [e.target.name]: "" });
    }
    setChecked({ ...checked, [e.target.name]: !checked[e.target.name] });
  };
  useEffect(() => {
    const newlistDay = [];
    for (var e in checked) {
      if (checked[e]) {
        // newLikings += e + " ";
        newlistDay.push(e + " " + day[e]);
      }
    }
    setPost({ ...postdata, freeTime: newlistDay });
  }, [checked, day]);

  const handleChangeSubjectCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วิชาต่างๆ
    if ({ ...subject, [e.target.name]: true }) {
      setPrice({ ...price, [e.target.name]: "" });
    }
    setSubject((subject) => ({
      ...subject,
      [e.target.name]: !subject[e.target.name],
    })); //คือการเรียกตัวแปรค่าเก่า ไม่ใช่อันแรกเริ่ม
  };
  useEffect(() => {
    const newlistSubject = [];
    for (var e in subject) {
      if (subject[e]) {
        // newLikings += e + " ";
        newlistSubject.push(e + " " + price[e]);
      }
    }
    setPost({ ...postdata, openCourse: newlistSubject });
  }, [subject, price]);

  const handleChangePrice = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อกรอกราคาของวิชาต่างๆ
    setPrice((price) => ({ ...price, [e.target.name]: e.target.value }));
  };

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
    setPost({ ...postdata, studentClass: newlistClassTeach });
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
    setPost({ ...postdata, teachType: newlistType });
  }, [type]);

  const handleChangePlaceCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox สถานที่ต่างๆ
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
    setPost({ ...postdata, place: newlistPlace });
  }, [place]);

  // const handleSubmit = (e) => {
  //     console.log(checked.monday)                         //ฟังชั่นจากการกด submit
  //     alert("Saved");
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    let keyP = [
      "detail",
      "experience",
      "openCourse",
      "studentClass",
      "teachType",
      "place",
      "freeTime",
    ];
    for (var i = 0; i < keyP.length; i++) {
      if (postdata[keyP[i]] === "" || postdata[keyP[i]] === 0) {
        delete postdata[keyP[i]];
      }
    }

    console.log("postdata", postdata);
    window.location.href = "/payment";

    let post_id = localStorage.getItem("id");
    sentData(post_id, postdata);

    //    const res = await axios.post(process.env.REACT_APP_API+'/posts',postdata,{headers:{'authorization':`Bearer ${user.token}`} })
    //    .then((res)=> {
    //     //toast.success("Post Created");

    //   console.log('resdatais:',res.data)
    //    setRecivePost(res.data)
    //   console.log('recivePostis:',recivePost)

    // })
  }

  // const handletest = (e) => {

  //     console.log(postdata)

  // };

  return (
    <div className="font-body  my-20 mx-24 text-black ">
      <div className=" font-bold text-5xl ">ลงสอนพิเศษ</div>
      <form onSubmit={handleSubmit}>
        <div className="px-16 my-10 flex-row space-x-24  flex justify-center ml-16">
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-4" // วิชาที่สอน
            >
              วิชาที่สอน *
            </label>
            <div className="px-10 flex flex-row space-x-2">
              <div className="mr-16">
                <div className="flex items-center mb-2">
                  <input
                    id="english"
                    name="english"
                    type="checkbox"
                    checked={subject.english}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required={
                      !subject.english &
                      !subject.maths &
                      !subject.arabic &
                      !subject.astronomy &
                      !subject.bio &
                      !subject.chemistry &
                      !subject.chinese &
                      !subject.french &
                      !subject.gat &
                      !subject.gat &
                      !subject.german &
                      !subject.japanese &
                      !subject.korean &
                      !subject.physics &
                      !subject.programming &
                      !subject.russian &
                      !subject.science &
                      !subject.social &
                      !subject.thai
                    }
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาอังกฤษ
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="english"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="english"
                    value={price.english}
                    disabled={!subject.english}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="maths"
                    name="maths"
                    type="checkbox"
                    checked={subject.maths}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    คณิตศาสตร์
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="maths"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="maths"
                    value={price.maths}
                    disabled={!subject.maths}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="bio"
                    name="bio"
                    type="checkbox"
                    checked={subject.bio}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ชีวะ
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="bio"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="bio"
                    value={price.bio}
                    disabled={!subject.bio}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="physics"
                    name="physics"
                    type="checkbox"
                    checked={subject.physics}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ฟิสิกส์
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="physics"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="physics"
                    value={price.physics}
                    disabled={!subject.physics}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="chemistry"
                    name="chemistry"
                    type="checkbox"
                    checked={subject.chemistry}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    เคมี
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="chemistry"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="chemistry"
                    value={price.chemistry}
                    disabled={!subject.chemistry}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="thai"
                    name="thai"
                    type="checkbox"
                    checked={subject.thai}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาไทย
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="thai"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="thai"
                    value={price.thai}
                    disabled={!subject.thai}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="social"
                    name="social"
                    type="checkbox"
                    checked={subject.social}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    สังคม
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="social"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="social"
                    value={price.social}
                    disabled={!subject.social}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="gat"
                    name="gat"
                    type="checkbox"
                    checked={subject.gat}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    GAT เชื่อมโยง
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="gat"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="gat"
                    value={price.gat}
                    disabled={!subject.gat}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="astronomy"
                    name="astronomy"
                    type="checkbox"
                    checked={subject.astronomy}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ดาราศาสตร์
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="astronomy"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="astronomy"
                    value={price.astronomy}
                    disabled={!subject.astronomy}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <input
                    id="science"
                    name="science"
                    type="checkbox"
                    checked={subject.science}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    วิทยาศาสตร์
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="science"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="science"
                    value={price.science}
                    disabled={!subject.science}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="french"
                    name="french"
                    type="checkbox"
                    checked={subject.french}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาฝรั่งเศส
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="french"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="french"
                    value={price.french}
                    disabled={!subject.french}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="german"
                    name="german"
                    type="checkbox"
                    checked={subject.german}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาเยอรมัน
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="german"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="german"
                    value={price.german}
                    disabled={!subject.german}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="japanese"
                    name="japanese"
                    type="checkbox"
                    checked={subject.japanese}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาญี่ปุ่น
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="japanese"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="japanese"
                    value={price.japanese}
                    disabled={!subject.japanese}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="arabic"
                    name="arabic"
                    type="checkbox"
                    checked={subject.arabic}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาอาหรับ
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="arabic"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="arabic"
                    value={price.arabic}
                    disabled={!subject.arabic}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="korean"
                    name="korean"
                    type="checkbox"
                    checked={subject.korean}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาเกาหลี
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="korean"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="korean"
                    value={price.korean}
                    disabled={!subject.korean}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="russian"
                    name="russian"
                    type="checkbox"
                    checked={subject.russian}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษารัสเซีย
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="russian"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="russian"
                    value={price.russian}
                    disabled={!subject.russian}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="chinese"
                    name="chinese"
                    type="checkbox"
                    checked={subject.chinese}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    ภาษาจีน
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="chinese"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="chinese"
                    value={price.chinese}
                    disabled={!subject.chinese}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    id="programming"
                    name="programming"
                    type="checkbox"
                    checked={subject.programming}
                    onChange={handleChangeSubjectCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    เขียนโปรแกรม
                  </label>
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-40 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                    id="programming"
                    pattern="[0-9]*"
                    onChange={handleChangePrice}
                    name="programming"
                    value={price.programming}
                    disabled={!subject.programming}
                    required
                    autoComplete="none"
                    placeholder="ราคา/ชั่วโมง ex.250"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-4" // ระดับชั้นที่สอน
            >
              ระดับชั้นที่สอน *
            </label>
            <div //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
            >
              <div className="px-10 flex flex-row space-x-8">
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="kindergarten"
                      checked={classTeach.kindergarten}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required={
                        !classTeach.college &
                        !classTeach.graduated &
                        !classTeach.high &
                        !classTeach.kindergarten &
                        !classTeach.middle &
                        !classTeach.primary
                      }
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      อนุบาล
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      name="high"
                      checked={classTeach.high}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      มัธยมปลาย
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="primary"
                      checked={classTeach.primary}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      ประถม
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      name="college"
                      checked={classTeach.college}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      มหาลัย
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="middle"
                      checked={classTeach.middle}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      มัธยมต้น
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      name="graduated"
                      checked={classTeach.graduated}
                      onChange={handleChangeClassCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      วัยทำงาน
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <label
              className="block text-gray-700 text-m font-bold my-4" // ประเภทการสอน
            >
              ประเภทการสอน *
            </label>
            <div>
              <div className="px-10 flex flex-row space-x-10">
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="grade"
                      checked={type.grade}
                      onChange={handleChangeTypeCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required={
                        !type.enHigh &
                        !type.enPrimary &
                        !type.entrance &
                        !type.grade &
                        !type.knowledge
                      }
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
                      checked={type.enHigh}
                      onChange={handleChangeTypeCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      checked={type.knowledge}
                      onChange={handleChangeTypeCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block text-gray-700 text-m mx-4">
                      เพิ่มความรู้ทั่วไป
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="enPrimary"
                      checked={type.enPrimary}
                      onChange={handleChangeTypeCheckbox}
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
                      checked={type.entrance}
                      onChange={handleChangeTypeCheckbox}
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
              className="block text-gray-700 text-m font-bold mt-6 mb-4" // สถานที่สอน
            >
              สถานที่สอน *
            </label>
            <div>
              <div className="px-10 flex flex-row space-x-10">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="online"
                    checked={place.online}
                    onChange={handleChangePlaceCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required={!place.online & !place.onsite}
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
                    checked={place.onsite}
                    onChange={handleChangePlaceCheckbox}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-gray-700 text-m mx-4">
                    Onsite (ออนไซต์)
                  </label>
                </div>
              </div>
            </div>

            <label
              className="block text-gray-700 text-m font-bold mt-6 mb-4" // รายละเอียดเพิ่มเติม(คะแนนสอบต่างๆ ประสบการณ์)
            >
              รายละเอียดเพิ่มเติม (รายละเอียดวิชาที่สอน คะแนนสอบต่างๆ) *
            </label>

            <textarea
              className="ml-10 shadow appearance-none border rounded w-96 h-40  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline "
              id="detail"
              onChange={handleChange}
              name="detail"
              rows="5"
              placeholder="pat1 250/300 pat2 270/300"
              autoComplete="none"
              value={values.detail}
              required
            ></textarea>

            <label
              className="block text-gray-700 text-m font-bold mt-8 mb-4" // รายละเอียดเพิ่มเติม(คะแนนสอบต่างๆ ประสบการณ์)
            >
              ประสบการณ์ *
            </label>

            <textarea
              className="ml-10 shadow appearance-none border rounded w-96 h-40  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline "
              id="experience"
              onChange={handleChange}
              name="experience"
              rows="5"
              placeholder="มีประสบการณ์สอนระดับประถม-มัธยม 3 ปี"
              autoComplete="none"
              value={values.experience}
              required
            ></textarea>
          </div>
        </div>

        <label
          className="block text-gray-700 text-m font-bold mb-4 px-14 ml-20 " // สะดวกสอนวัน/เวลาไหนบ้าง
        >
          สะดวกสอนวัน/เวลาไหนบ้าง *
        </label>
        <div>
          <div className="flex flex-row space-x-36 px-24 ml-20">
            <div>
              <div className="flex items-center mb-2">
                <input
                  id="monday"
                  type="checkbox"
                  name="monday"
                  checked={checked.monday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required={
                    !checked.monday &
                    !checked.tuesday &
                    !checked.wednesday &
                    !checked.thursday &
                    !checked.friday &
                    !checked.saturday &
                    !checked.sunday
                  }
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันจันทร์
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="monday"
                  onChange={handleChangeDayText}
                  name="monday"
                  value={day.monday}
                  disabled={!checked.monday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="friday"
                  type="checkbox"
                  name="friday"
                  checked={checked.friday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันศุกร์
                </label>
              </div>

              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="friday"
                  onChange={handleChangeDayText}
                  name="friday"
                  value={day.friday}
                  disabled={!checked.friday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <input
                  id="tuesday"
                  type="checkbox"
                  name="tuesday"
                  checked={checked.tuesday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันอังคาร
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="tuesday"
                  onChange={handleChangeDayText}
                  name="tuesday"
                  value={day.tuesday}
                  disabled={!checked.tuesday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="saturday"
                  type="checkbox"
                  name="saturday"
                  checked={checked.saturday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันเสาร์
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="saturday"
                  onChange={handleChangeDayText}
                  name="saturday"
                  value={day.saturday}
                  disabled={!checked.saturday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <input
                  id="wednesday"
                  type="checkbox"
                  name="wednesday"
                  checked={checked.wednesday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันพุธ
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="wednesday"
                  onChange={handleChangeDayText}
                  name="wednesday"
                  value={day.wednesday}
                  disabled={!checked.wednesday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="sunday"
                  type="checkbox"
                  name="sunday"
                  checked={checked.sunday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันอาทิตย์
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="sunday"
                  onChange={handleChangeDayText}
                  name="sunday"
                  value={day.sunday}
                  disabled={!checked.sunday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <input
                  id="thursday"
                  type="checkbox"
                  name="thursday"
                  checked={checked.thursday}
                  onChange={handleChangeDayCheckbox}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="block text-gray-700 text-m mx-4">
                  วันพฤหัสบดี
                </label>
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"
                  id="thursday"
                  onChange={handleChangeDayText}
                  name="thursday"
                  value={day.thursday}
                  disabled={!checked.thursday}
                  required
                  autoComplete="none"
                  placeholder="18:00 - 20:00 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button //ปุ่ม submit
            className="mt-5 flex-center inline-block px-24 py-3 bg-primary-80 text-white-100 text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
            id="submit"
          >
            Confirm
          </button>

          {/* <button                                                         //ปุ่ม test ชั่วคราว
                                    className="mt-5 flex-center inline-block px-24 py-3 bg-primary-80 text-white-100 text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                                    id="submit" 
                                    onClick={handletest}
                                >
                                    test
                                </button> */}
        </div>
      </form>
    </div>
  );
}
export default PostTeach;
