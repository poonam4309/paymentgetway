import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { question: "What is Payout API?", answer: "Payout API allows you to automate fund transfers to bank accounts, wallets, or UPI handles programmatically." },
  { question: "What is Bulk Payout?", answer: "Bulk Payout allows you to send money to multiple beneficiaries in one API request or file upload." },
  { question: "What are the different payout methods supported?", answer: "Supported payout methods include IMPS, NEFT, RTGS, and UPI." },
  { question: "Can I transfer funds to Any Bank Account?", answer: "Yes, you can transfer funds to any valid bank account in India." },
  { question: "Can I transfer funds to Any UPI Handles / VPAs?", answer: "Yes, UPI handles/VPAs are supported for instant transfers." },
  { question: "Can I transfer funds on bank holidays?", answer: "Yes, UPI-based transfers are available 24x7 even on bank holidays." },
  { question: "Do you provide a Web Application / Dashboard?", answer: "Yes, we provide an easy-to-use dashboard to manage all your payouts and view transaction history." }
];

const PayoutFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-gray-100'>
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h2 className="text-2xl  text-center mb-6">Payout FAQ</h2>
       <div className="flex justify-center mt-2 mb-8">
        <div className="w-24 sm:w-32 h-[2px] bg-[#4cc2a0] "></div>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border border-gray-300 rounded bg-white shadow">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-[#75bba7] hover:text-white"
          >
            {faq.question}
            <FaChevronDown
              className={`transition-transform duration-200 text-[#4cc2a0]cursor-pointer ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default PayoutFAQ;
