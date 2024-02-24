import React, { useCallback, useEffect, useState } from 'react';
import About from '../About/About';
import './Team.css';
import brand from '../Header/logo.png';

const Team = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    console.log(position);
    setIsDarkMode(position >= 6500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <section className={`team ${isDarkMode ? 'dark-mode' : ''}`}>
      <About></About>
      <div className="container">
        <div className="team-top">
          <h3 className="team-heading">We got some achievenments</h3>
          <div className="team-img">
            <img
              src={brand}
              alt=""
              className={`team-img-item ${isDarkMode ? 'dark-mode' : ''}`}
            />
            <img
              src={brand}
              alt=""
              className={`team-img-item ${isDarkMode ? 'dark-mode' : ''}`}
            />
            <img
              src={brand}
              alt=""
              className={`team-img-item ${isDarkMode ? 'dark-mode' : ''}`}
            />
            <img
              src={brand}
              alt=""
              className={`team-img-item ${isDarkMode ? 'dark-mode' : ''}`}
            />
          </div>
        </div>
        <div className="team-intro">
          <h2 className="team-title">Our international remote wolf pack</h2>
          <p className="team-meet">
            Meet the incredible members, <br /> behind devolfs agency.
          </p>
        </div>
        <div className="team-user">
          <div className="team-user-info">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="team-user-img"
            />
            <div className="team-user-person">
              <h3 className="team-user-name">Đình Trúc</h3>
              <p className="team-uset-position">Founder, Head of motion</p>
            </div>
          </div>
          <div className="team-user-info">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="team-user-img"
            />
            <div className="team-user-person right">
              <h3 className="team-user-name">Đình Trúc</h3>
              <p className="team-uset-position">Founder, Head of motion</p>
            </div>
          </div>
          <div className="team-user-info">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="team-user-img"
            />
            <div className="team-user-person">
              <h3 className="team-user-name">Đình Trúc</h3>
              <p className="team-uset-position">Founder, Head of motion</p>
            </div>
          </div>
          <div className="team-user-info">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="team-user-img"
            />
            <div className="team-user-person right">
              <h3 className="team-user-name">Đình Trúc</h3>
              <p className="team-uset-position">Founder, Head of motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
