import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  PlusIcon,
  NewspaperIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SideBar = ({ setActiveTab }) => {
  const navItems = [
    { name: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Create", icon: <PlusIcon className="w-5 h-5" /> },
    {
      name: "Feed",

      icon: <NewspaperIcon className="w-5 h-5" />,
    },
    {
      name: "Profile",

      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Messages",

      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    {
      name: "Notifications",

      icon: <BellIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",

      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
    {
      name: "Logout",

      icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-60 bg-gray-100 h-screen p-4 shadow-lg fixed">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActiveTab(item.name)}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium transition w-full text-left"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
