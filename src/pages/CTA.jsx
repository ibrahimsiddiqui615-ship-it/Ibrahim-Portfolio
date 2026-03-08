import React from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const CTAPage = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <CTA />
      <Footer />
    </>
  );
};

export default CTAPage;
