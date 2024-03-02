import React from 'react';
import './Banner.css';
import cricleText from './text-cricle-white.png';
import icon from './icon-white.png';
import ThreeD from '../ThreeD/ThreeD';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-list">
            <div className="banner-content">
              <h1 className="banner-tittle">
                We are <br /> the story
              </h1>
              <p className="banner-job">2D Motion Graphic</p>
              <p className="banner-job">Video Production</p>
              <p className="banner-job">Brand Identity</p>
              <button className="banner-button">
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
          </div>
          <div className="banner-3d">
            <ThreeD></ThreeD>
          </div>
        </div>
        <div className="banner-bottom">
          <div className="banner-company">
            <div className="banner-info">
              <p className="banner-name">Contact us</p>
              <p className="banner-address">TheChuck@gmail.com</p>
            </div>
            <div className="banner-info">
              <p className="banner-name">DESIGN-DRIVEN</p>
              <p className="banner-address">AGENCY</p>
            </div>
          </div>
          <p className="banner-desc">
            The creative team specializes in elevating technology startups, 2D
            Motion Graphics, Video Production, Brand Identity Design Web Design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
