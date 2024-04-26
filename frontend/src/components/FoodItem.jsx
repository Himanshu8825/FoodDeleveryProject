import React, { useState } from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="w-full m-auto shadow-[#00000015] shadow-lg rounded-xl font-poppins ">
      <div className="relative">
        <img src={image} alt="" class="w-full rounded-t-xl " />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            onClick={() => setItemCount((prev) => prev + 1)}
            className="w-[40px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] cursor-pointer rounded-full bg-white flex items-center gap-4 p-1.5">
            <img
              src={assets.remove_icon_red}
              onClick={() => setItemCount((prev) => prev - 1)}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => setItemCount((prev) => prev + 1)}
              alt=""
              className="w-[30px] cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[20px] font-medium cursor-pointer">{name}</p>
          <img
            src={assets.rating_starts}
            alt=""
            className=" cursor-pointer w-[70px]"
          />
        </div>
        <p className="text-[14px] text-[#676767] ">{description}</p>
        <p className="text-primary text-[22px] font-medium m-2">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
