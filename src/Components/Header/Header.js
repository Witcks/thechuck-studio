import React, { useCallback, useEffect, useState } from 'react';
import './Header.css';
import logo from './logo.png';

const Header = (scrollHome, scrollAgency) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateDarkMode = useCallback(() => {
    const position = window.pageYOffset;

    const shouldActivateDarkMode = scrollAgency
      ? position >= 2100 && position <= 10500
      : position >= 2450 && position <= 5200;
    setIsDarkMode(shouldActivateDarkMode);
  }, [scrollAgency]);

  useEffect(() => {
    const eventHandler = updateDarkMode;
    window.addEventListener('scroll', eventHandler);

    return () => {
      window.removeEventListener('scroll', eventHandler);
    };
  }, [updateDarkMode]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

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
                }`}>
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
                href="?"
                className="menu-left-link">
                Work
              </a>
            </li>
            <li className="menu-left-item">
              <a
                href="?"
                className="menu-left-link">
                Services
              </a>
              <ul className="menu-left-dropdown">
                <li className="menu-left-service">
                  <a
                    href="?"
                    className="menu-service-link">
                    Services
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="?"
                    className="menu-service-link">
                    Services
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="?"
                    className="menu-service-link">
                    Services
                  </a>
                </li>
                <li className="menu-left-service">
                  <a
                    href="?"
                    className="menu-service-link">
                    Services
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
                href="?"
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
