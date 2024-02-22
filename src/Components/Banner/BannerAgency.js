import React from 'react';
import './BannerAgency.css';
import cricleText from './text-cricle-white.png';
import icon from './icon-white.png';

const BannerAgency = () => {
  return (
    <section className="agency-banner">
      <div className="container">
        <div className="agency-banner-top">
          <h1 className="agency-banner-heading">
            TheChuck. Talents brought together.
          </h1>
          <button className="agency-banner-button">
            <img
              src={cricleText}
              alt=""
              className="cricle"
            />
            <img
              src={icon}
              alt=""
              className="icon"
            />
          </button>
        </div>
        <div className="agency-banner-bottom">
          <div className="agency-banner-company">
            <div className="agency-banner-info">
              <p className="agency-banner-name">Based in Viet Nam, TP HCM</p>
              <p className="agency-banner-job">Hard-working</p>
            </div>
            <div className="agency-banner-info">
              <p className="agency-banner-name">DESIGN-DRIVEN</p>
              <p className="agency-banner-job">AGENCY</p>
            </div>
          </div>
          <p className="agency-banner-desc">
            AGENCY Whether we're making the new or transforming the old, we sink
            our teeth in every project and don't let go until we come up with
            the best <br /> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerAgency;
