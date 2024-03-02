import React, { useEffect, useState } from 'react';
import './ServiceImage.css';

const ServiceImage = ({ determineDarkMode }) => {
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
    <section className={`service-image ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="service-image-list">
          <img
            src="https://images.unsplash.com/photo-1618303085702-e2f951c2ee55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="service-image-item"
          />
          <img
            src="https://images.unsplash.com/photo-1663941842392-0ce83d95ab0f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="service-image-item"
          />
          <img
            src="https://images.unsplash.com/photo-1699140034809-134593a48a34?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="service-image-item"
          />
          <img
            src="https://images.unsplash.com/photo-1699127435882-1333813a846f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="service-image-item"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceImage;
