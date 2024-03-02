import React, { useEffect, useState } from 'react';
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

const titlePeople = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit.',
];
const ServiceDetail = () => {
  let { page } = useParams();
  const [data, setData] = useState({
    banner: [],
    people: [],
    producer: [],
    why: [],
    process: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerResponse = await fetch(
          'http://localhost:3000/bannerService'
        );
        const bannerData = await bannerResponse.json();
        const peopleResponse = await fetch('http://localhost:3000/people');
        const peopleData = await peopleResponse.json();
        const producerResponse = await fetch('http://localhost:3000/producer');
        const producerData = await producerResponse.json();
        const whyResponse = await fetch('http://localhost:3000/why');
        const whyData = await whyResponse.json();
        const processResponse = await fetch('http://localhost:3000/process');
        const processData = await processResponse.json();
        setData({
          banner: bannerData,
          people: peopleData,
          producer: producerData,
          why: whyData,
          process: processData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const banner = data.banner.find((item) => item.page === page) || {};
  const people = data.people.find((item) => item.page === page) || {};
  const producer = data.producer.find((item) => item.page === page) || {};
  const why = data.why.find((item) => item.page === page) || {};
  const process = data.process.find((item) => item.page === page) || {};

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
