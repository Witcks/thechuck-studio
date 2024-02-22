import React from 'react';
import './Home.css';
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
      <Header scrollHome={true}></Header>
      <Banner></Banner>
      <Clip></Clip>
      <People
        headingText={headingText}
        revealTexts={revealTexts}
        peopleTexts={peopleTexts}></People>
      <PeopleWork></PeopleWork>
      <Services></Services>
      <About></About>
      <Feedback></Feedback>
    </section>
  );
};

export default Home;
