import React, { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Popup from './Popup';

const Navbar = ({ handleClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      handleClick?.(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: "About Us", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Payout APIs", id: "payout-api" },
    { label: "Use Cases", id: "use-case" },
    { label: "Industry", id: "industry" }
  ];

  return (
    <>
    <nav className=" w-full bg-white shadow-md mt-4 px-6 py-3 rounded-full sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between font-serif">
    
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#4cc2a0]  ">
   
      <span>iPayments</span>
    </Link>

    {/* Nav Items */}
    <ul className="hidden md:flex items-center space-x-6 text-[16px] font-medium text-gray-700">
      {navItems.map((item, idx) => (
        <li
          key={idx}
          onClick={() => handleNavigation(item.id)}
          className="cursor-pointer relative group"
        >
          <span className="hover:text-[#123d88] transition-colors duration-300">
            {item.label}
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4cc2a0] group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <div className="hidden md:flex">
      <button
        onClick={() => setShowPopup(true)}
        className="text-white bg-[#4cc2a0] hover:bg-[#3fb090] px-5 py-2 rounded-full  font-semibold text-sm shadow transition-all"
      >
     Schedule a Call Back
      </button>
    </div>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden flex items-center gap-3">
      <IoCallOutline
        className="text-2xl text-[#4cc2a0] cursor-pointer"
        onClick={() => setShowPopup(true)}
      />
      {menuOpen ? (
        <MdClose
          className="text-3xl cursor-pointer text-gray-800"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <MdMenu
          className="text-3xl cursor-pointer text-gray-800"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </div>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300 rounded-b-xl">
      {navItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => handleNavigation(item.id)}
          className="block w-full text-left text-gray-800 font-medium hover:text-[#4cc2a0] transition"
        >
          {item.label}
        </button>
      ))}
    </div>
  )}
</nav>


      {/* Popup Call Form */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Navbar;
