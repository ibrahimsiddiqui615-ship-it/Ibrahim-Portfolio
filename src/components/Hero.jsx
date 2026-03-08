import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import profileImage from "../assets/images/profile2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <motion.div 
              className="welcome-badge"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, ease: "easeOut" }}
            >
              <span className="welcome-icon">👋</span>
              <span>Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            >
              Hi, I'm <span className="hero-name">Ibrahim Siddiqui</span>
            </motion.h1>

            <motion.h2 
              className="hero-subtitle"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
            >
              Frontend Web Developer
            </motion.h2>

            <motion.p 
              className="hero-description"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
            >
              As a passionate frontend developer, I specialize in creating
              beautiful, responsive, and user-friendly web applications. I love
              turning ideas into reality using modern web technologies like
              React, JavaScript, and CSS frameworks. My goal is to create
              exceptional digital experiences that make a difference.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary border-0 ">
                Get In Touch
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="hero-right"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 1, delay: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
          >
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Ibrahim Siddiqui"
                className="profile-image"
              />
              {!shouldReduceMotion && (
                <div className="floating-elements">
                  <div className="floating-element react-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="floating-element js-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="floating-element android-icon">
                    <i className="fab fa-android"></i>
                  </div>
                  <div className="floating-element node-icon">
                    <i className="fab fa-node-js"></i>
                  </div>
                  </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
