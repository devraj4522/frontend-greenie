import "./Singup.css";
import LoginMain from "../../assets/images/login.png";
import { LoginIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, isAuthenticated, authenticate } from "../../auth/helper";
import Base from "../Base";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [values, setValues] = useState({
    name: "devraj",
    email: "email.4522@gmail.com",
    phone: "9122553300",
    password: "1234",
    gender: "MALE",
    error: "",
    success: false,
  });

  const { name, email, phone, password, gender, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const performRedirect = () => {
    // console.log(isAuthenticated())
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    console.log({ name, email, password, phone, gender })
    const response = await signup({ name, email, password, phone, gender })

      .then((data) => {
        // console.log("Data: ", data)
        if (data.custom_status_code == 0) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            gender: "",
            phone: "",
            error: "",
            success: true,
          });
          authenticate(data=data.data_dict, () => toast.success("Signup Successful."))
        } else {
          setValues({
            ...values,
            success: true,
            error: true,
            success: false,
          });
          toast.error("Check All Fields Again!");
        }
      })
      .catch((e) => toast.error("Check All Fields Again!"));
  };


  return (
    <Base>
      {performRedirect()}
      {success &&  performRedirect()}
      <div className="login-main flex sm:items-center items-start min-h-screen px-3 py-6 sm:px-12 lg:justify-center">
        <div className="flex mx-auto flex-1 flex-col-reverse overflow-hidden rounded-md shadow-lg md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-3xl font-bold text-lime-800">
              Create an Account
            </h3>

            <form
              action="#"
              className="flex flex-col text-gray-600 space-y-5 py-12"
            >
              <div className="flex flex-col space-y-1">
                <label
                  for="name"
                  className="text-sm font-semibold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  value={name}
                  onChange={handleChange("name")}
                  autofocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-600"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  autofocus
                  value={email}
                  onChange={handleChange("email")}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleChange("password")}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="phone"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Phone
                  </label>
                </div>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={handleChange("phone")}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>


              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="gender"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Gender
                  </label>
                </div>

                <select value={gender} onChange={handleChange("gender")}
                  className="px-4 py-2 bg-gray-100 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"

                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-full shadow hover:bg-pink-600 focus:outline-none focus:ring-pink-200 focus:ring-4"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex flex-col space-y-5 pt-6">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-600">
                    Or Sign Up With
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex justify-around">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-pink-300 rounded-full group bg-pink-100 hover:bg-pink-600 focus:outline-none"
                  >
                    <span>
                      <i
                        className="fa fa-google text-orange-700 group-hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-white">
                      Google
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-full group hover:bg-blue-500 focus:outline-none"
                  >
                    <span>
                      <i
                        className="fa fa-facebook text-blue-700 group-hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="p-4 py-6 sm:flex-1 text-white bg-lime-50 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider">
              <img
                className="pb-2 w-32 h-60 lg:46 lg:h-60 mx-auto"
                src={LoginMain}
                alt=""
                srcset=""
              />
              <a
                href="#"
                className="hidden sm:block font-logofont text-center text-lime-700"
              >
                Greenie <span className="font-logofont text-orange-500">.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
