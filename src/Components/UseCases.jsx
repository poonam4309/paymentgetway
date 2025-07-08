import React from 'react';

const UseCases = () => {
  const cases = [
    {
      title: "Vendor & Supplier Payouts",
      description: "Disburse payments to vendors and suppliers instantly via API or bulk upload—no beneficiary registration required.",
    },
    {
      title: "Instant Refunds",
      description: "Refund customers instantly to their UPI or bank account for failed orders, cancellations, or service disputes.",
    },
    {
      title: "Cashbacks & Loyalty Rewards",
      description: "Send cashback and reward amounts directly to users’ bank accounts or UPI VPAs to build engagement.",
    },
    {
      title: "Split Settlement",
      description: "Distribute funds between partners or sellers automatically using smart payout APIs in marketplace models.",
    },
    {
      title: "Salary & Commission Payouts",
      description: "Credit salary, commission, or incentive payouts to employees, agents, and field staff in real-time.",
    },
    {
      title: "Bank Account Verification",
      description: "Verify bank accounts before transferring funds, reducing risk of failed transactions and fraud.",
    },
    {
      title: "COD Refunds",
      description: "Refund cash-on-delivery orders seamlessly to customers via UPI or bank accounts—automated and secure.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-4">Use Cases</h2>
        <div className="flex justify-center mb-10">
          <div className="w-24 h-[2px] bg-[#123d88]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-black text-sm md:text-base cursor-pointer">
          {cases.map((use, index) => (
            <div
              key={index}
              className="p-5 border border-gray-100 rounded-xl shadow-md hover:shadow-lg   hover:rounded-4xl transition-all duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#123d88]">{use.title}</h3>
              <p className="text-gray-700">{use.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
