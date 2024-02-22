import React from 'react';
import Header from '../Header/Header';
import BannerAgency from '../Banner/BannerAgency';
import People from '../People/People';
import Gallery from '../Gallery/Gallery';
import Stroty from '../Story/Stroty';
import Team from '../Team/Team';
import Feedback from '../Feedback/Feedback';

const Agency = () => {
  const headingText = 'WHO WE ARE';
  const revealTexts = [
    'Our skilled pack hunts great ideasrestlessly to ensure clients achieve the impact they want.',
  ];
  const peopleTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti repellendus architecto fugit nobis excepturi laudantium fuga sit, eligendi nesciunt nisi fugiat soluta inventore voluptatibus possimus? Laboriosam quis natus dolores.',
  ];
  return (
    <section className="agency">
      <Header agencyScroll={true}></Header>
      <BannerAgency></BannerAgency>
      <People
        headingText={headingText}
        revealTexts={revealTexts}
        peopleTexts={peopleTexts}></People>
      <Gallery></Gallery>
      <Stroty></Stroty>
      <Team></Team>
      <Feedback></Feedback>
    </section>
  );
};

export default Agency;
