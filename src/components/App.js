import React from "react";

// Style
import "../assets/styles/app.css";

// Layouts
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import GamesSlider from "./GamesSlider";
import GamesSale from "./GamesSale";

const App = () => {
  return (
    <div className="container flex px-12 pt-16">
      <div className=" w-2/12">
        <Sidebar />
      </div>
      <div className=" w-10/12">
        <Header />
        <GamesSlider />
        <GamesSale />
      </div>
    </div>
  );
};

export default App;
