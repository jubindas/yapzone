import React, { useState, useRef, useEffect } from "react";
import Profile from "./Profile"; // renamed Profile to ProfileDropdown to make purpose clearer

function User() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-3 group cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-pink-400"
        />

        <div className="flex flex-col text-sm">
          <span className="font-semibold text-blue-800">Jubin Rohidas</span>
          <span className="text-gray-500">jubin@gmail.com</span>
        </div>
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-3 z-50">
          <Profile />
        </div>
      )}
    </div>
  );
}

export default User;
