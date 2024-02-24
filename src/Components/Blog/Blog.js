import React from 'react';
import Header from '../Header/Header';
import BannerBlog from '../Banner/BannerBlog';
import Post from '../Post/Post';
import BlogMail from '../BlogMail/BlogMail';

const Blog = () => {
  return (
    <section className="blog">
      <Header></Header>
      <BannerBlog></BannerBlog>
      <Post></Post>
      <BlogMail></BlogMail>
    </section>
  );
};

export default Blog;
