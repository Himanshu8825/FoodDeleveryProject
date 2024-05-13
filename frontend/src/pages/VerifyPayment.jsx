import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyPayment = () => {
  const url = "https://fooddeleveryproject.onrender.com/order/verify";
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const confirmPayment = async () => {
    try {
      const res = await axios.post(url, { success, orderId });
      if (res.status === 200) {
        navigate("/myorders");
      } else {
        console.log("Error while confirming payment");
        navigate("/");
      }
    } catch (error) {
      console.error("Error while confirming payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    confirmPayment();
  }, []);

  return (
    <div className="md:pl-16 sm:pl-10 pl-6 md:pr-16 sm:pr-10 pr-8 pt-[5rem] pb-4 font-poppins flex justify-center items-center w-full h-screen">
      <div className="  loader"></div>
    </div>
  );
};

export default VerifyPayment;
