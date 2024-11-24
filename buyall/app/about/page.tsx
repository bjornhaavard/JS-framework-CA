import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">Welcome to our website! We are dedicated to providing the best service possible.</p>
      <p className="text-lg text-gray-700 mb-4">Our team is made up of experienced professionals who are passionate about what they do.</p>
      <p className="text-lg text-gray-700">Thank you for visiting our site. We hope you find what you are looking for!</p>
    </div>
  );
};

export default AboutPage;
