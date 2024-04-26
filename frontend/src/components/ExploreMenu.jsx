import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleClick = (menuItem) => {
    // Function to handle click
    setCategory(category === menuItem.menu_name ? "All" : menuItem.menu_name);
  };
  return (
    <div className="flex flex-col gap-6 font-poppins pl-16 pr-16 pt-6 pb-6">
      <h1 className=" font-medium text-[#262626] text-4xl">Explore Menu</h1>
      <p className=" text-[rgb(58,58,58)]">
        Choose from a diverse menu teaturing a delectable array of dishes
        crafted with the finest. ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex items-center justify-evenly gap-8 m-[20px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className="flex flex-col gap-2 items-center"
            >
              <img
                src={item.menu_image}
                alt=""
                className={`w-[7.5vw] cursor-pointer rounded-[50%] transition-[0.2s] ${
                  category === item.menu_name ? "border-4 border-primary p-1" : "" // Add class conditionally
                }`}
              />
              <p className="text-[#747474] text-[1.4vw] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-[#e2e2e2] w-full m-[10px]"></div>
    </div>
  );
};

export default ExploreMenu;
