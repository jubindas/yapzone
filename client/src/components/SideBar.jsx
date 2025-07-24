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

const SideBar = () => {
  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Create", path: "/create", icon: <PlusIcon className="w-5 h-5" /> },
    {
      name: "Feed",
      path: "/feed",
      icon: <NewspaperIcon className="w-5 h-5" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <BellIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <ArrowLeftOnRectangleIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-60 bg-gray-100 h-screen p-4 shadow-lg fixed">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
