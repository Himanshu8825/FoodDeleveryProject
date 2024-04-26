import React from "react";
import { Route, Routes } from "react-router";
import {
  Navbar,
  Home,
  Menu,
  Mobile,
  ContactUs,
  Cart,
  PlaceOrder,
} from "./index";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
