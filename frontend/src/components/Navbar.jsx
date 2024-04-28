import React, { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="flex justify-between items-center md:pl-16 sm:pl-10 pl-6 md:pr-16 sm:pr-10 pr-8 pt-4 pb-6  font-poppins fixed top-0 w-full bg-white z-10">
      <h1 className="md:text-4xl text-2xl font-semibold text-primary hover:opacity-80 cursor-pointer">
        Foodie
      </h1>
      <ul className="md:flex sm:flex hidden items-center list-none no-underline gap-4 cursor-pointer text-secondary font-medium text-lg ">
        <li>
          <NavLink
            exact
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
          <MdAddShoppingCart className="text-secondary text-2xl cursor-pointer  " />
          <div className="absolute min-w-[10px] min-h-[10px] bg-primary rounded-xl -top-[0px] -right-[0px]"></div>
        </div>
        <button className="md:px-4 px-2 py-1 rounded-2xl border border-primary text-secondary font-medium hover:opacity-90 ">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
