import React from 'react';

function PayoutPaymentMethods() {
  return (
    <div className="bg-[#f5f5f5] py-12 px-4 sm:px-6 md:px-10 text-center">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Payout Payment Methods
      </h2>

      {/* Green underline */}
      <div className="flex justify-center mt-2 mb-6">
        <div className="w-20 h-[2px] bg-[#123d88] "></div>
      </div>

      {/* Logos */}
       <div className="flex flex-wrap justify-center gap-4 mb-10">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtJrkw-Bg-TKZgunBC3jBPH8XOgYdlwZtxqcbGqsfsYsWshah4"
          alt="UPI"
          className="h-15 w-30 bg-white px-4 py-2 rounded-xl shadow-sm"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT316HdjT1hu2Bysu1rGFy5EraRSZ_pLN1dnu-rc9jbx1-k7Zv_"
          alt="IMPS"
          className="h-15 w-30 bg-white px-4 py-2 rounded-xl shadow-sm"
        />
       <img
          src="https://cdn.payoutfintech.com/v2/img/neft.png"
          alt="UPI"
          className="h-15 w-30 bg-white px-4 py-2 rounded-xl shadow-sm"
        />
      </div>

      {/* Cards with small gap */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-[20px] max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md px-6 py-8 w-full text-center ">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Bank Account Transfer
          </h3>
          <p className="text-sm text-gray-600">
            Fund Transfer APIs support NEFT / RTGS / IMPS modes
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md px-6 py-8 w-full text-center">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            UPI Payouts / UPI Refunds
          </h3>
          <p className="text-sm text-gray-600">
            UPI Fund transfer APIs support instant refunds and payouts to any UPI handle
          </p>
        </div>
      </div>
    </div>
  );
}

export default PayoutPaymentMethods;
