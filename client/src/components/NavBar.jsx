import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import User from "./User.jsx";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-100 to-pink-100 px-6 py-3 flex items-center justify-between w-full sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-blue-800">YapZone</div>

      <div className="w-1/2 hidden md:flex items-center relative">
        <FiSearch className="absolute left-3 text-blue-600 text-lg" />
        <input
          type="text"
          placeholder="Search stories, tags..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white/60 backdrop-blur border border-blue-200 placeholder:text-blue-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
