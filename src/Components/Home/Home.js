import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Clip from '../Clip/Clip';
import People from '../People/People';
import Services from '../Services/Services';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
const Home = () => {
  return (
    <section className="home">
      <Banner></Banner>
      <Clip></Clip>
      <People></People>
      <Services></Services>
      <About></About>
      <Feedback></Feedback>
    </section>
  );
};

export default Home;
