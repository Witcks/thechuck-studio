import React, { useEffect, useState } from 'react';
import './ServiceProcedure.css';

const ServiceProcedure = ({ determineDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const position = window.pageYOffset;
      const shouldActivateDarkMode = determineDarkMode(position);
      setIsDarkMode(shouldActivateDarkMode);
    };

    window.addEventListener('scroll', updateDarkMode);
    return () => window.removeEventListener('scroll', updateDarkMode);
  }, [determineDarkMode]);
  return (
    <section className={`service-procedure ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h3 className="service-procedure-heading">
          What you get with our <br /> 2D Motion Graphic
        </h3>
        <div className="service-procedure-list">
          <div className="service-procedure-item">
            <img
              src="https://assets-global.website-files.com/6399db4313c7980ffe940ca2/65400cc71e8983a93fefd6ae_Webflow%20Design.svg"
              alt=""
              className="service-procedure-icon"
            />
            <h4 className="service-procedure-tittle">Heading 1</h4>
            <p className="service-procedure-dessc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti repellendus architecto fugit nobis excepturi laudantium
              fuga sit, eligendi nesciunt nisi fugiat soluta inventore
              voluptatibus possimus?
            </p>
          </div>
          <div className="service-procedure-item">
            <img
              src="https://assets-global.website-files.com/6399db4313c7980ffe940ca2/65400cd35420a3364e23f8a7_Webflow%20Dev.svg"
              alt=""
              className="service-procedure-icon"
            />
            <h4 className="service-procedure-tittle">Heading 2</h4>
            <p className="service-procedure-dessc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti repellendus architecto fugit nobis excepturi laudantium
              fuga sit, eligendi nesciunt nisi fugiat soluta inventore
              voluptatibus possimus?
            </p>
          </div>
          <div className="service-procedure-item">
            <img
              src="https://assets-global.website-files.com/6399db4313c7980ffe940ca2/65400cdb466f46e4601cf3e0_Webflow%20Migration.svg"
              alt=""
              className="service-procedure-icon"
            />
            <h4 className="service-procedure-tittle">Heading 3</h4>
            <p className="service-procedure-dessc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti repellendus architecto fugit nobis excepturi laudantium
              fuga sit, eligendi nesciunt nisi fugiat soluta inventore
              voluptatibus possimus?
            </p>
          </div>
        </div>
        <p className="service-procedure-text">Out Work</p>
        <h3 className="service-procedure-work">
          Our 2D Motion <br /> Graphic projects
        </h3>
      </div>
    </section>
  );
};

export default ServiceProcedure;
