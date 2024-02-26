import React from 'react';
import Header from '../Header/Header';
import BannerService from '../Banner/BannerService';
import People from '../People/People';
import ServiceImage from '../ServiceImage/ServiceImage';
import PeopleWork from '../PeopleWork/PeopleWork';
import ServiceProcedure from '../ServiceProcedure/ServiceProcedure';
import Feedback from '../Feedback/Feedback';
import Question from '../Question/Question';
import ServiceWhy from '../ServiceWhy/ServiceWhy';
import ServiceProcess from '../ServiceProcess/ServiceProcess';

const ServiceDetail = () => {
  const headingText = 'How we do it';
  const revealTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit',
  ];
  const peopleTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
  ];
  return (
    <section className="service-detail">
      <Header
        determineDarkMode={(position) => {
          if (position >= 1300 && position <= 5500) {
            return true;
          }
          if (position >= 7000 && position <= 9900) {
            return true;
          }
        }}></Header>
      <BannerService></BannerService>
      <People
        headingText={headingText}
        revealTexts={revealTexts}
        peopleTexts={peopleTexts}></People>
      <ServiceImage
        determineDarkMode={(position) => position >= 1300}></ServiceImage>
      <ServiceProcedure
        determineDarkMode={(position) => position >= 1300}></ServiceProcedure>
      <PeopleWork
        determineDarkMode={(position) => position >= 1300}></PeopleWork>
      <ServiceWhy></ServiceWhy>
      <ServiceProcess></ServiceProcess>
      <Question></Question>
      <Feedback></Feedback>
    </section>
  );
};

export default ServiceDetail;
