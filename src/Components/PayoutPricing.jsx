import React, { useState } from "react";
import Popup from "./Popup"; // ✅ Your existing popup form

const PayoutPricing = () => {
  const [showPopup, setShowPopup] = useState(false); // ✅ Control popup visibility

  return (
    <section className="px-4 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black">Payout Pricing</h2>
        <div className="w-40 h-1 bg-[#4cc2a0] mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - IMPS / NEFT */}
                 <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="bg-[#4cc2a0] text-white text-center py-3 font-semibold text-lg">
                        IMPS / NEFT Payout Pricing
                    </div>
                    <div className="divide-y divide-gray-200 text-center py-4">
                        <p className="py-2 bg-gray-100">Fund Transfer APIs for Bank Account</p>
                        <p className="py-2">NEFT / RTGS - ₹ 2</p>
                        <p className="py-2 bg-gray-100">IMPS Below 999 - ₹ 2</p>
                        <p className="py-2">IMPS Below 25,000 - ₹ 5</p>
                        <p className="py-2 bg-gray-100">IMPS Above 25,000 - ₹ 9</p>
                    </div>
                </div>

                {/* Card 2 - UPI */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="bg-[#4cc2a0] text-white text-center py-3 font-semibold text-lg">
                        UPI Payout Pricing
                    </div>
                    <div className="divide-y divide-gray-200 text-center py-4">
                        <p className="py-2 bg-gray-100">Fund Transfer APIs for UPI VPAs</p>
                        <p className="py-2">UPI Below 999 - ₹ 4</p>
                        <p className="py-2 bg-gray-100">UPI Below 25,000 - ₹ 7</p>
                        <p className="py-2">UPI Above 25,000 - ₹ 10</p>
                        <p className="py-2  bg-gray-100 text-gray-100">636376376r7</p>
                    </div>
                </div>
        {/* Card 3 - Enterprise */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="bg-[#4cc2a0] text-white text-center py-3 font-semibold text-lg">
            Enterprise Payout Pricing
          </div>
          <div className="divide-y divide-gray-200 text-center py-4">
            <p className="py-2 bg-gray-100">More than 50,000 payouts per month</p>
            <p className="py-2">Customised pricing plan based on volume</p>
            <p className="py-2 bg-gray-100 text-gray-100">More than 50,000 payouts per month</p>
            <p className="py-2 text-white">Customised pricing plan based on volume</p>
            <div className="py-4">
              <button
                onClick={() => setShowPopup(true)} // ✅ Open popup
                className="cursor-pointer bg-[#4cc2a0] text-white px-6 py-3 min-w-[320px] rounded-md hover:bg-[#3fb090] transition"
              >
                SCHEDULE A CALL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup displayed only if showPopup is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default PayoutPricing;
