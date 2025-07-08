import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#4cc2a0] to-[#90e1e7] p-20">
        <h1 className="text-center text-4xl font-semibold text-gray-600">
          Contact Us
        </h1>
      </div>

   <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-[#f5f9ff] min-h-screen">

      <div className="bg-[#4cc2a0] text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
        <p className="mb-6">Feel free to reach out for any assistance or inquiries – we’re always here to help!</p>

        <div className="flex items-start mb-6">
          <div className="bg-white text-[#4cc2a0] rounded-full p-3 mr-4">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Our Location</h3>
            <p className="text-sm">
              Office Address: Office No.11, Brunton Rd, Craig Park Layout, Ashok Nagar,<br />
              Brunton Road, Bengaluru
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-white text-[#4cc2a0] rounded-full p-3 mr-4">
            <FaEnvelope size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Email Address</h3>
            <p className="text-sm">support@wowpay.in</p>
          </div>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="bg-white rounded-xl p-6 w-full md:w-1/2 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Contact Us</h2>
        <p className="mb-6 text-gray-600 text-sm">
          We'd love to hear from you! Reach out for any inquiries or support – we're here to assist you.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-200 rounded-xl outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  border border-gray-200 rounded-xl outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3  border border-gray-200 rounded-xl outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3  border border-gray-200 rounded-xl outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className=" cursor-pointer bg-[#4cc2a0] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#3fb090] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
