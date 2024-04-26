import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex justify-between items-center pl-16 pr-16 pt-6 pb-6 font-poppins">
        <h1 className="text-4xl font-semibold text-primary hover:opacity-80 cursor-pointer">
          Foodie
        </h1>
        <ul className="flex items-center list-none no-underline gap-4 cursor-pointer text-secondary font-medium text-lg ">
          <li>
            <Link
              to="/"
              className={
                activePath === "/" ? "border-b-2 border-secondary" : ""
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={
                activePath === "/menu" ? "border-b-2 border-secondary" : ""
              }
            >
              Menu
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/mobile"
              className={
                activePath === "/mobile" ? "border-b-2 border-secondary" : ""
              }
            >
              Mobile-App
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                activePath === "/contact" ? "border-b-2 border-secondary" : ""
              }
            >
              Contact-Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-6 items-center ">
          <LuSearch className="text-secondary text-2xl cursor-pointer " />
          <div className="relative">
            <MdAddShoppingCart className="text-secondary text-2xl cursor-pointer  " />
            <div className="absolute min-w-[10px] min-h-[10px] bg-primary rounded-xl -top-[0px] -right-[0px]"></div>
          </div>
          <button className="px-4 py-1 rounded-2xl border border-primary text-secondary font-medium hover:opacity-90 ">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
