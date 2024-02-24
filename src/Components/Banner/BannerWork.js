import React from 'react';
import './BannerWork.css';
import cricleText from './text-cricle-white.png';
import icon from './icon-white.png';

const BannerWork = () => {
  return (
    <section className="work-banner">
      <div className="container">
        <div className="work-banner-top">
          <h1 className="work-banner-heading">
            Projects we’ve brought to life
          </h1>
          <button className="work-banner-button">
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
        <div className="work-banner-bottom">
          <div className="work-banner-company">
            <div className="work-banner-info">
              <p className="work-banner-name">Based in Viet Nam, TP HCM</p>
              <p className="work-banner-job">Hard-working</p>
            </div>
            <div className="work-banner-info">
              <p className="work-banner-name">DESIGN-DRIVEN</p>
              <p className="work-banner-job">AGENCY</p>
            </div>
          </div>
          <p className="work-banner-desc">
            AGENCY Whether we're making the new or transforming the old, we sink
            our teeth in every project and don't let go until we come up with
            the best <br /> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerWork;
