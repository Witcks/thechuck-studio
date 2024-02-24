import React from 'react';
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
              <a
                href="/2d-motion-graphic"
                className="service-link">
                <span>01</span>
                2D Motion Graphic
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/video-production"
                className="service-link">
                {' '}
                <span>02</span> Video Production
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/brand-identity"
                className="service-link">
                {' '}
                <span>03</span> Brand Identity{' '}
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/web-design"
                className="service-link">
                {' '}
                <span>04</span> Web Design{' '}
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/ui-ux-design"
                className="service-link">
                {' '}
                <span>05</span> UI/UX Design{' '}
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
