import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5", level: 95, color: "#e34f26" },
        { name: "CSS3", level: 90, color: "#1572b6" },
        { name: "JavaScript", level: 85, color: "#f7df1e" },
        { name: "React", level: 88, color: "#61dafb" },
      ],
    },
    {
      title: "Styling & Frameworks",
      icon: "fas fa-palette",
      skills: [
        { name: "Tailwind CSS", level: 92, color: "#06b6d4" },
        { name: "Bootstrap", level: 85, color: "#7952b3" },
        { name: "SASS/SCSS", level: 80, color: "#cc6699" },
        { name: "Responsive Design", level: 95, color: "#4caf50" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Git & GitHub", level: 90, color: "#f05032" },
        { name: "VS Code", level: 95, color: "#007acc" },
        { name: "Figma", level: 75, color: "#f24e1e" },
        { name: "Node.js", level: 70, color: "#339933" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, rootMargin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className="col-sm-12 text-center mb-5"
            variants={itemVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              SKILLS & TECHNOLOGIES
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </motion.div>
          <motion.div className="row" variants={containerVariants}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="col-lg-4 col-md-6 mb-5"
                variants={itemVariants}
              >
                <motion.div
                  className="skill-category"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="category-header"
                    variants={itemVariants}
                  >
                    <div className="category-icon">
                      <i className={category.icon}></i>
                    </div>
                    <h3 className="category-title">{category.title}</h3>
                  </motion.div>

                  <motion.div
                    className="skills-list"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        variants={itemVariants}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            style={{
                              backgroundColor: skill.color,
                            }}
                            variants={progressVariants}
                            custom={skill.level}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="row mt-5" variants={itemVariants}>
            <div className="col-sm-12">
              <motion.div className="tech-stack" variants={itemVariants}>
                <motion.h3 className="tech-stack-title" variants={itemVariants}>
                  Technology Stack
                </motion.h3>
                <motion.div className="tech-icons" variants={containerVariants}>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-html5"></i>
                    <span>HTML5</span>
                  </motion.div>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-css3-alt"></i>
                    <span>CSS3</span>
                  </motion.div>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-js-square"></i>
                    <span>JavaScript</span>
                  </motion.div>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-react"></i>
                    <span>React</span>
                  </motion.div>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-bootstrap"></i>
                    <span>Bootstrap</span>
                  </motion.div>
                  <motion.div
                    className="tech-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fab fa-git-alt"></i>
                    <span>Git</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
