import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const Popup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className=" cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Schedule a Call Back</h2>
                <form className="flex flex-col space-y-4">
                    
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <FaUser className="text-gray-500 mr-2" />
                        <input type="text" placeholder="Name" className="outline-none w-full" />
                    </div>

                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <input type="email" placeholder="Email" className="outline-none w-full" />
                    </div>

                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <FaPhoneAlt className="text-gray-500 mr-2" />
                        <input type="tel" placeholder="Office Number" className="outline-none w-full" />
                    </div>

                    <div className="flex items-center border border-gray-300 p-2 rounded">
                        <FaGlobe className="text-gray-500 mr-2" />
                        <input placeholder="Company Website" className="outline-none w-full" />
                    </div>

                    <button
                        type="submit"
                        className=" cursor-pointer bg-[#4cc2a0] text-white py-2 px-4 rounded  hover:bg-[#3fb090] font-semibold"
                    >
                        Schedule a Call Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
