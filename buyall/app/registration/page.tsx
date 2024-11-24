"use client";

import React, { useState } from "react";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
              Avatar
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
// import axios from "axios";

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formDataToSend = {
//         name: formData.username,
//         email: formData.email,
//         password: formData.password,
//         avatar: {
//             url: "", // Add logic to handle avatar URL if needed
//             alt: "", // Add logic to handle avatar alt text if needed
//         },
//         // Add other fields if needed
//     };

//     try {
//         const response = await axios.post("https://v2.api.noroff.dev/auth/register", formDataToSend);
//         if (response.status === 201) {
//             console.log("User registered successfully:", response.data);
//         }
//     } catch (error) {
//         console.error("Error registering user:", error);
//     }
// };
