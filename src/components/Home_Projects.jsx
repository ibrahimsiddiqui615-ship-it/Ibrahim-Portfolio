import React from "react";
import { Link, useNavigate } from "react-router-dom";

import appLanding from "../assets/images/portfolio/App-Landing-Page.png";
import christmasLanding from "../assets/images/portfolio/Christmas-Landing-Page.png";
import pizzaLanding from "../assets/images/portfolio/Pizza-Landing-Page.png";

const HomeProjects = () => {
  const navigate = useNavigate();

  const projects = [
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
    // {
    //   id: 4,
    //   title: 'Headphones Store',
    //   description: 'E-commerce product page for audio equipment with product showcase and shopping cart',
    //   image: headphones,
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce'],
    //   category: 'E-commerce',
    //   status: 'Completed'
    // },
    // {
    //   id: 5,
    //   title: 'Foodies Restaurant',
    //   description: 'Restaurant website with gallery, menu, reservation system, and modern responsive design',
    //   image: foodies,
    //   technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React'],
    //   category: 'Web Design',
    //   status: 'Completed'
    // },
    // {
    //   id: 6,
    //   title: 'Jewellery Website',
    //   description: 'Jewellery website showcasing projects, skills, and experience with modern design',
    //   image: portfolioSite,
    //   technologies: ['React', 'CSS3', 'JavaScript', 'Responsive'],
    //   category: 'E-commerce',
    //   status: 'Completed'
    // }
  ];

  const handleViewProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section id="projects" className="projects-section ">
      <div className="container">
        <div className="row justify-content-center mb-4 mb-md-5">
          <div className="col-12 text-center">
            <h2 className="section-title display-5 display-md-4 mb-3">
              PROJECTS
            </h2>
            <p className="section-subtitle lead mb-0">
              A showcase of my recent work and creative projects
            </p>
          </div>
        </div>

        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-5">
              <div className="project-card h-100 d-flex flex-column">
                <div
                  className="project-header flex-shrink-0 overflow-hidden"
                  style={{ position: "relative" }}
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-20px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  />
                  <div className="project-status position-absolute top-0 end-0 m-3">
                    <span
                      className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content flex-grow-1 d-flex flex-column">
                  <div className="project-category">
                    <i className="fas fa-folder"></i>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description flex-grow-1">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions mt-auto">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewProject(project.id)}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="view-more">
              <Link
                to="/projects"
                className="btn btn-primary btn-lg px-5 py-3"
                style={{ color: "#fff", borderColor: "#007bff" }}
              >
                <i className="fas fa-eye me-2"></i>
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
