import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaFeatherAlt, FaEye, FaLayerGroup, FaRegSmile, FaShieldAlt } from "react-icons/fa";
// import apiImage from "../assets/images/api-phone.png"; // Replace with your actual image path

const featuresLeft = [
  {
    icon: <FaDesktop className="text-[#4cc2a0] text-xl" />,
    title: "24*7",
    description: "OfferExperience unparalleled support around the clock with WOW PAY...",
  },
  {
    icon: <FaFeatherAlt className="text-[#4cc2a0] text-xl" />,
    title: "24*7 Customer Support",
    description: "Our friendly is always available to offer training and post-integration support...",
  },
  {
    icon: <FaEye className="text-[#4cc2a0] text-xl" />,
    title: "Scalability",
    description: "Our scalable solutions adapt to the evolving needs of your business...",
  },
];

const featuresRight = [
  {
    icon: <FaLayerGroup className="text-[#4cc2a0] text-xl" />,
    title: "Industry Expertise",
    description: "Our industry-specific insights align with the unique demands of your business...",
  },
  {
    icon: <FaRegSmile className="text-[#4cc2a0] text-xl" />,
    title: "User-Friendly Interface",
    description: "Our platform ensures a smooth and enjoyable user experience for more engagement...",
  },
  {
    icon: <FaShieldAlt className="text-[#4cc2a0] text-xl" />,
    title: "Reliability and Security",
    description: "We ensure that your data and assets are protected at every step of your journey...",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Features */}
        <div className="space-y-8">
          {featuresLeft.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://wowpay.in/iLanding/assets/img/Group%208607.png"
            alt="API Phone"
            className="w-[300px] md:w-[320px] lg:w-[360px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right Features */}
        <div className="space-y-8">
          {featuresRight.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;