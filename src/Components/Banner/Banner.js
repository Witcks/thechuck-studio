import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-list">
          <div className="banner-content">
            <h1 className="banner-tittle">
              We are <br /> the story
            </h1>
            <p className="banner-job">Graphic Design</p>
            <p className="banner-job">Production</p>
            <p className="banner-job">Website</p>
            <button className="banner-button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="banner-3d"></div>
      </div>
    </div>
  );
};

export default Banner;
