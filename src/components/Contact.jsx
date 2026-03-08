import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form validation and submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Call me directly',
      value: '+92 (0)333 1320 203',
      href: 'tel:+923331320203',
      color: '#4caf50'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Contact Email',
      value: 'ibrahimsiddiqui615@gmail.com',
      href: 'mailto:ibrahimsiddiqui615@gmail.com',
      color: '#8b5cf6'
    },
   {
     icon: 'fas fa-map-marker-alt',
     title: 'Location',
     value: 'Karachi, Pakistan',
     href: null,
     color: '#06b6d4'
   }
 ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="/contact"
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, rootMargin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="row justify-content-center mb-4 mb-md-5"
          variants={itemVariants}
        >
          <div className="col-12 text-center">
            <motion.h2
              className="section-title display-5 display-md-4 mb-3"
              variants={itemVariants}
            >
              GET IN TOUCH
            </motion.h2>
            <motion.p
              className="section-subtitle lead mb-0"
              variants={itemVariants}
            >
              Let's discuss your project and bring your ideas to life
            </motion.p>
          </div>
        </motion.div>

        <div className="row g-4 g-md-5 align-items-center justify-content-center">
          <motion.div
            className="col-12 col-lg-6 order-lg-1 order-2"
            variants={formVariants}
          >
            <motion.div
              className="contact-form-container p-4 p-md-5 rounded shadow-lg"
              style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(168, 85, 247, 0.1)' }}
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <motion.div
                  className="form-group mb-3 mb-md-4"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-4 py-3"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-3 mb-md-4"
                  variants={itemVariants}
                >
                  <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control rounded-pill px-4 py-3"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-3 mb-md-4"
                  variants={itemVariants}
                >
                  <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-pill px-4 py-3"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-4 mb-md-5"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control rounded-3 px-4 py-3"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows="5"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 px-5 py-3 rounded-pill"
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-12 col-lg-6 order-lg-2 order-1"
            variants={infoVariants}
          >
            <motion.div
              className="contact-info-container p-4 p-md-5 rounded shadow-lg"
              style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(168, 85, 247, 0.1)' }}
              variants={itemVariants}
            >
              <motion.div
                className="contact-info-header text-center mb-4 mb-md-5"
                variants={itemVariants}
              >
                <motion.h3
                  className="h3 mb-3"
                  style={{ color: '#a855f7' }}
                  variants={itemVariants}
                >
                  Let's Connect
                </motion.h3>
                <motion.p
                  className="lead mb-0"
                  variants={itemVariants}
                >
                  I'm always interested in new opportunities and exciting projects.
                </motion.p>
              </motion.div>

              <motion.div
                className="contact-info-list mb-4 mb-md-5"
                variants={containerVariants}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item d-flex align-items-center mb-3 mb-md-4 p-3 rounded"
                    style={{ background: 'rgba(168, 85, 247, 0.05)' }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="contact-icon me-3" style={{
                      width: '50px',
                      height: '50px',
                      background: `rgba(${info.color}, 0.1)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem'
                    }}>
                      <i className={info.icon} style={{ color: info.color }}></i>
                    </div>
                    <div className="contact-details flex-grow-1">
                      <h5 className="mb-1 fw-semibold text-light">{info.title}</h5>
                      {info.href ? (
                        <a href={info.href} className="text-decoration-none " style={{ color: info.color, fontSize: '1rem' }}>
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-light" style={{ fontSize: '1rem' }}>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="contact-social text-center"
                variants={itemVariants}
              >
                <motion.h4
                  className="mb-3"
                  style={{ color: '#a855f7' }}
                  variants={itemVariants}
                >
                  Follow Me
                </motion.h4>
                <motion.div
                  className="social-links d-flex justify-content-center gap-3 flex-wrap"
                  variants={containerVariants}
                >
                  <motion.a
                    href="https://github.com/ibrahimsiddiqui615-ship-it"
                    className="social-link p-3 rounded-circle neon-glow"
                    aria-label="GitHub"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      color: '#8b5cf6',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem'
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ibrahim-siddiqui-6465a3285/"
                    className="social-link p-3 rounded-circle neon-glow"
                    aria-label="LinkedIn"
                    style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                      color: '#06b6d4',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem'
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                  <motion.a
                    href="mailto:ibrahimsiddiqui615@gmail.com"
                    className="social-link p-3 rounded-circle neon-glow"
                    aria-label="Email"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      color: '#8b5cf6',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem'
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-envelope"></i>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
