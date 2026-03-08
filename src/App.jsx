import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Home from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import CTAPage from './pages/CTA';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cta" element={<CTAPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
