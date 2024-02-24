import React from 'react';
import './BannerContact.css';

const BannerContact = () => {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="contact-banner-top">
          <h1 className="contact-banner-heading">Let’s work together</h1>
        </div>
        <div className="contact-banner-bottom">
          <div className="contact-banner-company">
            <div className="contact-banner-info">
              <p className="contact-banner-name">Based in Viet Nam, TP HCM</p>
              <p className="contact-banner-job">Hard-working</p>
            </div>
            <div className="contact-banner-info">
              <p className="contact-banner-name">DESIGN-DRIVEN</p>
              <p className="contact-banner-job">AGENCY</p>
            </div>
          </div>
          <p className="contact-banner-desc">
            AGENCY Whether we're making the new or transforming the old, we sink
            our teeth in every project and don't let go until we come up with
            the best <br /> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerContact;
