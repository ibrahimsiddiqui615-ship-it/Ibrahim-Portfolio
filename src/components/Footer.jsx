import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/ibrahimsiddiqui615-ship-it",
      color: "#8b5cf6",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/ibrahim-siddiqui-6465a3285/",
      color: "#06b6d4",
    },
    // {
    //   name: "Twitter",
    //   icon: "fab fa-twitter",
    //   url: "https://twitter.com",
    //   color: "#1da1f2",
    // },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:ibrahimsiddiqui615@gmail.com",
      color: "#8b5cf6",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="footer-section bg-dark text-white py-4 py-md-5"
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
        borderTop: "1px solid rgba(139, 92, 246, 0.2)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="row align-items-center flex-column flex-md-row g-4 g-md-0"
          variants={itemVariants}
        >
          <div className="col-12 col-md-6 text-center text-md-start">
            <motion.div className="footer-brand" variants={itemVariants}>
              <motion.h5
                className="brand-name mb-2 mb-md-3"
                style={{
                  color: "#a855f7",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                variants={itemVariants}
              >
                Ibrahim Siddiqui
              </motion.h5>
              <motion.p
                className="brand-description mb-0 small"
                style={{
                  color: "#e0e0e0",
                  opacity: 0.8,
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
                variants={itemVariants}
              >
                Professional Web Developer specializing in modern, responsive
                web applications and creative frontend solutions.
              </motion.p>
            </motion.div>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <motion.div
              className="footer-social d-flex justify-content-center justify-content-md-end gap-3 flex-wrap"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link p-3 rounded-circle neon-glow"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: social.color,
                    background: `rgba(${social.color === "#8b5cf6" ? "139, 92, 246" : social.color === "#06b6d4" ? "6, 182, 212" : social.color === "#1da1f2" ? "29, 161, 242" : "76, 175, 80"}, 0.1)`,
                    border: `1px solid rgba(${social.color === "#8b5cf6" ? "139, 92, 246" : social.color === "#06b6d4" ? "6, 182, 212" : social.color === "#1da1f2" ? "29, 161, 242" : "76, 175, 80"}, 0.2)`,
                    transition: "all 0.3s ease",
                    fontSize: "1.2rem",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.hr
          className="my-4 d-none d-md-block"
          style={{ borderColor: "rgba(139, 92, 246, 0.2)" }}
          variants={itemVariants}
        />
        <motion.div className="row" variants={itemVariants}>
          <div className="col-12 text-center">
            <motion.p
              className="copyright mb-0 small"
              style={{ color: "#e0e0e0", opacity: 0.7, fontSize: "0.85rem" }}
              variants={itemVariants}
            >
              © {currentYear} Ibrahim Siddiqui. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
