import React from 'react';
import './BannerService.css';

const BannerService = () => {
  return (
    <section className="service-banner">
      <div className="container">
        <div className="service-banner-top">
          <h1 className="service-banner-heading">Web Design</h1>
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
          <p className="service-banner-desc">
            AGENCY Whether we're making the new or transforming the old, we sink
            our teeth in every project and don't let go until we come up with
            the best <br /> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerService;
