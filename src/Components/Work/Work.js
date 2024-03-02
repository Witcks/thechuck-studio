import React from 'react';
import Header from '../Header/Header';
import PeopleWork from '../PeopleWork/PeopleWork';
import BannerWork from '../Banner/BannerWork';
import Company from '../Company/Company';
import Service from '../Services/Services';
import Feedback from '../Feedback/Feedback';

const Work = () => {
  return (
    <section className="work">
      <Header
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1280) {
            if (position >= 0 && position <= 3100) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 0 && position <= 2550) {
              return true;
            }
          } else if (window.innerWidth >= 768) {
            if (position >= 0 && position <= 1900) {
              return true;
            }
          } else {
            if (position >= 0 && position <= 2800) {
              return true;
            }
          }
        }}></Header>
      <BannerWork></BannerWork>
      <PeopleWork determineDarkMode={(position) => position >= 0}></PeopleWork>
      <Company></Company>
      <Service></Service>
      <Feedback></Feedback>
    </section>
  );
};

export default Work;
