import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import images
import appLanding from "../assets/images/portfolio/App-Landing-Page.png";
import christmasLanding from "../assets/images/portfolio/Christmas-Landing-Page.png";
import pizzaLanding from "../assets/images/portfolio/Pizza-Landing-Page.png";
import headphones from "../assets/images/portfolio/HeadPhones.png";
import foodies from "../assets/images/portfolio/Foodies.png";
import portfolioSite from "../assets/images/portfolio/Ecommerce-Jewellery-Website.png";
import eCommerceWebsite from "../assets/images/portfolio/E-Commerce-Website-Using-Bootstap-5.png";
import hashtagLandingPage from "../assets/images/portfolio/Hashtag-Landing-Page.png";

// 👈 add CSS below

const Projects = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: "App Landing Page",
          description:
            "Modern landing page for mobile applications with responsive design and smooth animations",
          image: appLanding,
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive",
            "React",
            "Bootstrap",
          ],
          category: "Web Design",
          status: "Completed",
        },
        {
          id: 2,
          title: "Christmas Landing Page",
          description:
            "Festive holiday-themed landing page with beautiful animations and interactive elements",
          image: christmasLanding,
          technologies: ["HTML5", "CSS3", "JavaScript", "Animations"],
          category: "Frontend",
          status: "Completed",
        },
        {
          id: 3,
          title: "Pizza Landing Page",
          description:
            "Restaurant landing page with menu showcase, ordering system, and modern UI design",
          image: pizzaLanding,
          technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
          category: "E-commerce",
          status: "Completed",
        },
        {
          id: 4,
          title: "Headphones Store",
          description:
            "E-commerce product page for audio equipment with product showcase and shopping cart",
          image: headphones,
          technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
          category: "E-commerce",
          status: "Completed",
        },
        {
          id: 5,
          title: "Foodies Restaurant",
          description:
            "Restaurant website with gallery, menu, reservation system, and modern responsive design",
          image: foodies,
          technologies: [
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "JavaScript",
            "React",
          ],
          category: "Web Design",
          status: "Completed",
        },
        {
          id: 6,
          title: "Jewellery Website",
          description:
            "Jewellery website showcasing projects, skills, and experience with modern design",
          image: portfolioSite,
          technologies: ["React", "CSS3", "JavaScript", "Responsive"],
          category: "E-commerce",
          status: "Completed",
        },
        {
          id: 7,
          title: "E-Commerce Fashion Website",
          description:
            "Modern e-commerce website for women’s fashion built using Bootstrap 5, featuring product listings, discount offers, and testimonials.",
          image: eCommerceWebsite,
          technologies: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript",
            "Responsive",
          ],
          category: "E-commerce",
          status: "Completed",
        },
        {
          id: 8,
          title: "Hashtag Landing Page",
          description:
            "Creative digital marketing landing page with smooth sections for features, pricing plans, testimonials, and FAQs designed with modern UI/UX.",
          image: hashtagLandingPage,
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "Responsive",
          ],
          category: "Landing Page",
          status: "Completed",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleViewProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <motion.section
      id="/projects"
      className="projects-section py-5 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, rootMargin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="row justify-content-center mb-5 text-center"
          variants={itemVariants}
        >
          <div className="col-12">
            <motion.h2
              className="section-title display-5 mb-3 mt-5"
              variants={itemVariants}
            >
              PROJECTS
            </motion.h2>
            <motion.p className="section-subtitle lead" variants={itemVariants}>
              A showcase of my recent work and creative projects
            </motion.p>
          </div>
        </motion.div>

        <div className="row" variants={containerVariants}>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-5">
                  <div className="car skeleton-card h-100">
                    <div className="skeleton skeleton-image card-img-top"></div>
                    <div className="card-body">
                      <div className="skeleton skeleton-title mb-3"></div>
                      <div className="skeleton skeleton-text mb-2"></div>
                      <div className="skeleton skeleton-text mb-2"></div>
                      <div className="skeleton skeleton-tag mt-3"></div>
                    </div>
                  </div>
                </div>
              ))
            : projects.map((project) => (
                <div
                  key={project.id}
                  className="col-lg-4 col-md-6 mb-5"
                  variants={itemVariants}
                >
                  <div
                    className="project-card h-100 d-flex flex-column"
                    variants={itemVariants}
                    whiletap={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="project-header flex-shrink-0 overflow-hidden position-relative"
                      variants={itemVariants}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image img-fluid"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        variants={itemVariants}
                        whiletap={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="project-status position-absolute top-0 end-0 m-3">
                        <span
                          className={`status-badge ${project.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div
                      className="project-content flex-grow-1 d-flex flex-column p-3"
                      variants={itemVariants}
                    >
                      <div className="project-category mb-2">
                        <i className="fas fa-folder me-2"></i>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="project-title" variants={itemVariants}>
                        {project.title}
                      </h3>
                      <p
                        className="project-description flex-grow-1"
                        variants={itemVariants}
                      >
                        {project.description}
                      </p>

                      <div
                        className="project-tech mb-3"
                        variants={containerVariants}
                      >
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="tech-tag"
                            variants={itemVariants}
                            whiletap={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className="project-actions mt-auto"
                        variants={itemVariants}
                      >
                        <button
                          className="btn btn-primary"
                          onClick={() => handleViewProject(project.id)}
                          variants={itemVariants}
                          whiletap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-external-link-alt me-2"></i>
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
