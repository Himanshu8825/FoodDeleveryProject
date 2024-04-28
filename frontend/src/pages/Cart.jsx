import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeToCart, getTotalAmount } =
    useContext(StoreContext);
  return (
    <div className="md:pl-16 sm:pl-10 pl-6 md:pr-16 sm:pr-10 pr-8 pt-[5rem] pb-4 font-poppins">
      <div>
        <div className="grid grid-cols-6 items-center text-gray-500 text-[1vw]">
          <p className="text-center">Items</p>
          <p className="text-center">Title</p>
          <p className="text-center">Price </p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Total</p>
          <p className="text-center">Remove</p>
        </div>
        <br />
        <div className="border-b-2 border-[#e2e2e2] w-full "></div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className="grid grid-cols-6 items-center  text-black text-[1.1vw] pt-4 pb-4 font-medium "
                >
                  <img src={item.image} alt="" className="w-[50px] mx-auto" />
                  <p className="text-center">{item.name}</p>
                  <p className="text-center">&#8377;{item.price}</p>
                  <p className="text-center ">{cartItems[item._id]}</p>
                  <p className="text-center">
                    &#8377;{item.price * cartItems[item._id]}
                  </p>
                  <MdDelete
                    onClick={() => removeToCart(item._id)}
                    className="mx-auto text-primary  text-xl cursor-pointer"
                  />
                </div>
                <div className="w-full">
                  <div className="border-b-2 border-zinc-500 w-11/12 mx-auto  "></div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="w-full mt-8 flex md:flex-row flex-col-reverse    md:gap-[8rem] gap-6 md:p-4">
        <div className=" flex-1 flex flex-col  gap-6">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555] pl-2 pr-2">
              <p>Subtotals</p>
              <p>&#8377;{getTotalAmount()}</p>
            </div>
            <div className="border-b border-zinc-300 mt-2 mb-2 w-full "></div>
            <div className="flex justify-between text-[#555] pl-2 pr-2">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalAmount() === 0 ? 0 : 99}</p>
            </div>
            <div className="border-b-2 border-zinc-500 w-full mb-2 mt-2 "></div>
            <div className="flex justify-between text-black font-medium text-lg pl-2 pr-2 ">
              <p className=" ">Total</p>
              <p>
                &#8377;{getTotalAmount() === 0 ? 0 : getTotalAmount() + 150}
              </p>
            </div>
          </div>
          <Link to="/order">
            <button className="before:ease relative flex md:mx-0 mx-auto  items-center justify-center w-[250px] h-[45px] overflow-hidden rounded-xl bg-[#9c28b1] font-poppins text-white font-medium shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
        <div className="flex-1 md:p-4">
          <div>
            <p className="text-[#555] font-semibold pb-2">
              If you have a promo code , Enter it here
            </p>
            <div className="mt-2 flex  items-center bg-[#eaeaea] rounded-lg">
              <input
                type="text"
                placeholder="Promo Code"
                className=" w-full bg-transparent border-none outline-none pl-4"
              />
              <button className="before:ease relative flex  items-center justify-center w-[150px] md:h-[50px]  h-[40px] overflow-hidden rounded-lg bg-[#9c28b1] font-poppins text-white font-medium shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
