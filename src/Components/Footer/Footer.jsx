import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#123d88]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#123d88]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#123d88]">Contact</Link></li>
          </ul>
        </div>

        {/* Payout APIs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payout APIs</h3>
          <ul className="space-y-2">
            <li><Link to="/fund-transfer" className="hover:text-[#123d88]">Fund Transfer API</Link></li>
            <li><Link to="/fund-transfer" className="hover:text-[#123d88]">UPI Payout API</Link></li>
            <li><Link to="/bank-account-verification" className="hover:text-[#123d88]">Bank Account Verification API</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-[#123d88]">Terms</Link></li>
            <li><Link to="/privacypolicy" className="hover:text-[#123d88]">Privacy</Link></li>
          </ul>
        </div>
        
      </div>

     
    </footer>
  );
};

export default Footer;
