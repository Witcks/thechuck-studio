import React, { useEffect, useRef } from 'react';
import './Clip.css';

const Clip = () => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const headerLeftRef = useRef(null);
  const headerRightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = videoSectionRef.current;
      const video = videoRef.current;
      const headerLeft = headerLeftRef.current;
      const headerRight = headerRightRef.current;

      if (videoSection && video && headerLeft && headerRight) {
        let { bottom } = videoSection.getBoundingClientRect();
        let scale = 1 - (bottom - window.innerHeight) * 0.0005;
        scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
        video.style.transform = `scale(${scale})`;

        let textTrans = bottom - window.innerHeight;
        textTrans = textTrans < 0 ? 0 : textTrans;
        headerLeft.style.transform = `translateX(${-textTrans}px)`;
        headerRight.style.transform = `translateX(${textTrans}px)`;
      }
    };

    const throttledScroll = throttle(handleScroll, 10);

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  // Throttle function to limit the rate at which a function can fire.
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  return (
    <section
      id="video"
      ref={videoSectionRef}>
      <div className="video-sticky">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="main-video"
          ref={videoRef}>
          <source
            src="https://framerusercontent.com/modules/assets/BcIElVBzSD9P1ht5PhehnVyzTA~0iRDOKjSaNyoXJfsXAcSsdeEYSbJ8aAp3MvS5ts7LL0.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-text-overlay">
          <h2
            className="text-header-left"
            ref={headerLeftRef}>
            We are the story <br />
            We are the story
          </h2>
          <h2
            className="text-header-right"
            ref={headerRightRef}>
            We are the story
            <br />
            We are the story
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Clip;
