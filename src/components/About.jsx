import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/profile2.png";
import { Link } from "react-router-dom";

const About = () => {
  const technicalSkills = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js-square", name: "JavaScript" },
    { icon: "fab fa-bootstrap", name: "Bootstrap" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-git-alt", name: "Git" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="about-section"
      // style={{ background: "#0a0a0a", color: "white", padding: "100px 0" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, rootMargin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        {/* Header with Profile Image */}
        <div
          className="row align-items-center justify-content-between"
          style={{ marginBottom: "80px" }}
        >
          <motion.div
            className="col-lg-4 col-md-6 col-12 text-center mb-4 mb-lg-0 order-lg-1 order-2"
            variants={imageVariants}
          >
            <img
              src={aboutImage}
              alt="Ibrahim Siddiqui"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                aspectRatio: "1/1",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #8b5cf6",
              }}
            />
          </motion.div>
          <motion.div
            className="col-lg-6 order-lg-2 order-2"
            variants={itemVariants}
          >
            <motion.h1
              className="section-title"
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
              variants={itemVariants}
            >
              Get to know me better
            </motion.h1>
            <motion.h3
              className="lead mb-3"
              style={{ color: "#8b5cf6", fontSize: "1.5rem" }}
              variants={itemVariants}
            >
              Frontend Web Developer
            </motion.h3>
            <motion.p
              className="lead"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.2rem",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
              variants={itemVariants}
            >
              As a Frontend Web Developer, I specialize in building responsive,
              user-friendly websites using HTML, CSS, Bootstrap, JavaScript,
              Tailwind-CSS and React.js. My goal is to craft clean, scalable
              solutions that combine technical precision with engaging and
              modern design.
            </motion.p>
            <motion.p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "1rem",
                marginBottom: "2rem",
              }}
              variants={itemVariants}
            >
              📧 ibrahimsiddiqui@gmail.com
            </motion.p>
            <motion.div
              className="d-flex gap-3 flex-wrap"
              variants={itemVariants}
            >
              {/* <a href="/resume.pdf" className="btn btn-primary px-4 py-2" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                color: 'white',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                Download Resume
              </a> */}
              <Link
                to="/projects"
                className="btn btn-primary px-4 py-2"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  color: "white",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Skills Grid */}
        <motion.div
          className="row"
          style={{ marginBottom: "80px" }}
          variants={itemVariants}
        >
          <div className="col-12">
            <motion.h2
              className="section-title text-center mb-2"
              style={{ fontSize: "2.5rem", color: "#8b5cf6" }}
              variants={itemVariants}
            >
              Technical Skills
            </motion.h2>
            <motion.p
              className="text-center mb-4"
              style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.1rem" }}
              variants={itemVariants}
            >
              Technical Skills I use to build sites
            </motion.p>
            <motion.div
              className="row g-4 justify-content-center"
              variants={containerVariants}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="col-md-4 col-lg-2 col-4 text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="skill-card p-3 rounded"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i
                      className={skill.icon}
                      style={{
                        fontSize: "2.5rem",
                        color: "#8b5cf6",
                        marginBottom: "0.5rem",
                      }}
                    ></i>
                    <span style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Work Experience */}
        {/* <div className="row" style={{ marginBottom: '80px' }}>
          <div className="col-12">
            <h2 className="section-title text-center mb-4" style={{ fontSize: '2.5rem', color: '#8b5cf6' }}>
              Work Experience
            </h2>
            <div className="experience-card p-4 rounded" style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem'
            }}>
              <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Full Stack & Mobile Developer</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                Currently working at Bits Collision, developing full stack web applications and mobile apps (Android & iOS) 
                for innovative projects that make a real impact.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <img 
                  src="https://www.bitscollision.com/assets/images/site_logo/preloader.svg" 
                  alt="Bits Collision" 
                  style={{ height: '40px', objectFit: 'contain' }} 
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Card */}
        <motion.div
          className="row justify-content-center"
          variants={itemVariants}
        >
          <div className="col-md-8">
            <motion.div
              className="cta-card p-4 rounded text-center"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1rem",
                transition: "all 0.3s ease",
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="mb-4"
                style={{ color: "white", fontSize: "2rem" }}
                variants={itemVariants}
              >
                Ready to work together?
              </motion.h3>
              <motion.p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                }}
                variants={itemVariants}
              >
                Let's collaborate on your next project and bring innovative
                ideas to life.
              </motion.p>
              <motion.a
                href="#contact"
                className="btn btn-primary px-4 py-2"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  color: "white",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
