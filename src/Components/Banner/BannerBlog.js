import React from 'react';
import './BannerBlog.css';

const BannerBlog = () => {
  return (
    <section className="blog-banner">
      <div className="container">
        <div className="blog-banner-top">
          <h1 className="blog-banner-heading">Our Blog</h1>
          <p className="blog-banner-text">
            Check out our free articles, blogs and resources that can help! Read
            news about Webflow, UX/UI design, branding and business.
          </p>
        </div>
        <div className="blog-banner-bottom">
          <div className="blog-banner-company">
            <div className="blog-banner-info">
              <p className="blog-banner-name">Based in Viet Nam, TP HCM</p>
              <p className="blog-banner-job">Hard-working</p>
            </div>
            <div className="blog-banner-info">
              <p className="blog-banner-name">DESIGN-DRIVEN</p>
              <p className="blog-banner-job">AGENCY</p>
            </div>
          </div>
          <p className="blog-banner-desc">
            AGENCY Whether we're making the new or transforming the old, we sink
            our teeth in every project and don't let go until we come up with
            the best <br /> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerBlog;
