import React, { useEffect, useRef } from 'react';
import './Story.css';

const Stroty = () => {
  const headerRightRef = useRef(null);
  const storySectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const headerRight = headerRightRef.current;
      const storySection = storySectionRef.current;

      if (headerRight && storySection) {
        let { top } = storySection.getBoundingClientRect();

        top = top > 0 ? 0 : top;
        headerRight.style.transform = `translateX(${top}px)`;
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
      className="story"
      id="story"
      ref={storySectionRef}>
      <div className="container">
        <div className="story-scroll">
          <div className="story-sticky">
            <h2 className="story-heading">
              We embody the spirit & strength of the wolf pack!
            </h2>
            <p className="story-text">
              Introducing positive changes throung the values we cherish.
            </p>
            <div
              className="story-list"
              ref={headerRightRef}>
              <div className="story-item">
                <p className="story-item-number">01</p>
                <h3 className="story-item-title">Fearless mindset</h3>
                <p className="story-item-desc">
                  Our team attacks each new task boldly and never shies away
                  from a new challenge. Not only that, but our creative digital
                  agency welcomes projects that will make us leave our comfort
                  zones and force us to think outside of the box
                </p>
              </div>
              <div className="story-item">
                <p className="story-item-number">02</p>
                <h3 className="story-item-title">Taking the lead</h3>
                <p className="story-item-desc">
                  Once a client comes to us with projects and ideas, we take
                  responsibility for shaping them into unique and practical
                  digital solutions - from UX/UI design to Webflow website
                  development services. Like alfas of a pack, we will take the
                  lead, tackle all the challenges, and make sure to deliver only
                  the best results.
                </p>
              </div>
              <div className="story-item">
                <p className="story-item-number">03</p>
                <h3 className="story-item-title">Communication</h3>
                <p className="story-item-desc">
                  Like wolves, we are natural team players who work best in
                  group settings and we thrive in a collaborative environment.
                  That is why we tend to nurture effective and transparent
                  communication inside our team - and out of it.
                </p>
              </div>
              <div className="story-item">
                <p className="story-item-number">04</p>
                <h3 className="story-item-title">Ambition</h3>
                <p className="story-item-desc">
                  Wolves are fierce creatures that demonstrate unparalleled
                  determination and resilience in all that they do, much as we
                  exhibit a tireless drive and unwavering dedication to our
                  goals. We won’t stop until we reach the outcome we want,
                  whether it’s UX UI design services or other brand identity
                  design solutions.
                </p>
              </div>
              <div className="story-item">
                <p className="story-item-number">05</p>
                <h3 className="story-item-title">Intelligence</h3>
                <p className="story-item-desc">
                  Wolves are known for their intelligence, tenacity, and
                  problem-solving abilities - and so are we. It makes us the
                  perfect choice for projects that require innovation and
                  creativity, alongside our constant aspiration to learn more
                  and improve ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stroty;
