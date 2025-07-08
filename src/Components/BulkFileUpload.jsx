import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const BulkFileUpload = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 md:px-10">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl text-black">
        Bulk File Upload
      </h1>
      <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
        Upload File and approve
      </p>
      <div className="flex justify-center mt-2 mb-8">
        <div className="w-24 sm:w-32 h-[2px] bg-[#123d88]"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 max-w-3xl mx-auto px-2">
        {/* Left Side - Features */}
       <div className="md:w-1/2 w-full text-center md:text-left">
  <h2 className="text-xl font-semibold text-black mb-4">Bulk Upload</h2>
  <ul className="space-y-4 text-gray-700 text-sm md:text-base">
    {[
      "Simple Approval or multi user approval workflow",
      "Duplicate File checker mechanism (Industry first)",
      "Multi factor authentication",
      "Maker-checker",
    ].map((text, index) => (
      <li
        key={index}
        className="flex items-start gap-3 justify-start text-left"
      >
        <span className="min-w-[1.2rem] text-[#123d88] mt-1">
          <FaCheck />
        </span>
        <span className="flex-1">{text}</span>
      </li>
    ))}
  </ul>
</div>


        {/* Right Side - Upload Box */}
        <div className="md:w-1/2 w-full bg-white border border-[#123d88] rounded-xl p-6 shadow-xl">
          <h3 className="text-center text-lg font-semibold text-black mb-4">
            Upload Batch File
          </h3>
          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-6 mx-auto"></div>

          <label className="flex items-center justify-center gap-2 cursor-pointer text-[#123d88] font-medium">
            <FiUpload className="text-xl" />
            Choose a File
            <input type="file" className="hidden" />
          </label>

          <button className="mt-6 w-full bg-[#123d88] hover:bg-[#0f2f6b] text-white py-2 rounded shadow-md transition duration-200">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkFileUpload;
