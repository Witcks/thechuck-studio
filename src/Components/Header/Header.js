import React, { useCallback, useEffect, useState } from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
  const [state, setState] = useState({
    isOpen: false,
    isDarkMode: false,
  });

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    // Giả sử khi scroll quá 100px thì thêm class 'dark-mode'
    const isDarkMode = position >= 2450 && position <= 5150;
    setState((prevState) => ({
      ...prevState,
      isDarkMode,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  }, []);

  const { isOpen, isDarkMode } = state;

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
                className="header-logo-img"
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
                href="?"
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
