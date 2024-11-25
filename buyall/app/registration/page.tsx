"use client";

import React, { useState } from "react";
import axios from "axios";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: {
      url: "",
      alt: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "avatarUrl") {
      setFormData({
        ...formData,
        avatar: {
          ...formData.avatar,
          url: value,
        },
      });
    } else if (name === "avatarAlt") {
      setFormData({
        ...formData,
        avatar: {
          ...formData.avatar,
          alt: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const [bio, setBio] = useState("");
  const [banner, setBanner] = useState({
    url: "",
    alt: "",
  });
  const [venueManager, setVenueManager] = useState(false);

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBanner({
      ...banner,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    const namePattern = /^[a-zA-Z0-9_]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!namePattern.test(formData.username)) {
      alert("Username must not contain punctuation symbols apart from underscore (_).");
      return;
    }
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid stud.noroff.no email address.");
      return;
    }
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    if (bio && bio.length >= 160) {
      alert("Bio must be less than 160 characters.");
      return;
    }
    if (formData.avatar.url && !urlPattern.test(formData.avatar.url)) {
      alert("Avatar URL must be a valid and accessible URL.");
      return;
    }
    if (formData.avatar.url && formData.avatar.alt.length >= 120) {
      alert("Avatar Alt Text must be less than 120 characters.");
      return;
    }
    if (formData.avatar.url && !formData.avatar.alt) {
      formData.avatar.alt = "";
    }
    if (banner.url && !urlPattern.test(banner.url)) {
      alert("Banner URL must be a valid and accessible URL.");
      return;
    }
    if (banner.url && banner.alt.length >= 120) {
      alert("Banner Alt Text must be less than 120 characters.");
      return;
    }
    if (banner.url && !banner.alt) {
      banner.alt = "";
    }

    const formDataToSend = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
      bio: bio,
      avatarUrl: formData.avatar.url,
      avatarAlt: formData.avatar.alt,
      bannerUrl: banner.url,
      bannerAlt: banner.alt,
      venueManager: venueManager,
    };

    try {
      const response = await axios.post("https://v2.api.noroff.dev/auth/register", formDataToSend);
      if (response.status === 201) {
        console.log("User registered successfully:", response.data);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
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
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
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
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
              pattern="^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$"
              title="Please enter a valid stud.noroff.no email address."
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
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500  text-gray-800"
              required
            />
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              value={bio}
              onChange={handleBioChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
            />
            <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700">
              Avatar URL
            </label>
            <input
              type="text"
              name="avatarUrl"
              id="avatarUrl"
              value={formData.avatar.url}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500  text-gray-800"
            />
            <label htmlFor="avatarAlt" className="block text-sm font-medium text-gray-700">
              Avatar Alt Text
            </label>
            <input
              type="text"
              name="avatarAlt"
              id="avatarAlt"
              value={formData.avatar.alt}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
            />
            <label htmlFor="bannerUrl" className="block text-sm font-medium text-gray-700">
              Banner URL
            </label>
            <input
              type="text"
              name="url"
              id="bannerUrl"
              value={banner.url}
              onChange={handleBannerChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500  text-gray-800"
            />
            <label htmlFor="bannerAlt" className="block text-sm font-medium text-gray-700">
              Banner Alt Text
            </label>
            <input
              type="text"
              name="alt"
              id="bannerAlt"
              value={banner.alt}
              onChange={handleBannerChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="venueManager" className="block text-sm font-medium text-gray-700">
              Venue Manager
            </label>
            <input
              type="checkbox"
              name="venueManager"
              id="venueManager"
              checked={venueManager}
              onChange={(e) => setVenueManager(e.target.checked)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none text-gray-800 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
