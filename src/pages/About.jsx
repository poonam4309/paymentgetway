import React from "react";
import about from "../assets/images/about.png";
import Services from "../Components/Services";

const About = () => {
    return (
        <>
           <div className="bg-gradient-to-br from-[#e0f1df] to-[#90e1e7] p-20">
        <h1 className="text-center text-4xl font-semibold text-gray-600">
          About Us
        </h1>
      </div>
            <section className="flex flex-col md:flex-row items-center bg-white px-4 sm:px-6 md:px-10 py-10 gap-6 md:gap-10">
                <div className="md:w-1/2 w-full flex justify-center">
                    <img
                        src={about}
                        alt="About Us"
                        className="max-w-full md:max-w-[400px] rounded-lg h-auto object-contain"
                    />
                </div>

                <div className="md:w-1/2 w-full text-black">

                    <p className="text-gray-700 mb-6 text-base leading-relaxed">
                        iPayments is a forward-thinking Fintech company based in Chennai, dedicated to delivering fast, reliable, and secure payout solutions for modern businesses. Our platform enables seamless fund transfers through powerful APIs and intuitive bulk payout systems, allowing businesses to automate their payments with confidence.

                        We help businesses disburse payments to bank accounts and UPI IDs in real time — ensuring speed, compliance, and full transparency. With a strong focus on security and regulatory alignment, iPayments is committed to helping enterprises scale their financial operations without friction.
                    </p>

                </div>
            </section>
<Services/>
        </>
    );
};

export default About;
