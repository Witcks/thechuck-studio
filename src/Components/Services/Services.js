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
                href="/service"
                className="service-link">
                <span>01</span>
                Service
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/service"
                className="service-link">
                {' '}
                <span>02</span> Service <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/service"
                className="service-link">
                {' '}
                <span>03</span> Service <i className="fas fa-arrow-right"></i>
              </a>
            </li>
            <li className="service-item">
              <a
                href="/service"
                className="service-link">
                {' '}
                <span>04</span> Service <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
