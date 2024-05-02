import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar, Add, Lists, Orders } from "./index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className=" border-b-2 border-zinc-600 w-full"></div>
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/list" element={<Lists />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
