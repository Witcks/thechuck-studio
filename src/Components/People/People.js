import React, { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './People.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const People = ({
  heading = '', // Giá trị mặc định cho tiêu đề
  title = [], // Mảng các chuỗi cho phần reveal
  contentA = '', // Mảng các chuỗi cho phần mô tả
  contentB = '', // Mảng các chuỗi cho phần mô tả
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    if (window.innerWidth >= 1280) {
      setIsDarkMode(position >= 2450);
    } else if (window.innerWidth >= 1024) {
      setIsDarkMode(position >= 2640);
    } else {
      setIsDarkMode(position >= 2260);
    }
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
          <h3 className="people-heading">{heading}</h3>
          <div className="people-desc">
            <div className="people-mark">
              {title.map((text, index) => (
                <div
                  key={index}
                  className="people-mark">
                  <p
                    className="reveal-type"
                    data-bg-color="#cccccc"
                    data-fg-color="#000000">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="people-list">
              <p className={`people-text ${isDarkMode ? 'dark-mode' : ''}`}>
                {contentA}
              </p>
              <p className={`people-text ${isDarkMode ? 'dark-mode' : ''}`}>
                {contentB}
              </p>
            </div>
            <Link
              to="/work"
              className={`people-button ${isDarkMode ? 'dark-mode' : ''}`}>
              <span>Discover our work</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
