import React from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import CTA from '../components/CTA';
import HomeProjects from '../components/Home_Projects';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Loader />
      <Navbar />
      <Hero />
      <Skills/>
      <HomeProjects/>
      <CTA/>
      <Footer />
    </motion.div>
  );
};

export default Home;
