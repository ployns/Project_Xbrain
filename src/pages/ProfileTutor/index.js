import React, { useState, useEffect } from "react";
import { getTutor, updateTutor } from "../../api/user";
import Profile from "../../assets/pics/Profile.png";
import MyFileBase64 from "../../components/file-base64";

function ProfileTutor() {
  const it = document.createElement("it");

  const [values, setValues] = useState({
    //

    name: "", //ชื่อ-นามสกุล
    nickname: "", //ชื่อเล่น
    sex: "", //เพศ
    school: "", //ชื่อรร./มหาลัย
    status: "", //สถานะทางการศึกษา
    email: "", //อีเมล
    phone: "", //เบอร์ติดต่อ
    intro: "", //รายละเอียดเพิ่มเติม
    line: "", //id line

    id: "",
  });

  // const [status, setStatus] = useState({
  //     highSchool: false,
  //     university: false,
  //     graduated: false
  // })
  let storeId = localStorage.getItem("id");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getTutor(storeId)
      .then((res) => {
        setValues(res.data, values);
        console.log(res.data);
      })
      .catch((err) => {
        //err
        console.log("Error loadData", err.response.data);
      });
  };

  const handleChange = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อกรอก
    setValues({ ...values, [e.target.name]: e.target.value, id: storeId });
  };

  const handleSubmit = (e) => {
    console.log(values);
    alert("Saved");
    e.preventDefault();
    updateTutor(values).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };

  const handletest = (e) => {
    console.log(values.status); //ฟังชั่นจากการกด test
  };

  return (
    // code uxui

    <div className="font-body my-20 mx-24 text-black ">
      <div className=" font-bold text-6xl ">Profile</div>
      <form className="mx-20 " onSubmit={handleSubmit}>
        <img
          className="absolute h-56 w-56 top-24 right-24"
          img
          src={Profile}
          alt="profile"
          // รูปภาพ
        />
        <div className=" flex absolute top-80 right-20 w-64">
          <MyFileBase64
            name={it}
            mutiple={false}
            onDone={({ base64 }) => setValues({ ...values, img: base64 })}
          />
        </div>

        <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-2" // ชื่อ-นามสกุล
            >
              ชื่อ-นามสกุล *
            </label>
            <input
              className="shadow appearance-none border rounded w-96 h-12 py-2 px-3  text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="name"
              type="name"
              onChange={handleChange}
              name="name"
              value={values.name}
              required
              autoComplete="none"
            />
          </div>
          <div className="flex flex-row ml-auto space-x-4">
            <div>
              <label
                className="block text-gray-700 text-m font-bold mb-2" // ชื่อเล่น
              >
                ชื่อเล่น *
              </label>
              <input
                className="shadow appearance-none border rounded w-40 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
                id="nickname"
                onChange={handleChange}
                name="nickname"
                value={values.nickname}
                required
                autoComplete="none"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-m font-bold mb-2"
                // เพศ
              >
                เพศ *
              </label>
              <select
                className=" shadow appearance-none border rounded w-36 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
                name="sex"
                onChange={handleChange}
                id="sex"
                required
                autoComplete="none"
                value={values.sex}
                aria-label="Default select example"
              >
                <option value=""></option>
                <option value="female">หญิง</option>
                <option value="male">ชาย</option>
                <option value="other">อื่นๆ</option>
                <option value="notSpecified">ไม่ระบุ</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
          <fieldset>
            <label
              className="block text-gray-700 text-m font-bold mb-6" // สถานะทางการศึกษา
            >
              สถานะทางการศึกษา *
            </label>
            <div className="mt-2 px-2">
              <label
                className="inline-flex items-center" //highSchool university graduated ยังไม่แน่ใจเรื่องเก็บค่าของ radio
                // แต่รู้ว่า name จะต้องชื่อเดียวกันหมด
              >
                <input
                  type="radio"
                  className="form-radio"
                  name="status"
                  checked={values.status === "highSchool"}
                  onChange={handleChange}
                  value="highSchool"
                  required={(values.status === null) | (values.status === "")}
                ></input>
                <span className="ml-2">มัธยมศึกษา</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="status"
                  checked={values.status === "university"}
                  onChange={handleChange}
                  value="university"
                ></input>
                <span className="ml-2">มหาวิทยาลัย</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="status"
                  checked={values.status === "graduated"}
                  onChange={handleChange}
                  value="graduated"
                ></input>
                <span className="ml-2">สำเร็จการศึกษา</span>
              </label>
            </div>
          </fieldset>
          <div className="">
            <label
              className="block text-gray-700 text-m font-bold mb-2" // โรงเรียน/มหาลัย
            >
              โรงเรียน/มหาลัย *
            </label>
            <input
              className="shadow appearance-none border rounded w-80 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="school"
              onChange={handleChange}
              name="school"
              value={values.school}
              required
              autoComplete="none"
            />
          </div>
        </div>

        <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-2" // E-mail
            >
              E-mail *
            </label>
            <input
              className="shadow appearance-none border rounded w-96 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="email"
              type="email"
              onChange={handleChange}
              name="email"
              value={values.email}
              required
              autoComplete="none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-2" // เบอร์ติดต่อ
            >
              เบอร์ติดต่อ *
            </label>
            <input
              className="shadow appearance-none border rounded w-96 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="phone"
              type="phone"
              pattern="[0-9]*"
              onChange={handleChange}
              name="phone"
              value={values.phone}
              required
              autoComplete="none"
            />
          </div>
        </div>

        <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-2" // ที่อยู่ปัจจุบัน (หรือสถานที่ที่สะดวกเรียน)
            >
              รายละเอียดเพิ่มเติม (แนะนำตัว) *
            </label>
            <input
              className="shadow appearance-none border rounded w-96 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="intro"
              onChange={handleChange}
              name="intro"
              value={values.intro}
              required
              autoComplete="none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-m font-bold mb-2" // ID line
            >
              ID line *
            </label>
            <input
              className="shadow appearance-none border rounded w-96 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"
              id="line"
              onChange={handleChange}
              name="line"
              value={values.line}
              required
              autoComplete="none"
            />
          </div>
        </div>
        <div className="text-center">
          <button //ปุ่ม submit
            className=" flex-center inline-block px-24 py-3 bg-primary-80 text-white-100 text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
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
export default ProfileTutor;
