import React, { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './People.css';

gsap.registerPlugin(ScrollTrigger);

const People = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setIsDarkMode(position >= 2450);
  }, []);

  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');
    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;
      const text = new SplitType(char, { types: 'chars' });
      gsap.fromTo(
        text.chars,
        { color: bg },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [handleScroll]);
  return (
    <section className={`people ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="people-content">
          <h3 className="people-heading">People we help</h3>
          <div className="people-desc">
            <div className="people-mark">
              <p
                className="reveal-type"
                data-bg-color="#cccccc"
                data-fg-color="#000000">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                corrupti repellendus architecto fugit
              </p>
            </div>
            <div className="people-list">
              <p className={`people-text ${isDarkMode ? 'dark-mode' : ''}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                corrupti repellendus architecto fugit nobis excepturi laudantium
                fuga sit, eligendi nesciunt nisi fugiat soluta inventore
                voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Sint corrupti
                repellendus architecto fugit nobis excepturi laudantium fuga
                sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus
                possimus? Laboriosam quis natus dolores.
              </p>
              <p className={`people-text ${isDarkMode ? 'dark-mode' : ''}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                corrupti repellendus architecto fugit nobis excepturi laudantium
                fuga sit, eligendi nesciunt nisi fugiat soluta inventore
                voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Sint corrupti
                repellendus architecto fugit nobis excepturi laudantium fuga
                sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus
                possimus? Laboriosam quis natus dolores.
              </p>
            </div>
            <a
              href="/work"
              className={`people-button ${isDarkMode ? 'dark-mode' : ''}`}>
              <span>Discover our work</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
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
