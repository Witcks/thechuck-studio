import React from 'react';
import './BlogRetated.css';

const BlogRetated = () => {
  return (
    <section className="blog-detail-retated">
      <div className="container">
        <h3 className="blog-detail-retated-title">Related articles</h3>
        <ul className="post-list">
          <div className="post-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="post-image"
            />
            <div className="post-content">
              <h3 className="post-heading">
                Thechuck is Top-Reviewed AGENCY on The HCM
              </h3>
              <p className="post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                placeat, impedit repellendus modi nemo laudantium repellat hic
                corrupti, omnis dolorum, recusandae vero iste laboriosam fugit
                repudiandae assumenda quod illo atque.
              </p>
              <div className="post-author">
                <div className="post-author-info">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="post-author-avatar"
                  />
                  <p className="post-author-name">TheChuck</p>
                </div>
                <p className="post-author-day">22/02/2024</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default BlogRetated;
