import React from "react";
import Signup from "./users/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./users/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
