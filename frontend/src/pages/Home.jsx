import React, { useState } from "react";
import { AppDownload, ExploreMenu, FoodDisplay, Header } from "../index";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div id="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
