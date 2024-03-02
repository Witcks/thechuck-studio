import React from 'react';
import './ServiceWhy.css';

const ServiceWhy = ({ heanding = '', text = '', items = [] }) => {
  return (
    <section className="service-why">
      <div className="container">
        <h3 className="service-why-heading">{heanding}</h3>
        <p className="service-why-text">{text}</p>
        <div className="service-why-criteria">
          <div className="service-why-list">
            {items.map((item, index) => (
              <div
                className="service-why-item"
                key={index}>
                <h4 className="service-why-number">{item.number}</h4>
                <p className="service-why-tittle">{item.title}</p>
                <p className="service-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="service-why-bottom">
          <div className="service-why-content">
            <h3 className="service-why-next">
              It’s time for you to take <br /> the next step
            </h3>
            <p className="service-why-info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti repellendus architecto fugit nobis excepturi laudantium
              fuga sit, eligendi nesciunt nisi fugiat soluta inventore
              voluptatibus possimus?
            </p>
            <a
              href="/contact"
              className="service-why-button">
              <span>More about us</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhy;
