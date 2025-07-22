import React, { useState } from "react";

function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative flex items-center gap-3 group cursor-pointer"
      onClick={toggleDropdown}
    >
      {/* Profile Image */}
      <img
        src="https://i.pravatar.cc/40"
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-pink-400"
      />

      {/* Name & Email */}
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-blue-800">Jubin Rohidas</span>
        <span className="text-gray-500">jubin@gmail.com</span>
      </div>

      {/* Dropdown on Hover */}
      {isOpen && (
        <div className="absolute right-0 mt-45 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
