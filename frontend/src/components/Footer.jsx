import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="md:pl-16 sm:pl-10 pl-4 md:pr-16 sm:pr-10 pr-4 pt-8 mt-12 pb-6 w-full text-[#d9d9d9] bg-[#323232] font-poppins flex flex-col gap-5"
      id="contact-us"
    >
      <div className="w-full grid md:grid-cols-2fr-1fr-1fr sm:grid-cols-3 md:gap-[80px] gap-8 md:p-4">
        <div className="flex flex-col items-start gap-5 ">
          <h1 className="text-4xl font-semibold text-primary hover:opacity-80 cursor-pointer ">
            Foodie
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            aspernatur eum quasi ab ut hic numquam accusantium minima ducimus
            suscipit nam error, omnis laudantium explicabo. In dolore sed vero?
            Dolorum repellat delectus mollitia. Nostrum aut a repellat odit
          </p>
          <div className="flex gap-4">
            <img
              src={assets.facebook_icon}
              alt=""
              className="w-[40px]  cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="w-[40px]  cursor-pointer"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="w-[40px]  cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold">COMPANY</h2>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold">GET IN TUCH</h2>
          <ul className="flex flex-col gap-2">
            <li>+91 8825151049</li>
            <li className=" cursor-pointer text-xs">
              <a href="mailto:kumarsurajverma6001@gmail.com">
                kumarsurajverma6001@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-400 "></div>
      <p className="text-center">
        Copyright © 2024 Foodie.com. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
