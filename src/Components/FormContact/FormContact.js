import React from 'react';
import './FormContact.css';

const FormContact = () => {
  return (
    <section className="form-contact">
      <div className="container">
        <div className="form-contact-list">
          <div className="form-contact-info">
            <form>
              <h4 className="form-contact-tittle">
                Fill out the form and we’ll get back to you to as soon as
                possible, to discuss your project!
              </h4>
              <p className="form-contanct-service">We need help with</p>
              <div className="form-service-list">
                <label className="form-service-item">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                  <span className="form-service-name">2D Motion Graphic</span>
                </label>
                <label className="form-service-item">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                  <span className="form-service-name">Video Production</span>
                </label>
                <label className="form-service-item">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                  <span className="form-service-name">Brand Identity</span>
                </label>
                <label className="form-service-item">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                  <span className="form-service-name">Web Design</span>
                </label>
              </div>
              <p className="form-contanct-service">Project deadline</p>
              <div className="form-service-list">
                <label className="form-service-item">
                  <input
                    type="radio"
                    name="dealine"
                  />
                  <div class="checkmark"></div>
                  <span className="form-service-name">ASAP</span>
                </label>
                <label className="form-service-item">
                  <input
                    type="radio"
                    name="dealine"
                  />
                  <div class="checkmark"></div>
                  <span className="form-service-name">1 month</span>
                </label>
                <label className="form-service-item">
                  <input
                    type="radio"
                    name="dealine"
                  />
                  <div class="checkmark"></div>
                  <span className="form-service-name">2-3 month</span>
                </label>
                <label className="form-service-item">
                  <input
                    type="radio"
                    name="dealine"
                  />
                  <div class="checkmark"></div>
                  <span className="form-service-name">3+ month</span>
                </label>
              </div>

              <h3 className="form-contact-client">Contact Details</h3>
              <div className="form-client">
                <label className="form-client-info">
                  <span>My name is</span>
                  <input
                    name="my-name"
                    placeholder="Your name"
                    className="form-name"
                  />
                </label>
                <label className="form-client-info">
                  <span>Contact Email</span>
                  <input
                    name="my-email"
                    placeholder="Email address"
                    className="form-name"
                  />
                </label>
              </div>
              <label className="form-client-info">
                <span>Company name</span>
                <input
                  name="my-company"
                  placeholder="Company Name"
                  className="form-company"
                />
              </label>
              <button
                type="button"
                className={`form-client-button`}>
                <span>Subscribe</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="form-contact-link">
            <h6 className="form-contact-detail">Contact details</h6>
            <span className="form-contact-mail">thechuck@gmail.com</span>
            <h6 className="form-contact-socials">Socials</h6>
            <ul className="form-socials">
              <li className="form-socials-item">
                <a
                  href="/"
                  className="form-social-link">
                  Linkedin
                </a>
              </li>
              <li className="form-socials-item">
                <a
                  href="/"
                  className="form-social-link">
                  Instagram
                </a>
              </li>
              <li className="form-socials-item">
                <a
                  href="/"
                  className="form-social-link">
                  Dribbble
                </a>
              </li>
              <li className="form-socials-item">
                <a
                  href="/"
                  className="form-social-link">
                  Facebook
                </a>
              </li>
              <li className="form-socials-item">
                <a
                  href="/"
                  className="form-social-link">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
