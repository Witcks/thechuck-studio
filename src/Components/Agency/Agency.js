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
      <Header
        determineDarkMode={(position) => {
          if (window.innerWidth >= 1440) {
            if (position >= 2100 && position <= 5830) {
              return true;
            }
            if (position >= 6500 && position <= 10520) {
              return true;
            }
          } else if (window.innerWidth >= 1280) {
            if (position >= 2280 && position <= 5950) {
              return true;
            }
            if (position >= 6520 && position <= 10640) {
              return true;
            }
          } else if (window.innerWidth >= 1024) {
            if (position >= 1730 && position <= 4910) {
              return true;
            }
            if (position >= 5350 && position <= 8960) {
              return true;
            }
          } else if (window.innerWidth >= 768) {
            if (position >= 1780 && position <= 7230) {
              return true;
            }
          } else {
            if (position >= 1970 && position <= 6880) {
              return true;
            }
          }
        }}></Header>
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
