import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="md:pl-16 sm:pl-10 pl-4 md:pr-16 sm:pr-10 pr-4 pt-4 pb-4  w-full flex justify-between font-poppins  items-center">
      <h1 className="md:text-3xl text-2xl font-semibold text-primary hover:opacity-80 cursor-pointer">
        Foodie
        <br />
        <span className="text-base text-black">Admin Panel.</span>
      </h1>

      <img src={assets.profile_image} alt="" className="w-10 h-10" />
    </div>
  );
};

export default Navbar;
