import React from "react";
import { FaWaveSquare, FaProjectDiagram, FaLink, FaQrcode } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <FaWaveSquare className="text-2xl text-[#4cc2a0]" />,
      title: "Payment Gateway",
      description:
        "You can provide your customers with 100+ payment method options via Wow Pay payment gateway checkout.",
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-[#4cc2a0]" />,
      title: "Chargeback",
      description:
        "Chargeback is a dispute raised by an end user and reported to their bank.",
    },
    {
      icon: <FaLink className="text-2xl text-[#4cc2a0]" />,
      title: "Payment Link",
      description:
        "Share payment links with your customers directly and start collecting online payments.",
    },
    {
      icon: <FaQrcode className="text-2xl text-[#4cc2a0]" />,
      title: "QR Code",
      description:
        "Emphasize the robust security measures and compliance standards your payment gateway adheres to.",
    },
  ];

  return (
    <section className="px-4 py-16 bg-[#f4f9ff]">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Services</h2>
        <div className="w-24 h-1 bg-[#4cc2a0] mx-auto mt-3 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white hover:bg-[#4cc2a0] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex gap-4 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              animation: "float 2.5s ease-in-out infinite",
            }}
          >
            <div className="bg-blue-100 rounded-lg p-3 flex items-center justify-center h-12 w-12 shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
