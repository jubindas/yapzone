import React from "react";

const posts = [
  {
    username: "@jubin_123",
    time: "2 hours ago",
    content:
      "Just launched my first MERN stack project today! Feeling super proud of how far I've come. Big thanks to the dev community 💻❤️ #React #MongoDB #NodeJS #WebDev",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    username: "@dev_mira",
    time: "3 hours ago",
    content:
      "Debugging all night was worth it. My REST API finally works flawlessly! #NodeJS #Express #Backend",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    username: "@ankit_code",
    time: "4 hours ago",
    content:
      "Learning TailwindCSS has changed how I style UIs. Rapid prototyping is now super easy! #TailwindCSS #Frontend",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    username: "@rhea_uiux",
    time: "5 hours ago",
    content:
      "Shared my new portfolio website made with React and Framer Motion. Super smooth animations! #ReactJS #FramerMotion",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    username: "@sahil_dev",
    time: "6 hours ago",
    content:
      "Finally deployed my fullstack app on Vercel and Render. Check it out! 🚀 #FullStackDev #MERN",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

const Home = () => {
  return (
    <div className="flex justify-center items-start mt-10 p-6 w-full">
      <div className="w-full max-w-2xl space-y-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-3xl bg-white shadow-xl border border-transparent p-6"
          >
            {/* Gradient Border Overlay */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-blue-400 to-pink-400 z-[-1]"></div>

            {/* User Info */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={post.avatar}
                alt="User Profile"
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-300"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.username}
                </h2>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {post.content}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-sm text-gray-600">
              <button className="hover:text-blue-500 transition font-medium">
                👍 Like
              </button>
              <button className="hover:text-blue-500 transition font-medium">
                💬 Comment
              </button>
              <button className="hover:text-blue-500 transition font-medium">
                🔁 Share
              </button>
              <button className="hover:text-blue-500 transition font-medium">
                ↩️ Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
