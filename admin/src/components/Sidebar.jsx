import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { RiCalendarTodoLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";


const Sidebar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-[18%] h-screen border border-[#a9a9a9]  font-poppins">
      <div className=" pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink
          to="/add"
          className={`flex items-center gap-2 border border-r-0 font-medium border-[#a9a9a9] pl-4 pr-4 pt-2 pb-2 rounded-s-lg cursor-pointer ${
            activePath === "/add" ? "bg-primary text-white" : ""
          }`}
        >
          <FiPlusCircle className="text-xl" />
          <p className="md:block sm:block hidden">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={`flex items-center gap-2 border border-r-0 font-medium border-[#a9a9a9] pl-4 pr-4 pt-2 pb-2 rounded-s-lg cursor-pointer ${
            activePath === "/list" ? "bg-primary text-white" : ""
          }`}
        >
          <RiCalendarTodoLine className="text-xl" />
          <p className="md:block sm:block hidden">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={`flex items-center gap-2 border border-r-0 font-medium border-[#a9a9a9] pl-4 pr-4 pt-2 pb-2 rounded-s-lg cursor-pointer ${
            activePath === "/orders" ? "bg-primary text-white" : ""
          }`}
        >
          <IoBagCheckOutline className="text-xl" />
          <p className="md:block sm:block hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
