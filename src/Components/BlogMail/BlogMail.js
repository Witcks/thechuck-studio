import React from 'react';
import './BlogMail.css';

const BlogMail = () => {
  return (
    <section className="blog-mail">
      <div className="container">
        <h3 className="blog-mail-heading">
          Be an early reader of our new blog posts.
        </h3>
        <p className="blog-mail-desc">
          Get a sneak peek at industry insights in 2D Motion Graphic, Brand
          Design, and Web Design with our newsletter.
        </p>
        <form className="blog-mail-form">
          <h6 className="blog-mail-title">Your Email</h6>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            className="blog-mail-input"
          />
          <button
            type="button"
            className={`blog-mail-button`}>
            <span>Subscribe</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <p className="blog-mail-text">
            *Our plan is not to spam you, we promise!
          </p>
        </form>
      </div>
    </section>
  );
};

export default BlogMail;
