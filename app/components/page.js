"use client";

import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server

    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="container mx-auto text-white">
        <h1 className="text-center text-2xl font-bold">Contact Me</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-white rounded px-4 py-2 w-full bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-white rounded px-4 py-2 w-full bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-white rounded px-4 py-2 w-full h-32 bg-black text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
