import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import SideBar from "../components/SideBar.jsx";
import Home from "./Home.jsx";
import Create from "./Create.jsx";

function Hero() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <NavBar />
      <SideBar setActiveTab={setActiveTab} />
      <div>
        {activeTab === "Home" && <Home />}
        {activeTab === "Create" && <Create />}
      </div>
    </>
  );
}

export default Hero;
