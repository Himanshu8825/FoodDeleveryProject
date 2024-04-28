import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeToCart } = useContext(StoreContext);

  return (
    <div className="w-full m-auto shadow-[#00000015] shadow-lg rounded-xl font-poppins ">
      <div className="relative">
        <img src={image} alt="" className="w-full rounded-t-xl " />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            className="w-[40px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] cursor-pointer rounded-full bg-white flex items-center gap-4 p-1.5">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeToCart(id)}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
              className="w-[30px] cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex md:flex-row sm:flex-row flex-col justify-between items-center mb-2">
          <p className="md:text-[20px] text-[13px] font-medium cursor-pointer">{name}</p>
          <img
            src={assets.rating_starts}
            alt=""
            className=" cursor-pointer mdw-[70px] w-[60px]"
          />
        </div>
        <p className="md:text-[14px] text-xs text-[#676767] md:text-start text-center">{description}</p>
        <p className="text-primary ss:text-[22px] text-[15px] font-medium m-2 md:text-start text-center">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
