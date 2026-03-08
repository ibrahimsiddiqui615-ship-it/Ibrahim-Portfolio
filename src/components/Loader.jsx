import { useState, useEffect } from "react";

export default function PortfolioLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const increment = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
          }, 400);
          return 100;
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  // const handleSkip = () => {
  //   setIsLoading(false);
  // };

  if (!isLoading) return null;

  return (
    <>
      <div className="loader-container" id="loader">
        {/* Background Orbs */}
        <div className="bg-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Loader Content */}
        <div className="loader-content">
          {/* Logo Animation */}
          <div className="logo-container">
            <div className="logo-circle"></div>
            <div className="logo-circle"></div>
            <div className="logo-symbol">P</div>
          </div>

          {/* Brand Name */}
          {/* <h1 className="brand-name"></h1> */}

          {/* Tagline */}
          {/* <p className="tagline"></p> */}

          {/* Progress Section */}
          <div className="progress-section">
            {/* Progress Bar */}
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                id="progressBar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Loading Text */}
            <div className="loading-text">
              <span>Loading</span>
              <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Percentage */}
        <div className="percentage" id="percentage">
          {Math.round(progress)}%
        </div>

        {/* Skip Button */}
        {/* <button className="skip-button" id="skipBtn" onClick={handleSkip}>
          Skip Intro
        </button> */}
      </div>

      <style>{`
        /* CSS Variables for Modern Theme */
        :root {
          --primary-gradient: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
          --secondary-gradient: linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #8b5cf6 100%);
          --bg-dark: rgb(15, 15, 35, 0.9);
          --bg-glass: rgba(15, 0, 35, 0.8);
          --bg-hover: rgba(255, 255, 255, 0.1);
          --text-primary: #f9fafb;
          --text-primary-semi: rgba(249, 250, 251, 0.8);
          --text-secondary: #d1d5db;
          --text-accent: #c084fc;
          --accent-color: #8b5cf6;
          --accent-bg: rgba(139, 92, 246, 0.1);
          --border-light: rgba(75, 85, 99, 0.3);
          --shadow-glow: 0 0 20px rgba(139, 92, 246, 0.2);
          --shadow-hover: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        /* Loader Container */
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0f23 0%, #1a0b2e 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }

        .loader-container.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        /* Subtle Background Animation */
        .bg-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 0.4;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
          top: -10%;
          left: -5%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
          bottom: -10%;
          right: -5%;
          animation-delay: -10s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(50px, -50px);
          }
          66% {
            transform: translate(-50px, 50px);
          }
        }

        /* Main Content */
        .loader-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 500px;
          padding: 0 20px;
        }

        /* Logo/Initial Animation */
        .logo-container {
          width: 120px;
          height: 120px;
          margin: 0 auto 40px;
          position: relative;
        }

        .logo-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-radius: 50%;
          border-top-color: #8b5cf6;
          border-right-color: #06b6d4;
          animation: rotate 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        .logo-circle:nth-child(2) {
          border-top-color: #06b6d4;
          border-right-color: #a855f7;
          animation-direction: reverse;
          animation-duration: 3s;
        }

        /* Center Logo Symbol */
        .logo-symbol {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          background: var(--primary-gradient);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        /* Brand Name */
        .brand-name {
          font-size: 2rem;
          font-weight: 700;
          background: var(--primary-gradient);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
          letter-spacing: 0.05em;
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tagline */
        .tagline {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          animation: slideUp 0.6s ease-out 0.2s backwards;
        }

        /* Progress Section */
        .progress-section {
          animation: slideUp 0.6s ease-out 0.4s backwards;
        }

        /* Elegant Progress Bar */
        .progress-bar-container {
          width: 100%;
          max-width: 400px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          margin: 0 auto 20px;
        }

        .progress-bar {
          height: 100%;
          background: var(--primary-gradient);
          border-radius: 10px;
          position: relative;
          transition: width 0.3s ease-out;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: -4px;
          right: -4px;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        /* Loading Text */
        .loading-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .loading-dots {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: var(--accent-color);
          border-radius: 50%;
          animation: dotBounce 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }

        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Percentage Counter */
        .percentage {
          // position: absolute;
          // bottom: 60px;
          // left: 50%;
          // transform: translateX(-50%);
          // font-size: 0.75rem;
          // color: var(--text-accent);
          // font-weight: 600;
          // letter-spacing: 0.1em;
          // opacity: 0.8;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-accent);
          margin-top: 15px;
        }

        /* Skip Button */
        .skip-button {
          position: absolute;
          bottom: 30px;
          right: 30px;
          padding: 10px 20px;
          background: transparent;
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          font-size: 0.875rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .skip-button:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }

        /* Demo Content */
        .demo-content {
          display: none;
          text-align: center;
          color: var(--text-primary);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f0f23 0%, #1a0b2e 100%);
        }

        .demo-content.show {
          display: flex;
          animation: fadeIn 0.8s ease;
        }

        .demo-content h1 {
          font-size: 3rem;
          background: var(--primary-gradient);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .demo-content p {
          color: var(--text-secondary);
          font-size: 1.125rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo-container {
            width: 100px;
            height: 100px;
          }

          .logo-symbol {
            width: 50px;
            height: 50px;
            font-size: 1.75rem;
          }

          .brand-name {
            font-size: 1.75rem;
          }

          .tagline {
            font-size: 0.875rem;
          }

          .progress-bar-container {
            max-width: 300px;
          }

          .demo-content h1 {
            font-size: 2rem;
          }

          .skip-button {
            bottom: 20px;
            right: 20px;
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .percentage {
            bottom: 80px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
        .orb {
          animation: float 20s infinite ease-in-out !important;
        }

        .logo-circle {
          animation: rotate 2s linear infinite !important;
        }

        .dot {
          animation: dotBounce 1.4s infinite ease-in-out !important;
        }
  }
      `}</style>
    </>
  );
}
