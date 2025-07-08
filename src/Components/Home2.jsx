import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home2 = () => {
  const phrases = [
    "|",
    "salary..",
    "commissions..",
    "vendor payments..",
    "cashbacks...",
    "reimbursements..",
    "refunds.."
  ];

  const [index, setIndex] = useState(0);
  const phraseVariants = {
  initial: { opacity: 0, y: 10, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" font-serif flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-10 sm:py-16 bg-[#f1f9f5] gap-10">

      {/* Left Side */}
    <motion.div
  className="md:w-1/2 w-full"
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  {/* 🔷 Heading with Gradient & Pop */}
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-[#3fb090]  to-[#6bf3cc] text-transparent bg-clip-text"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
  >
    iPayments Payout APIs &<br /> Bulk Transfer Made for Growth
  </motion.h1>

  {/* 🔹 Paragraph Description */}
  <motion.p
    className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
  >
    
  </motion.p>

  {/* ✅ Animated Feature List */}
  <ul className="space-y-3 mb-8 text-base sm:text-lg md:text-xl">
    {[
      "Instant bank & UPI transfers 24x7",
      "Simple REST APIs & Bulk Excel Uploads",
      "24/7 support & onboarding assistance"
    ].map((text, i) => (
      <motion.li
        key={i}
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
      >
        <span className="h-3 w-3 sm:h-4 sm:w-4 mt-2 bg-[#4cc2a0] rounded-full shadow-md inline-block"></span>
        <span>{text}</span>
      </motion.li>
    ))}
  </ul>

  {/* 💬 Phrase with AnimatePresence */}
  <motion.div
    className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 flex items-center gap-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    Built for sending{" "}
    <AnimatePresence mode="wait">
      <motion.span
        key={phrases[index]}
        className="text-[#4cc2a0] font-bold"
        variants={phraseVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {phrases[index]}
      </motion.span>
    </AnimatePresence>
  </motion.div>
</motion.div>

      {/* Right Side - Form */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-xl shadow-xl md:w-2/6 w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="flex flex-col space-y-5 sm:space-y-6">
          {[
            { label: "Full Name", placeholder: "Name", type: "text" },
            { label: "Mobile Number", placeholder: "Mobile No.", type: "text" },
            { label: "Your E-mail ID", placeholder: "Official E-mail", type: "email" },
            { label: "Your Website", placeholder: "Company website", type: "text" }
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <label className="block text-sm font-medium text-gray-700">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="bg-[#4cc2a0] hover:bg-[#3fb090]  text-white font-semibold py-3 rounded-md shadow cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            SCHEDULE A CALL
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Home2;
