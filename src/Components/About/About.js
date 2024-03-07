import React, { useEffect, useRef } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        const targetPosition =
          imageRef.current.getBoundingClientRect().top + scrolled;
        const limit = window.innerHeight + imageRef.current.offsetHeight;

        if (
          scrolled >= targetPosition - window.innerHeight &&
          scrolled <= targetPosition + limit
        ) {
          // Invert the calculation here for 100% to 0%
          const position =
            200 -
            ((scrolled - targetPosition + window.innerHeight) / limit) * 400; // Sử dụng 300% để chạy từ 200% đến -100%
          imageRef.current.style.objectPosition = `center ${position}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="about">
      <div className="container">
        <article className="about-content">
          <figure className="about-image">
            <img
              src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thechuck Team"
              ref={imageRef}
            />
          </figure>
          <div className="about-info">
            <h3 className="about-heading">
              Thechuck - a pack of young talents chasing innovation
            </h3>
            <p className="about-desc">
              Born in 2017 as an idea and transformed into reality in 2022,
              Devolfs is now a small team of individuals who rely on one another
              in a common pursuit of innovation. Combining our vast industry
              knowledge, problem-solving mindsets, and digital creative
              services, we work on products that better the lives of many -
              something we are very proud of.
            </p>
            <p className="about-text">
              *Client-centric approach, user-friendly solutions, and constant
              aspiration for improvement are the cornerstones of our agency -
              and they help us build value for our partners and their target
              users.
            </p>
            <Link
              to="/about"
              className="about-button">
              <span>More about us</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
