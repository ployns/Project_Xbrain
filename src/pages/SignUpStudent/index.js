import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/user";

export default function SignUpStudent() {
  //เก็บค่า form sign up
  const [form, setForm] = useState({
    email: "",
    password: "",
    cfpassword: "",
    role: "student",
  });

  const navigate = useNavigate();

  // change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.cfpassword) {
      alert("Password not match");
    } else {
      signUp(form)
        .then((res) => {
          console.log(res);
          alert("Register Success!");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      // }
    }
  };

  return (
    <div className="bg-purple-200 w-full h-full">
      <div className="flex justify-center items-center px-80 py-12 h-screen font-body">
        <div className=" container justify-center items-center mx-40 bg-white-100 rounded-lg shadow-lg border border-gray-50">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className=" w-9/12 p-10">
              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit}>
                <div className="text-center font-bold text-6xl text-primary-80 py-5">
                  Register
                </div>

                <div className="justify-center flex flex-row ">
                  <p className="text-lg text-gray-400 pr-2">Role by </p>
                  <p className="text-lg font-semibold text-white-100 bg-primary-100 pl-1 pr-1 rounded-lg">
                    Student
                  </p>
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <label
                    className="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2"
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
                    onChange={handleChange}
                    required
                    //{...register("email", {required : 'Email is required'})}
                  />
                  {/* {errors.email && <span style={{color : "red"}}>
                            {errors.email.message}
                            </span>} */}
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <label
                    className="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2"
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
                    onChange={handleChange}
                    required
                    // {...register("password", {required : 'Password is required',
                    //     minLength:{
                    //         value: 8,
                    //         message: 'Password must be at least 8 characters.'
                    //     }
                    //     })}
                  />
                  {/* {errors.password && <span style={{color : "red"}}>
                            {errors.password.message}
                            </span>} */}
                </div>

                {/* <!-- Confirm Password input --> */}
                <div className="mb-6">
                  <label
                    className="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2"
                    for="inline-full-name"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cfpassword"
                    //style={{borderColor: errors.cfpassword ? "red" :"", }}
                    className="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="******************"
                    onChange={handleChange}
                    required
                    // {...register("cfpassword", {required : 'Confirm Password is required',
                    //     minLength:{
                    //         value: 8,
                    //         message: 'ConFirm Password must be at least 8 characters.'
                    //     },
                    //     validate: (value) => value === watch('password') || "Password do not match.",
                    //     })}
                  />
                  {/* {errors.cfpassword && <span style={{color : "red"}}>
                            {errors.cfpassword.message}
                            </span>} */}
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary-80 text-white-100 font-body font-semibold text-lg leading-snug rounded-2xl shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
                <div className="py-2 grid justify-items-center">
                  <p className="font-body text-gray-100">
                    Have an account?
                    <a
                      href="/"
                      className="font-semibold text-primary-80 hover:text-primary-100 hover:underline duration-200 transition ease-in-out pl-2"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
