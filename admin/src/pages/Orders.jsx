import React from "react";
import { assets, url } from "../assets/assets";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Orders = () => {
  const URL = url;
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const res = await axios.get(`${URL}/order/list`);
      if (res.status === 200) {
        setOrders(res.data.data);
        console.log(res.data.data);
      } else {
        toast.error("Error while fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error while fetching orders");
    }
  };

  const statusHandler = async (e, orderId) => {
    const res = await axios.post(`${URL}/order/status`, {
      orderId,
      status: e.target.value,
    });
    if(res.status === 200){
      toast.success("Status updated successfully");
     await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-full md:pl-16 pl-6 md:pr-16 pr-6 pt-6 font-poppins  ">
      <h1 className="md:text-2xl  text-xl font-semibold  mt-4 mb-4 ">
        Orders Page
      </h1>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid example   items-start gap-[30px] border border-primary p-[20px] rounded-lg my-[20px] mx-0 text-[14px] text-[#505050]"
          >
            <LocalShippingIcon className="text-primary" fontSize="large" />
            <div>
              <p className=" font-medium">
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x {item.quantity}
                    {index === order.items.length - 1 ? "" : ", "}
                  </span>
                ))}
              </p>
              <p className="font-medium uppercase text-zinc-800 mt-[30px] mb-[5px] text-[15px]">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="mb-[10px]">
                <p>{order.address.streetAddress + " , "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipCode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>&#8377;{order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className=" rounded-lg text-zinc-800  border border-primary w-full px-2 py-2 outline-none  "
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
