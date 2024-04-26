import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FoodItem } from "../index";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="pl-16 pr-16 pt-2 font-poppins">
      <h1 className=" text-[2vw] font-semibold">Top dishes near you</h1>
      <div className=" grid grid-cols-4 mt-8 gap-8 ">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
