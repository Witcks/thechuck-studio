import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service-header">
          <h5 className="service-tittle">Our Services</h5>
          <div className="service-intro">
            <h3 className="service-heading">How do we build your story?</h3>
            <p className="service-text">
              From cubs seeking growth to alphas reclaiming digital dominance,
              we emerge as a design agency, sculpting tailored digital creative
              services, and other solutions. We guarantee a custom approach for
              each partner.
            </p>
          </div>
        </div>
        <div className="service-list">
          <ul>
            <li className="service-item">
              <Link
                to="/2d-motion-graphic"
                className="service-link">
                <span>01</span>
                2D Motion Graphic
                <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
            <li className="service-item">
              <Link
                to="/video-production"
                className="service-link">
                {' '}
                <span>02</span> Video Production
                <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
            <li className="service-item">
              <Link
                to="/brand-identity"
                className="service-link">
                {' '}
                <span>03</span> Brand Identity{' '}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
            <li className="service-item">
              <Link
                to="/web-design"
                className="service-link">
                {' '}
                <span>04</span> Web Design{' '}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
