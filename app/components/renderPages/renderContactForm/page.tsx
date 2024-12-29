"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  email: yup.string().email("Must be a valid email address").required("Email is required"),
  message: yup.string().min(3, "Message must be at least 3 characters").required("Message is required"),
});

const RenderContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { name: string; subject: string; email: string; message: string }) => {
    console.log(data);
    // Handle form submission
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      reset();
    }, 2000);
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <section className="blue-container text-center mb-6">
        <h1 className="heading">Contact Us</h1>
        <p className="sub-heading">We would love to hear from you! Please fill out the form below to get in touch.</p>
      </section>
      <div className="text-center mb-16">
        <form className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full name"
              {...register("name")}
              onChange={(e) => setValue("name", e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
              {...register("subject")}
              onChange={(e) => setValue("subject", e.target.value)}
            />
            {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email")}
              onChange={(e) => setValue("email", e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows={5}
              {...register("message")}
              onChange={(e) => setValue("message", e.target.value)}
            />
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-500">Thank you!</h2>
            <p className="text-green-500">Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RenderContactPage;
