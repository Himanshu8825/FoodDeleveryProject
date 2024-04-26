import React from "react";

const Header = () => {
  return (
    <div className="pl-16 pr-16 pt-8 pb-6 font-poppins ">
      <div className="header h-[38vw] w-full  relative mx-auto ">
        <div className="absolute flex flex-col items-start gap-2 w-1/2 bottom-[10%] left-[6%]">
          <h2 className=" font-medium text-white text-[4.5vw] ">
            Order your favorite food here
          </h2>
          <p className="text-white text-[1.2vw]">
            Choose from a diverse menu teaturing a delectable array of dishes
            crafted with the finest. ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="px-6 py-3 bg-white text-[#747474] font-medium  rounded-xl text-lg">View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
