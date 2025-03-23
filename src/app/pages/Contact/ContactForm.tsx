"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target as HTMLFormElement);

    if (process.env.NEXT_PUBLIC_ACCESS_KEY) {
      formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);
    } else {
      console.error("NEXT_PUBLIC_ACCESS_KEY is not defined");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Failed to submit form. Please try again.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={onSubmit}
        className="bg-gray-900 bg-opacity-90 p-4 sm:p-5 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm border border-gray-700 backdrop-blur-sm"
        aria-labelledby="contact-form-title"
      >
        <fieldset className="border-none">
          <legend id="contact-form-title" className="sr-only">
            Contact Form
          </legend>

          {/* Name Field */}
          <div className="mb-3 sm:mb-4">
            <label htmlFor="name" className="text-left block text-sm sm:text-base font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 sm:p-3 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="text-left block text-sm sm:text-base font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 sm:p-3 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-3 sm:mb-4">
            <label htmlFor="message" className="text-left block text-sm sm:text-base font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full p-2 sm:p-3 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              rows={3}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-sky-500 text-white p-2 sm:p-3 rounded-lg hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
          >
            Submit Form
          </button>
        </fieldset>
      </form>

      {/* Status Message */}
      <output className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400" role="status">
        {result}
      </output>
    </section>
  );
}
