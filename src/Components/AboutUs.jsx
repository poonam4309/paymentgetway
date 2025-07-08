import React from "react";
import about from "../assets/images/about.png";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaExchangeAlt, FaLink, FaAward } from "react-icons/fa"
const AboutUs = () => {
  const navigate = useNavigate();


  return (
    <>
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-14 gap-6 md:gap-10 text-center md:text-left overflow-hidden">

        {/* Image Section with Float */}
        <div className="md:w-1/2 w-full flex justify-center">
          <motion.img
            src={about}
            alt="About Us"
            className="max-w-full md:max-w-[400px] rounded-lg h-auto object-contain"
            style={{
              animation: "float 2.5s ease-in-out infinite"
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 w-full text-black"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-[#4cc2a0]">About Us</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            iPayment is a Chennai-based fintech startup providing the best payout solutions to businesses.
            Our goal is to provide awesome products to move payments between businesses and end-customers
            with 100% compliance to meet banking norms and regulatory requirements.
          </p>

          <div className="flex justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about')}
              className="bg-[#4cc2a0] hover:bg-[#3fb090]  text-white px-6 py-2.5 rounded-md shadow transition duration-300"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>

        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
        </style>
      </section>


      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-black font-semibold">Our Payment Features</h2>
          <p className="text-gray-600 mt-3">Smart. Fast. Reliable. Everything you need in one place.</p>
          <div className="w-40 h-1 bg-[#4cc2a0] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* 1 - Seamless Payment */}
          <div className="bg-orange-50 rounded-xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300">
            <FaAward className="text-5xl text-orange-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Seamless Payment</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Empower your transactions with 's Seamless Payments – where every financial exchange becomes a smooth and effortless experience, ensuring convenience and efficiency at your fingertips.      </p>
          </div>

          {/* 2 - Virtual Account */}
          <div className="bg-blue-50 rounded-xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300">
            <FaRegCheckCircle className="text-5xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Virtual Account</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Enter the realm of virtual possibilities with Wow Pay Merchant's Virtual Account – a dynamic financial tool that enhances your control and visibility, making managing funds and transactions an intuitive and virtual breeze.      </p>
          </div>

          {/* 3 - Payout */}
          <div className="bg-green-50 rounded-xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300">
            <FaExchangeAlt className="text-5xl text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Payout</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transform your disbursement process with Wow Pay Merchant's Payouts solution. Effortlessly distribute funds, streamline financial workflows, and empower your business with a robust and efficient payout mechanism.      </p>
          </div>

          {/* 4 - Payment Link */}
          <div className="bg-rose-50 rounded-xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300">
            <FaLink className="text-5xl text-rose-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Payment Link</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wow Pay Merchant's Payment Link – your direct link to simplicity and convenience. Generate instant, secure payment links for your transactions, offering a user-friendly and efficient way to receive funds, anytime, anywhere.      </p>
          </div>
        </div>
      </section>




    </>
  );
};

export default AboutUs;
