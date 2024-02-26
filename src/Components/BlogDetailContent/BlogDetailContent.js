import React from 'react';
import './BlogDetailContent.css';

const BlogDetailContent = () => {
  return (
    <section className="blog-detail-wrap">
      <div className="container">
        <img
          src="https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="blog-detail-img"
        />
        <div className="blog-detail-info">
          <div className="blog-detail-title">
            <p className="blog-detail-title-item active">Heading 1</p>
            <p className="blog-detail-title-item">Heading 2</p>
            <p className="blog-detail-title-item">Heading 3</p>
            <p className="blog-detail-title-item">Heading 4</p>
          </div>
          <div className="blog-detail-content">
            <div className="blog-detail-content-item">
              <h3 className="blog-detail-content-heading">Heading 1</h3>
              <img
                src="https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="blog-detail-content-img"
              />
              <p className="blog-detail-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                placeat, impedit repellendus modi nemo laudantium repellat hic
                corrupti,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Id placeat, impedit repellendus modi nemo laudantium
                repellat hic corrupti,
              </p>
            </div>
            <div className="blog-detail-content-item">
              <h3 className="blog-detail-content-heading">Heading 2</h3>
              <p className="blog-detail-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                placeat, impedit repellendus modi nemo laudantium repellat hic
                corrupti,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Id placeat, impedit repellendus modi nemo laudantium
                repellat hic corrupti,
              </p>
            </div>
            <div className="blog-detail-content-item">
              <h3 className="blog-detail-content-heading">Heading 3</h3>
              <p className="blog-detail-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                placeat, impedit repellendus modi nemo laudantium repellat hic
                corrupti,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Id placeat, impedit repellendus modi nemo laudantium
                repellat hic corrupti,
              </p>
            </div>
            <div className="blog-detail-content-item">
              <h3 className="blog-detail-content-heading">Heading 4</h3>
              <p className="blog-detail-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                placeat, impedit repellendus modi nemo laudantium repellat hic
                corrupti,Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Id placeat, impedit repellendus modi nemo laudantium
                repellat hic corrupti,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
