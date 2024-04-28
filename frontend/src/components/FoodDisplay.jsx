import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FoodItem } from "../index";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="md:pl-16 sm:pl-10 pl-8 md:pr-16 sm:pr-10 pr-8 pt-2 font-poppins">
      <h1 className="text-[2vw] font-semibold">Top dishes near you</h1>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-8 md:gap-8 sm:gap-6 gap-4 ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
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
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
