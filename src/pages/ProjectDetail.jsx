import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import appLanding from '../assets/images/portfolio/App-Landing-Page.png';
import christmasLanding from '../assets/images/portfolio/Christmas-Landing-Page.png';
import pizzaLanding from '../assets/images/portfolio/Pizza-Landing-Page.png';
import headphones from '../assets/images/portfolio/HeadPhones.png';
import foodies from '../assets/images/portfolio/Foodies.png';
import portfolioSite from '../assets/images/portfolio/Ecommerce-Jewellery-Website.png';
import eCommerceWebsite from '../assets/images/portfolio/E-Commerce-Website-Using-Bootstap-5.png';
import hashtagLandingPage from '../assets/images/portfolio/Hashtag-Landing-Page.png';
import Loader from '../components/Loader';


// Sample projects data - ideally this should be imported from a shared data file or fetched from API
const projects = [
  {
    id: 1,
    title: 'App Landing Page',
    description: 'Modern landing page for mobile applications with responsive design and smooth animations',
    image: appLanding
  },
  {
    id: 2,
    title: 'Christmas Landing Page',
    description: 'Festive holiday-themed landing page with beautiful animations and interactive elements',
    image: christmasLanding
  },
  {
    id: 3,
    title: 'Pizza Landing Page',
    description: 'Restaurant landing page with menu showcase, ordering system, and modern UI design',
    image: pizzaLanding
  },
  {
    id: 4,
    title: 'Headphones Store',
    description: 'E-commerce product page for audio equipment with product showcase and shopping cart',
    image: headphones
  },
  {
    id: 5,
    title: 'Foodies Restaurant',
    description: 'Restaurant website with gallery, menu, reservation system, and modern responsive design',
    image: foodies
  },
  {
    id: 6,
    title: 'Jewellery Website',
    description: 'Jewellery website showcasing projects, skills, and experience with modern design',
    image: portfolioSite
  },
  {
    id: 7,
    title: 'E-Commerce Fashion Website',
    description: 'Modern e-commerce website for women’s fashion built using Bootstrap 5, featuring product listings, discount offers, and testimonials.',
    image: eCommerceWebsite
  },
  {
    id: 8,
    title: 'Hashtag Landing Page',
    description: 'Creative digital marketing landing page with smooth sections for features, pricing plans, testimonials, and FAQs designed with modern UI/UX.',
    image: hashtagLandingPage
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <>
        {/* <Navbar /> */}
        <Loader/>
        <div className="container my-5">
          <h2>Project not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/projects')}>
            Back to Projects
          </button>
        </div>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="container my-5">
        {/* <h2>{project.title}</h2> */}
        <img src={project.image} alt={project.title} className="img-fluid mb-4" />
        <p>{project.description}</p>
        <button className="btn btn-primary" onClick={() => navigate('/projects')}>
         <i className="bi bi-arrow-left"></i>  Back to Projects
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProjectDetail;
