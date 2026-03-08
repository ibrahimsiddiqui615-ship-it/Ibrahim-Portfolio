import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      id="cta"
      className="cta-section bg-dark text-white py-5 py-md-6"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center mb-4 mb-md-5">
            <h2
              className="section-title glow-text display-4 display-md-3 mb-3 mb-md-4"
              style={{
                color: "#a855f7",
                textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
              }}
            >
              Let's Build Something Amazing Together
            </h2>
            <p
              className="section-subtitle lead mb-0"
              style={{
                color: "#e0e0e0",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Ready to turn your ideas into reality? Let's discuss your next
              project.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="cta-content text-center">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg neon-glow w-100 w-md-auto px-4 px-md-5 py-3 py-md-4 rounded-pill"
                style={{
                  background:
                    "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(168, 85, 247, 0.3)",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  fontSize: "1.1rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(168, 85, 247, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(168, 85, 247, 0.3)";
                }}
              >
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
