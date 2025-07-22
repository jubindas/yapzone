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
        <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-pink-600 transition">
          ☕ Spill Your Tea
        </button>

        <div className="relative">
          <FiBell className="text-xl text-blue-700 hover:text-pink-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1.5 rounded-full">
            3
          </span>
        </div>

        <User />
      </div>
    </nav>
  );
};

export default Navbar;
