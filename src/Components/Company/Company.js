import React from 'react';
import './Company.css';

const Company = () => {
  console.log(window.pageYOffset);
  return (
    <section className="company">
      <div className="container">
        <div className="company-list">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="company-img"
          />
          <div className="company-info">
            <h3 className="company-heading">
              Not convinced yet? Company deck!
            </h3>
            <p className="company-desc">
              Within our company deck, you'll get a closer look at our past
              projects, an introduction to company, insight into our values, and
              an understanding of how we can assist your business!
            </p>
            <a
              href="/about"
              className="company-button">
              <span>More about us</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <p className="company-text">*Worth a look, trust us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
