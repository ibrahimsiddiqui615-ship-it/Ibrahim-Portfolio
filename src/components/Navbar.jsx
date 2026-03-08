import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", id: "/" },
    { path: "/about", label: "About", id: "/about" },
    { path: "/skills", label: "Skills", id: "/skills" },
    { path: "/projects", label: "Projects", id: "/projects" },
    { path: "/contact", label: "Contact", id: "/contact" },
  ];

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? "header-scrolled" : ""}`}
      style={{ 
        background: isScrolled ? "#0f0f23" : "transparent",
        transition: "all 0.3s ease",
        padding: isScrolled ? "0.5rem 0" : "1rem 0"
      }}
    >
      <div className="container">
        <Link className="navbar-brand brand-button" to="/">
          <span className="brand-name">Ibrahim Siddiqui</span>
        </Link>
        
        {/* Custom Hamburger Button */}
        <button 
          className={`navbar-toggler ${mobileOpen ? 'open' : ''}`}
          type="button" 
          onClick={toggleMobile}
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            padding: '0.5rem',
            background: 'transparent'
          }}
        >
          <span style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            cursor: 'pointer'
          }}>
            <span style={{
              width: '25px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></span>
            <span style={{
              width: '25px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1
            }}></span>
            <span style={{
              width: '25px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }}></span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  id={item.id}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="d-lg-none"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#0f0f23',
              borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
              padding: '1rem 0'
            }}
          >
            <ul className="navbar-nav ms-auto text-center">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                    id={item.id}
                    style={{ padding: '1rem' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
