import React from 'react';

const Industry = () => {
  const industries = [
    'E-commerce', 'Quick commerce', 'Marketplace', 'Service Aggregator',
    'Hyper local delivery', 'Ride hailing service', 'Agritech', 'B2B Business',
    'NBFC', 'Insurance', 'Payment gateways', 'Other'
  ];

  return (
    <div className="bg-gradient-to-br from-[#e0f1df] to-[#aedde0] py-12 px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-bg-[#4cc2a0]">Industry</h2>
      <p className="text-sm md:text-base mt-4 text-gray-700 ">Payout used in this following industries</p>

      <div className="flex justify-center mt-4 mb-8">
        <div className="w-30 h-[2px] bg-[#4cc2a0]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="border border-dotted border-black rounded-xl px-7 py-6 text-sm md:text-base bg-white shadow-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
