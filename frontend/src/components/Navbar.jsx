import React, { useState, useEffect, useContext } from "react";
import { LuSearch } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = ({ setshowLogin }) => {
  const navigate = useNavigate("");
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  if (!token) {
    // Render loading state or redirect to login page
    return null;
  }

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center md:pl-16 sm:pl-10 pl-6 md:pr-16 sm:pr-10 pr-8 pt-4 pb-4  font-poppins fixed top-0 w-full bg-white z-10">
      <h1 className="md:text-4xl text-2xl font-semibold text-primary hover:opacity-80 cursor-pointer">
        Foodie
      </h1>
      <ul className="md:flex sm:flex hidden items-center list-none no-underline gap-8 cursor-pointer text-secondary font-medium text-lg ">
        <li>
          <NavLink
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "border-b-2 border-secondary" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("explore-menu")}
            className={
              menu === "explore-menu" ? "border-b-2 border-secondary" : ""
            }
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#mobile-apps"
            onClick={() => setMenu("mobile-apps")}
            className={
              menu === "mobile-apps" ? "border-b-2 border-secondary" : ""
            }
          >
            Mobile-Apps
          </a>
        </li>
        <li>
          <a
            href="#contact-us"
            onClick={() => setMenu("contact-us")}
            className={
              menu === "contact-us" ? "border-b-2 border-secondary" : ""
            }
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex md:gap-6 gap-4 items-center">
        <LuSearch className="text-secondary text-2xl cursor-pointer " />
        <div className="relative">
          <Link to="/cart">
            <MdAddShoppingCart className="text-secondary text-2xl cursor-pointer  " />

            <div
              className={
                getTotalAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-primary rounded-xl -top-[0px] -right-[0px]"
              }
            ></div>
          </Link>
        </div>
        {!token ? (
          <button
            className="md:px-4 px-2 py-1 rounded-2xl border hover:bg-primary hover:text-white border-primary text-secondary font-medium hover:opacity-90 "
            onClick={() => setshowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="relative group">
            <AccountCircleIcon className="cursor-pointer hover:text-primary"  />
            <ul className="absolute hidden -right-10  z-10 bg-white border border-gray-200 py-2 rounded shadow-lg group-hover:block">
              <li className="flex items-center text-primary space-x-2 px-4 hover:bg-gray-100 cursor-pointer mt-2 mb-2 pb-2 ">
                <LocalMallIcon />
                <p>Orders</p>
              </li>
              <li
                onClick={logOut}
                className="flex text-primary items-center space-x-2 px-4 hover:bg-gray-100 cursor-pointer mb-2 pb-2"
              >
                <LogoutIcon className="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
