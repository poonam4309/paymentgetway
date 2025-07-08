import React,{useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FundTransfer from './pages/FundTransfer/FundTransfer';

const App = ({ }) => {
  const sectionRefs = {
    'about-us': useRef(null),
    'services': useRef(null),
    'features': useRef(null),
    'pricing': useRef(null),
    'payout-api': useRef(null),
    'use-case': useRef(null),
    'industry': useRef(null),
  };

  const handleClick = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this line */}
      <Navbar handleClick={handleClick}/>

      <Routes>
        <Route path="/" element={<Home sectionRefs={sectionRefs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/fund-transfer" element={<FundTransfer />} />
        <Route path="/fundtransfer/details" element={<FundTransfer/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
