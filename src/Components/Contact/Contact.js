import React from 'react';
import Header from '../Header/Header';
import BannerContact from '../Banner/BannerContact';
import FormContact from '../FormContact/FormContact';
import Company from '../Company/Company';
import Question from '../Question/Question';

const Contact = () => {
  return (
    <section className="contact">
      <Header
        determineDarkMode={(position) =>
          position >= 0 && position <= 650
        }></Header>
      <BannerContact></BannerContact>
      <FormContact></FormContact>
      <Question></Question>
      <Company></Company>
    </section>
  );
};

export default Contact;
