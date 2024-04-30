import React, { useState } from "react";
import { Route, Routes } from "react-router";
import {
  Navbar,
  Home,
  Cart,
  PlaceOrder,
  Footer,
  LogInPopUp,
} from "./index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <div>
      {showLogin ? <LogInPopUp setshowLogin={setshowLogin} /> : <></>}
      <ToastContainer />
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
