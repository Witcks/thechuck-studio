import React from 'react';
import Banner from '../Banner/Banner';
import Clip from '../Clip/Clip';
import People from '../People/People';
import PeopleWork from '../PeopleWork/PeopleWork';
import Services from '../Services/Services';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';

const Home = () => {
  // Định nghĩa nội dung cho People component
  const headingText = 'People we help';
  const revealTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit',
  ];
  const peopleTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
  ];

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
        headingText={headingText}
        revealTexts={revealTexts}
        peopleTexts={peopleTexts}></People>
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
