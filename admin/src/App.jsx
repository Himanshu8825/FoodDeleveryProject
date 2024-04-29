import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar, Add, Lists, Orders } from "./index";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" border-b-2 border-zinc-600 w-full"></div>
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<Lists />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
