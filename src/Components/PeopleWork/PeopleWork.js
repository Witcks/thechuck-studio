import React, { useEffect, useState } from 'react';
import './PeopleWork.css';

const People = ({ determineDarkMode }) => {
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
    <section className={`people ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="people-work">
          <div className="people-work-list">
            <div className="people-work-item">
              <img
                src="https://images.unsplash.com/photo-1543145223-1f9043516739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="people-work-img"
              />
              <h3
                className={`people-work-tittle ${
                  isDarkMode ? 'dark-mode' : ''
                }`}>
                NewYear Job 2024
              </h3>
              <p className={`people-work-job ${isDarkMode ? 'dark-mode' : ''}`}>
                Brand TheChuck,Motion Graphic & Visual
              </p>
            </div>
            <div className="people-work-item">
              <img
                src="https://images.unsplash.com/photo-1543145223-1f9043516739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="people-work-img"
              />
              <h3
                className={`people-work-tittle ${
                  isDarkMode ? 'dark-mode' : ''
                }`}>
                NewYear Job 2024
              </h3>
              <p className={`people-work-job ${isDarkMode ? 'dark-mode' : ''}`}>
                Brand TheChuck,Motion Graphic & Visual
              </p>
            </div>
            <div className="people-work-item">
              <img
                src="https://images.unsplash.com/photo-1543145223-1f9043516739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="people-work-img"
              />
              <h3
                className={`people-work-tittle ${
                  isDarkMode ? 'dark-mode' : ''
                }`}>
                NewYear Job 2024
              </h3>
              <p className={`people-work-job ${isDarkMode ? 'dark-mode' : ''}`}>
                Brand TheChuck, Motion Graphic & Visual
              </p>
            </div>
            <div className="people-work-item">
              <img
                src="https://images.unsplash.com/photo-1543145223-1f9043516739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="people-work-img"
              />
              <h3
                className={`people-work-tittle ${
                  isDarkMode ? 'dark-mode' : ''
                }`}>
                NewYear Job 2024
              </h3>
              <p className={`people-work-job ${isDarkMode ? 'dark-mode' : ''}`}>
                Brand TheChuck,Motion Graphic & Visual
              </p>
            </div>
          </div>
          <a
            href="/work"
            className={`people-bottom ${isDarkMode ? 'dark-mode' : ''}`}>
            <span className="more">More project</span>
            <span className="just">Just click</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default People;
