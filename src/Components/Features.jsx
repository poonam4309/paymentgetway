import React from "react";
import {
  FaBuilding,
  FaRocket,
  FaFileUpload,
  FaHandsHelping,
  FaCreditCard,
  FaMoneyBillAlt
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaBuilding />,
    title: "Robust REST APIs",
    desc: "Powerful and developer-friendly APIs to initiate payouts and fetch real-time status with ease."
  },
  {
    icon: <FaRocket />,
    title: "Real-Time Webhooks",
    desc: "Get instant webhook alerts for every payout – success, failure, or retry – 24x7."
  },
  {
    icon: <FaFileUpload />,
    title: "Bulk Payout Upload",
    desc: "No-code? No problem. Upload Excel or CSV files to process hundreds of payouts in one go."
  },
  {
    icon: <FaHandsHelping />,
    title: "No Beneficiary Delay",
    desc: "Skip beneficiary approval. Start sending payouts instantly without waiting periods."
  },
  {
    icon: <FaCreditCard />,
    title: "Dedicated Support",
    desc: "Our expert support team is available round-the-clock to solve any issue you face."
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Smart Analytics Dashboard",
    desc: "Track all transactions, view summaries, download payout reports, and monitor activity."
  },
  {
    icon: <FaBuilding />,
    title: "Bank-Grade Security",
    desc: "End-to-end encryption, strict data policies, and regular audits ensure your data is safe."
  },
  {
    icon: <FaHandsHelping />,
    title: "High Success Rates",
    desc: "Enjoy industry-best payout success rates with intelligent retry logic and fallback routing."
  },
  
  
];


const Features = () => {
  return (
    <section className="px-4 py-12 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black">Features</h2>
        <div className="w-30 h-1 bg-[#4cc2a0] mx-auto mt-2"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-center p-6 rounded-xl shadow-md hover:shadow-lg  hover:rounded-4xl transition-all duration-300 group"
          >
            <div className="cursor-pointer w-20 h-20 bg-[#4cc2a0] group-hover:bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <div className="text-white group-hover:text-[#4cc2a0] text-2xl transition-all duration-300">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-2xl text-[#4cc2a0] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-md">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
