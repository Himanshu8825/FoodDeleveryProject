import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="w-full pl-16 pr-16 pb-4 pt-8 m-auto text-[3vw]  font-poppins font-medium"
      id="mobile-apps"
    >
      <p className="text-center">
        For Batter Experience Download <br /> Foodie App
      </p>
      <div className="flex justify-center items-center md:gap-8 gap-4 mt-4">
        <img
          src={assets.play_store}
          alt=""
          className="md:w-[180px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
        />
        <img
          src={assets.app_store}
          alt=""
          className="md:w-[180px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AppDownload;
