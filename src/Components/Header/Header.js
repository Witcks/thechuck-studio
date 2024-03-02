import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      const position = window.scrollY;
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
            <Link
              to="/"
              className="header-logo">
              <img
                src={logo}
                alt=""
                className={`header-logo-img ${isDarkMode ? 'dark-mode' : ''}`}
              />
            </Link>
            <div className="hearder-list">
              <Link
                to="/contact"
                className={`header-contact ${isOpen ? 'is-show' : ''} ${
                  isDarkMode ? 'dark-mode' : ''
                } ${isGreenMode ? 'green' : ''}`}>
                <span>Start a project</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
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
              <Link
                to="/work"
                className="menu-left-link">
                Work
              </Link>
            </li>
            <li className="menu-left-item">
              <span className="menu-left-link">Services</span>
              <ul className="menu-left-dropdown">
                <li className="menu-left-service">
                  <Link
                    to="/2d-motion-graphic"
                    className="menu-service-link"
                    onClick={toggleMenu}>
                    2D Motion Graphic
                  </Link>
                </li>
                <li className="menu-left-service">
                  <Link
                    to="/video-production"
                    className="menu-service-link"
                    onClick={toggleMenu}>
                    Video Production
                  </Link>
                </li>
                <li className="menu-left-service">
                  <Link
                    to="/brand-identity"
                    className="menu-service-link"
                    onClick={toggleMenu}>
                    Brand Identity
                  </Link>
                </li>
                <li className="menu-left-service">
                  <Link
                    to="/web-design"
                    className="menu-service-link"
                    onClick={toggleMenu}>
                    Web Design
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-left-item">
              <Link
                to="/about"
                className="menu-left-link">
                Agency
              </Link>
            </li>
            <li className="menu-left-item">
              <Link
                to="/blog"
                className="menu-left-link">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="menu-right">
            <li className="menu-right-item">
              <Link
                to="?"
                className="menu-right-link">
                Instagram
              </Link>
            </li>
            <li className="menu-right-item">
              <Link
                to="?"
                className="menu-right-link">
                Linkedin
              </Link>
            </li>
            <li className="menu-right-item">
              <Link
                to="?"
                className="menu-right-link">
                Behance
              </Link>
            </li>
            <li className="menu-right-item">
              <Link
                to="?"
                className="menu-right-link">
                Dribbble
              </Link>
            </li>
            <li className="menu-right-item">
              <Link
                to="?"
                className="menu-right-link">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
