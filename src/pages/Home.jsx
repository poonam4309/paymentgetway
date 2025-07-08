import React, { useRef } from 'react';
// import Navbar from '../Components/Navbar';
import Home2 from '../Components/Home2';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import PayoutPricing from '../Components/PayoutPricing';
import Features from '../Components/Features';
import PayoutAPIs from '../Components/PayoutAPIs';
import BulkFileUpload from '../Components/BulkFileUpload';
import UseCases from '../Components/UseCases';
import Industry from '../Components/Industry/Industry';
import PayoutPaymentMethods from '../Components/Industry/PayoutPaymentMethods';
import PayoutFAQ from '../Components/Industry/PayoutFAQ';

const Home = ({ sectionRefs }) => {

  return (
    <>
      <div><Home2 /></div>
      <div ref={sectionRefs['about-us']}><AboutUs /></div>
      <div ref={sectionRefs['services']}><Services/></div>
      <div ref={sectionRefs['pricing']}><PayoutPricing /></div>
      <div ref={sectionRefs['features']}><Features /></div>
      <div ref={sectionRefs['payout-api']}><PayoutAPIs /></div>
      {/* <div><BulkFileUpload /></div> */}
      <div ref={sectionRefs['use-case']}><UseCases /></div>
      <div ref={sectionRefs['industry']}><Industry /></div>
      {/* <div><PayoutPaymentMethods /></div> */}
      <div><PayoutFAQ /></div>
    </>
  );
};

export default Home;
