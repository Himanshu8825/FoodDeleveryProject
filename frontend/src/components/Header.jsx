import React from "react";

const Header = () => {
  return (
    <div className="md:pl-16 pl-6 md:pr-16 pr-6 md:pt-8 mt-[5rem]  md:pb-6 font-poppins ">
      <div
        className="header h-[38vw] w-full  relative mx-auto rounded-2xl "
        id="home"
      >
        <div className="absolute flex flex-col items-start sm:gap-4 gap-2 w-1/2 sm:bottom-[10%] bottom-[20%]  left-[6%] ">
          <h2 className=" font-medium text-white md:text-[4.5vw] text-[4vw] ">
            Order your <span className="">favorite</span> food here
          </h2>
          <p className="text-white text-[1.2vw] hidden md:flex">
            Choose from a diverse menu teaturing a delectable array of dishes
            crafted with the finest. ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="md:px-6 sm:px-6 px-2 md:py-3 sm:py-2 py-1 bg-white text-[#747474] font-medium  rounded-xl md:text-lg text-xs">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
