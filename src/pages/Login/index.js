import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";

import tutorpic from "../../assets/pics/login1.jpg";

export default function Login() {
  //เก็บค่า form login
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //role
  const roleBaseRedirect = (role) => {
    console.log("roleBaseRedirect", role);
    if (role == "student") {
      navigate("/homestudent");
    } else {
      navigate("/hometutor");
    }
  };

  // change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(form)
      .then((res) => {
        if (res.data.role == "student") {
          localStorage.setItem("id", res.data.student_id);
        } else {
          localStorage.setItem("id", res.data.teacher_id);
        }
        localStorage.setItem("role", res.data.role); // ***เก็บ token โดยใช้ข้อมูลจาก res
        localStorage.setItem("email", res.data.email); // ***เก็บ token โดยใช้ข้อมูลจาก res

        // แจ้งเตือน alert
        roleBaseRedirect(res.data.role); // เช็คถ้าเป็น role ไหนให้ไปหน้านั้น โดยใช้ข้อมูลจาก res
      })
      .catch((err) => {
        console.log("Login:", err.response.data);

        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกข้อมูลใหม่อีกครั้ง");
      });
  };

  // //submit
  // const handleSubmit = (e) => {
  //     e.preventDefault()

  //     //check blank required
  //     if(form.email !== '' && form.password !== ''){
  //         const user={form}
  //         console.log(user)
  //     } else if (form.email === '' && form.password !== ''){
  //         alert('Email is required.');
  //     } else if (form.email !== '' && form.password === ''){
  //         alert('Password is required.');
  //     } else {
  //         alert('Email and a password are required.');
  //     }

  // }

  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  //     if(register.current.value)
  //     {
  //         localStorage.setItem("register", register.current.value)
  //     }
  //     // console.log(data);
  // }

  // {alert(JSON.stringify(data))}

  return (
    <div className="flex flex-row">
      <img
        className="h-screen object-contain opacity-1"
        src={tutorpic}
        alt=""
      ></img>

      <div className="container px-6 py-12 h-screen bg-white-100 w-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className=" w-9/12 p-10">
            {/* <!-- Form --> */}
            {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> //check  */}

            <form onSubmit={handleSubmit}>
              <div className="font-body text-center font-bold text-6xl text-primary-80 py-5">
                Login
              </div>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <label
                  htmlFor="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2"
                  for="inline-full-name"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  //style={{borderColor: errors.email ? "red" :"", }}
                  className="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="you@gmail.com"
                  required
                  onChange={handleChange}
                  //{...register("email", {required : 'Email is required'})}
                />
                {/* {errors.email && <span style={{color : "red"}}>
                            {errors.email.message}
                            </span>} */}
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <label
                  htmlFor="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2"
                  for="inline-full-name"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  //style={{borderColor: errors.password ? "red" :"", }}
                  className="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="******************"
                  required
                  onChange={handleChange}
                  // {...register("password", {required : 'Password is required',
                  //     minLength:{
                  //         value: 8,
                  //         message: 'Password must be at least 8 characters.'
                  //     }
                  //     })}
                />
                {/* {errors.password && (
                            <span style={{color : "red"}}>
                                {errors.password.message}
                            </span>
                        )} */}
              </div>

              <div className="py-2 grid justify-items-end">
                <a
                  href="/forgotpass"
                  className="font-body text-gray-100 hover:text-primary-100 hover:underline duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-primary-80 text-white-100 font-body font-semibold text-lg leading-snug rounded-2xl shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
              <div className="py-2 grid justify-items-center">
                <p className="font-body text-gray-100">
                  Don’t have an account?
                  <a
                    href="/chooserole"
                    className="font-semibold text-primary-80 hover:text-primary-100 hover:underline duration-200 transition ease-in-out pl-2"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
