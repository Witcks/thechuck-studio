import React from 'react';
import './BannerService.css';

const BannerService = ({ heading = '', content = '' }) => {
  return (
    <section className="service-banner">
      <div className="container">
        <div className="service-banner-top">
          <h1 className="service-banner-heading">{heading}</h1>
        </div>
        <div className="service-banner-bottom">
          <div className="service-banner-company">
            <div className="service-banner-info">
              <p className="service-banner-name">Based in Viet Nam, TP HCM</p>
              <p className="service-banner-job">Hard-working</p>
            </div>
            <div className="service-banner-info">
              <p className="service-banner-name">DESIGN-DRIVEN</p>
              <p className="service-banner-job">AGENCY</p>
            </div>
          </div>
          <p className="service-banner-desc">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default BannerService;
