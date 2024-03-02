import React, { useEffect, useState } from 'react';
import './ServiceProcedure.css';

const ServiceProcedure = ({
  determineDarkMode,
  top = '',
  items = [], // Đổi tên prop thành items cho rõ ràng
  bottom = '',
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const position = window.scrollY;
      const shouldActivateDarkMode = determineDarkMode(position);
      setIsDarkMode(shouldActivateDarkMode);
    };

    window.addEventListener('scroll', updateDarkMode);
    return () => window.removeEventListener('scroll', updateDarkMode);
  }, [determineDarkMode]);

  return (
    <section className={`service-procedure ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h3 className="service-procedure-heading">{top}</h3>
        <div className="service-procedure-list">
          {items.map((content, index) => (
            <div
              className="service-procedure-item"
              key={index}>
              <img
                src={content.icon}
                alt=""
                className="service-procedure-icon"
              />
              <h4 className="service-procedure-title">{content.title}</h4>
              <p className="service-procedure-desc">{content.desc}</p>
            </div>
          ))}
        </div>
        <p className="service-procedure-text">Our Work</p>
        <h3 className="service-procedure-work">{bottom}</h3>
      </div>
    </section>
  );
};

export default ServiceProcedure;
