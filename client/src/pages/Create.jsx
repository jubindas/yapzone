import React, { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    console.log("Post content:", content);
    setContent("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-transparent relative w-200 h-100 mx-auto mt-7 ">
      {/* Gradient Border */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400 z-[-1]"></div>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://i.pravatar.cc/150?img=11"
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-blue-300"
        />
        <h2 className="text-base font-semibold text-gray-700">@you</h2>
      </div>

      {/* Post Input */}
      <textarea
        rows="3"
        placeholder="What's your tea?"
        className="w-full p-3 h-60 text-sm text-gray-700 border border-black-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Post Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={handlePost}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm px-5 py-1.5 rounded-full font-medium shadow hover:opacity-90 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
