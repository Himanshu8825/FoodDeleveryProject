import React, { useEffect, useState } from "react";
import { url } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const Lists = () => {
  const URL = url;
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(`${URL}/food/lists`);
      if (res.status === 200) {
        setList(res.data.data);
        // toast.success("List updated successfully");
        // console.log(res.data);
      } else {
        toast.error("Error while fetching");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error while fetching");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const res = await axios.delete(`${URL}/food/remove/${foodId}`);
      if (res.status === 200) {
        toast.success("Food removed successfully");
        await fetchList();
      } else {
        toast.error("Error while removing");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error while removing");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full md:pl-16 pl-6 md:pr-16 pr-6 pt-6 font-poppins text-black ">
      <h1 className="text-3xl pb-6  text-primary text-center">All Food List</h1>
      <div className="">
        <div className="grid md:grid-cols-5 sm:grid-cols-5 grid-cols-3 pt-[12px] pb-[12px] md:pl-[15px] pl-2 md:pr-[15px] pr-2 items-center md:gap-[10px] border border-[#cacaca]   font-medium text-primary text-xs">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid md:grid-cols-5 sm:grid-cols-5 grid-cols-3 pt-[12px] pb-[12px] md:pl-[15px] pl-2  md:pr-[15px] pr-2 items-center md:gap-[15px] border border-[#cacaca] text-[13px] "
            >
              <img
                src={item.image}
                className="w-[50px] rounded-lg md:mb-0 mb-2"
              />
              <p>{item.name}</p>
              <p className="ml-4">{item.category}</p>
              <p className="ml-2">&#8377;{item.price}</p>
              <p>
                <MdDelete
                  onClick={() => removeFood(item._id)}
                  className=" text-primary  text-xl cursor-pointer"
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
