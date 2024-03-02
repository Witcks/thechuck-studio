import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Clip from '../Clip/Clip';
import People from '../People/People';
import PeopleWork from '../PeopleWork/PeopleWork';
import Services from '../Services/Services';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
const titlePeople = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit.',
];
const Home = () => {
  const [data, setData] = useState({
    people: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleResponse = await fetch('http://localhost:3000/people');
        const peopleData = await peopleResponse.json();
        setData({
          people: peopleData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const people = data.people.find((item) => item.page === 'home') || {};
  return (
    <section className="home">
      <Header
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1440) {
            if (position >= 2450 && position <= 5200) {
              return true;
            }
          } else if (window.innerWidth >= 1280) {
            if (position >= 2450 && position <= 5400) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 2450 && position <= 4720) {
              return true;
            }
          } else if (window.innerWidth >= 768) {
            if (position >= 2640 && position <= 4430) {
              return true;
            }
          } else {
            if (position >= 2260 && position <= 4970) {
              return true;
            }
          }
        }}
        determineGreenMode={(position) =>
          position >= 0 && position <= 500
        }></Header>
      <Banner></Banner>
      <Clip></Clip>
      <People
        heading={people.heading}
        title={titlePeople}
        contentA={people.contentA}
        contentB={people.contentA}></People>
      <PeopleWork
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1280) {
            if (position >= 2450) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 2640) {
              return true;
            }
          } else {
            if (position >= 2260) {
              return true;
            }
          }
        }}></PeopleWork>
      <Services></Services>
      <About></About>
      <Feedback></Feedback>
    </section>
  );
};

export default Home;
