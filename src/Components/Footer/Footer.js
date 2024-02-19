import React, { useEffect } from 'react';
import logo from './logo.png';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    let container2 = document.querySelector('#two');
    let text2 = document.querySelector('#two span');

    if (container2.clientWidth < text2.clientWidth) {
      text2.classList.add('animate');
    }
  }, []);
  return (
    <footer className="footer">
      <div
        id="two"
        className="footer-contact">
        <span>Let's Talk Let's Talk</span>
      </div>
      <div className="container">
        <div className="footer-content">
          <a
            href="/"
            className="footer-logo">
            <img
              src={logo}
              alt=""
              className="footer-logo-img"
            />
          </a>
          <div className="footer-center">
            <ul className="footer-list">
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Home
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Work
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Agency
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Blog
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Reviews
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Service
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Service
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Service
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Service
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Linkedin
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Dribbble
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link">
                  Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="footer-right-item">
              <h5 className="footer-right-heading">Contact us</h5>
              <span className="footer-right-text">TheChuck@gmail.com</span>
            </div>
            <div className="footer-right-item">
              <h5 className="footer-right-heading">Based in</h5>
              <span className="footer-right-text">Viet Nam, TP HCM</span>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <span className="footer-bot-headting">
            © TheChuck 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
