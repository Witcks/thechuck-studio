import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './logo.png';

const Header = ({
  determineDarkMode = () => false,
  determineGreenMode = () => false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGreenMode, setIsGreenMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const position = window.pageYOffset;
      setIsDarkMode(determineDarkMode(position));
      setIsGreenMode(determineGreenMode(position));
    };

    window.addEventListener('scroll', updateDarkMode);
    return () => window.removeEventListener('scroll', updateDarkMode);
  }, [determineDarkMode, determineGreenMode]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <header className="header is-fixed">
        <div className="container-fixed">
          <nav className="header-nav">
            <a
              href="/"
              className="header-logo">
              <img
                src={logo}
                alt=""
                className={`header-logo-img ${isDarkMode ? 'dark-mode' : ''}`}
              />
            </a>
            <div className="hearder-list">
              <a
                href="/contact"
                className={`header-contact ${isOpen ? 'is-show' : ''} ${
                  isDarkMode ? 'dark-mode' : ''
                } ${isGreenMode ? 'green' : ''}`}>
                <span>Start a project</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <button
                className="header-wrap"
                onClick={toggleMenu}>
                <span className="hearder-line line1"></span>
                <span className="hearder-line line2"></span>
                <span className="hearder-line line1"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className={`menu ${isOpen ? 'is-show' : ''}`}>
        <div className="menu-list">
          <ul className="menu-left">
            <li className="menu-left-item">
              <a
                href="/work"
                className="menu-left-link">
                Work
              </a>
            </li>
            <li className="menu-left-item">
              <span className="menu-left-link">Services</span>
              <ul className="menu-left-dropdown">
                <li className="menu-left-service">
                  <a
                    href="/2d-motion-graphic"
                    className="menu-service-link">
                    2D Motion Graphic
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="/video-production"
                    className="menu-service-link">
                    Video Production
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="/brand-identity"
                    className="menu-service-link">
                    Brand Identity
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="/web-design"
                    className="menu-service-link">
                    Web Design
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="/ui-ux-design"
                    className="menu-service-link">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-left-item">
              <a
                href="/about"
                className="menu-left-link">
                Agency
              </a>
            </li>
            <li className="menu-left-item">
              <a
                href="/blog"
                className="menu-left-link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="menu-right">
            <li className="menu-right-item">
              <a
                href="?"
                className="menu-right-link">
                Instagram
              </a>
            </li>
            <li className="menu-right-item">
              <a
                href="?"
                className="menu-right-link">
                Linkedin
              </a>
            </li>
            <li className="menu-right-item">
              <a
                href="?"
                className="menu-right-link">
                Behance
              </a>
            </li>
            <li className="menu-right-item">
              <a
                href="?"
                className="menu-right-link">
                Dribbble
              </a>
            </li>
            <li className="menu-right-item">
              <a
                href="?"
                className="menu-right-link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
