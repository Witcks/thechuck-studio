import React from 'react';
import '../Banner/BannerBlogDetail.css';

const BannerBlogDetail = () => {
  return (
    <section className="banner-blog-detail">
      <div className="container">
        <h1 className="banner-blog-detail-heading">
          Thechuck is Top-Reviewed <br /> 2D Motion Graphic Agency on The
          Manifest
        </h1>
        <p className="banner-blog-detail-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          corrupti repellendus architecto fugit nobis excepturi laudantium fuga
          sit.
        </p>
        <div className="banner-blog-detail-list">
          <div className="banner-blog-detail-auther">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="banner-blog-detail-avatar"
            />
            <span className="banner-blog-detail-name">Thechuck</span>
          </div>
          <p className="banner-blog-detail-date">22/02/2024</p>
        </div>
      </div>
    </section>
  );
};

export default BannerBlogDetail;
