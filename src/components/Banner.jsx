import React from "react";
import bannerImage from "../assets/images/profile.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="banner_wrapper animate__animated animate__fadeInDown"
      style={{ background: "#fff", padding: "80px 0 60px 0" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 order-lg-1 order-2 text-lg-start text-center mb-5 mb-lg-0">
            <h2
              style={{
                fontWeight: 700,
                fontSize: 36,
                color: "#222",
                marginBottom: 12,
              }}
            >
              Hi, I'm
            </h2>
            <h1
              style={{
                fontWeight: 800,
                fontSize: 48,
                color: "#007bff",
                marginBottom: 18,
              }}
            >
              Ibrahim Siddiqui
            </h1>
            <h4 style={{ fontWeight: 600, color: "#444", marginBottom: 24 }}>
              Professional Web Developer
            </h4>
            <p
              style={{
                fontSize: 20,
                color: "#555",
                maxWidth: 520,
                margin: "0 auto 32px auto",
              }}
            >
              I specialize in building modern, scalable, and user-centric web
              applications using React, JavaScript, and the latest frontend
              technologies.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-lg-start justify-content-center">
              <a href="#projects" className="btn btn-primary btn-lg px-4">
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2 order-1 text-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src={bannerImage}
                alt="Ibrahim Siddiqui - Web Developer"
                style={{
                  width: 210,
                  height: 210,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #eaeaea",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  background: "#f8f9fa",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .btn-primary {
          font-weight: 600;
          font-size: 1.1rem;
        }
        .btn-outline-primary {
          font-weight: 600;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Banner;
