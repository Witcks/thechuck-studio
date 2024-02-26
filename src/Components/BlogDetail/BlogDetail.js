import React from 'react';
import Header from '../Header/Header';
import BannerBlogDetail from '../Banner/BannerBlogDetail';
import BlogDetailContent from '../BlogDetailContent/BlogDetailContent';
import BlogMail from '../BlogMail/BlogMail';
import BlogRetated from '../BlogRetated/BlogRetated';

const BlogDetail = () => {
  return (
    <section className="blog-detail">
      <Header></Header>
      <BannerBlogDetail></BannerBlogDetail>
      <BlogDetailContent></BlogDetailContent>
      <BlogRetated></BlogRetated>
      <BlogMail></BlogMail>
    </section>
  );
};

export default BlogDetail;
