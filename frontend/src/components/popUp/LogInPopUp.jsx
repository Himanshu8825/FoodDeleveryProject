import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { assets } from "../../assets/assets";

const LogInPopUp = ({ setshowLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitted, setSubmitted] = useState(false);
  const [currState, setCurrState] = useState("sign-up");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="absolute md:left-[35%] sm:left[40%] left-[8%]   top-[30%]  z-50 font-poppins ">
      <form
        onSubmit={handleSubmit}
        action=""
        className="font-poppins text-black  bg-white rounded-xl p-8"
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            {currState === "sign-in" ? "Sign In" : "Sign Up"}
          </h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer w-[15px] h-[15px]"
          />
        </div>
        {currState === "sign-in" && (
          <div>
            <label
              htmlFor="email"
              className="flex items-center md:w-[350px] sm:w-[350px] w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-6"
            >
              <PersonIcon className="text-gray-400 ml-2" fontSize="small" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-transparent outline-none ml-2"
                onChange={handleChange}
              />
            </label>

            <label
              htmlFor="password"
              className="flex items-center md:w-[350px] sm:w-[350px] w-[250px]  h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
            >
              <PasswordIcon className="text-gray-400 ml-2" fontSize="small" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="bg-transparent outline-none ml-2"
                onChange={handleChange}
              />
            </label>
          </div>
        )}

        {currState === "sign-up" && (
          <div>
            <label
              htmlFor="name"
              className="flex items-center md:w-[350px] sm:w-[350px] w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-6"
            >
              <PersonIcon className="text-gray-400 ml-2" fontSize="small" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="bg-transparent outline-none ml-2"
                onChange={handleChange}
              />
            </label>

            <label
              htmlFor="email"
              className="flex items-center md:w-[350px] sm:w-[350px] w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
            >
              <EmailIcon className="text-gray-400 ml-2" fontSize="small" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent outline-none ml-2"
                onChange={handleChange}
              />
            </label>

            <label
              htmlFor="password"
              className="flex items-center md:w-[350px] sm:w-[350px] w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
            >
              <PasswordIcon className="text-gray-400 ml-2" fontSize="small" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="bg-transparent outline-none ml-2"
                onChange={handleChange}
              />
            </label>
          </div>
        )}

        <button
          className="before:ease relative flex mt-6 items-center justify-center w-full h-[40px] overflow-hidden rounded-xl bg-[#9c28b1] font-poppins text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80"
          disabled={isSubmitted}
        >
          {isSubmitted
            ? "Please Wait..."
            : currState === "sign-in"
            ? "Login"
            : "Sign Up"}
        </button>

        {currState === "sign-in" && (
          <Link
            to="/forgotpassword"
            className="text-[#9c28b1] font-medium flex justify-center items-center mt-4"
          >
            Forgot password?
          </Link>
        )}

        <div className="flex justify-center items-center  text-sm font-medium mt-2 ">
          <p>
            {currState === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            to={currState === "sign-in" ? "" : ""}
            className="text-[#9c28b1] ml-2"
            onClick={() =>
              setCurrState(currState === "sign-in" ? "sign-up" : "sign-in")
            }
          >
            {currState === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogInPopUp;
