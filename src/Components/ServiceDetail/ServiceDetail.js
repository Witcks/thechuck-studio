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
import { useParams } from 'react-router-dom';
import content from '../../content';

const titlePeople = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit.',
];
const ServiceDetail = () => {
  let { page } = useParams();

  const banner = content.bannerService.find((item) => item.page === page) || {};
  const people = content.people.find((item) => item.page === page) || {};
  const producer = content.producer.find((item) => item.page === page) || {};
  const why = content.why.find((item) => item.page === page) || {};
  const process = content.process.find((item) => item.page === page) || {};

  return (
    <section className="service-detail">
      <Header
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1440) {
            if (position >= 1350 && position <= 5570) {
              return true;
            }
            if (position >= 7000 && position <= 10180) {
              return true;
            }
          } else if (window.innerWidth >= 1280) {
            if (position >= 1475 && position <= 6290) {
              return true;
            }
            if (position >= 7760 && position <= 11030) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 1230 && position <= 5450) {
              return true;
            }
            if (position >= 6790 && position <= 9690) {
              return true;
            }
          } else if (window.innerWidth >= 768) {
            if (position >= 1260 && position <= 6400) {
              return true;
            }
            if (position >= 8610 && position <= 10500) {
              return true;
            }
          } else {
            if (position >= 1490 && position <= 7430) {
              return true;
            }
            if (position >= 9810 && position <= 11780) {
              return true;
            }
          }
        }}></Header>
      <BannerService
        heading={banner.heading}
        content={banner.content}></BannerService>
      <People
        heading={people.heading}
        title={titlePeople}
        contentA={people.contentA}
        contentB={people.contentA}></People>
      <ServiceImage
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1440) {
            if (position >= 1300) {
              return true;
            }
          } else if (window.innerWidth >= 1280) {
            if (position >= 1440) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 1230) {
              return true;
            }
          } else if (window.innerWidth >= 768) {
            if (position >= 1260) {
              return true;
            }
          } else {
            if (position >= 1490) {
              return true;
            }
          }
        }}></ServiceImage>
      <ServiceProcedure
        determineDarkMode={(position) => position >= 1300}
        top={producer.headingTop}
        items={producer.preducerList}
        bottom={producer.headingBottom}></ServiceProcedure>
      <PeopleWork
        determineDarkMode={(position) => position >= 1300}></PeopleWork>
      <ServiceWhy
        heanding={why.heading}
        items={why.whyList}
        text={why.text}></ServiceWhy>
      <ServiceProcess
        heading={process.heading}
        items={process.processList}></ServiceProcess>
      <Question></Question>
      <Feedback></Feedback>
    </section>
  );
};

export default ServiceDetail;
