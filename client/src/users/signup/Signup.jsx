import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState("");

  const onChangee = (e) => {
    setFormData({ firstname: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={onChangee}
          placeholder="First Name"
        />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Password" />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}

export default Signup;
