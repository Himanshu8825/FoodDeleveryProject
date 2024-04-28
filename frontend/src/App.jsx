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

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <div>
      {showLogin ? <LogInPopUp setshowLogin = {setshowLogin} /> : <></>}
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
