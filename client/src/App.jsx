import React from "react";
import Signup from "./users/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./users/Login.jsx";
import Hero from "./pages/Hero.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
