"use client";

import React from "react";
import RenderContactPage from "../components/renderPages/renderContactForm/page";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100">
      <RenderContactPage />
    </div>
  );
};

export default ContactForm;
