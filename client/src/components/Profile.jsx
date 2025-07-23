import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    bio: "This is my bio.",
    image: null,
    preview: "https://via.placeholder.com/150",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg p-4">
      {/* Profile Image */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={formData.preview}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
        />
        <label className="mt-1 text-sm text-blue-600 cursor-pointer">
          <input type="file" onChange={handleImageChange} className="hidden" />
          Change Photo
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
        <textarea
          name="bio"
          rows="2"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="w-full px-3 py-2 border rounded-md text-sm resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
