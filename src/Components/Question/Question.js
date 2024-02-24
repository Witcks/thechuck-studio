import React, { useEffect, useRef } from 'react';
import './Question.css';

const Question = () => {
  const accordionRef = useRef(null); // Sử dụng useRef để tạo một ref cho accordion

  useEffect(() => {
    const accordionHeaders = accordionRef.current.querySelectorAll(
      '.question-accordion-header'
    );
    const handleClickAccordion = (e) => {
      const content = e.target.nextElementSibling;
      console.log(content.scrollHeight);
      content.style.height = `${content.scrollHeight}px`;
      content.classList.toggle('is-active');
      if (!content.classList.contains('is-active')) {
        content.style.height = '0px';
      }
      const icon = e.target.querySelector('.icon');
      icon.classList.toggle('fa-angle-down');
      icon.classList.toggle('fa-angle-up');
    };

    accordionHeaders.forEach((item) =>
      item.addEventListener('click', handleClickAccordion)
    );

    // Dọn dẹp event listeners khi component unmount
    return () => {
      accordionHeaders.forEach((item) =>
        item.removeEventListener('click', handleClickAccordion)
      );
    };
  }, []);
  return (
    <section
      className="question"
      ref={accordionRef}>
      <div className="container">
        <div className="question-top">
          <h3 className="question-tittle">
            Still unsure about <br /> something?
          </h3>
          <p className="question-text">
            Don’t worry, whatever it is, we’ve got you covered in our FAQ.
          </p>
        </div>
        <div className="question-bottom">
          <ul>
            <div className="question-accordion">
              <div className="question-accordion-header">
                <span>Welcome to accordion heading 1</span>
                <i className="fa fa-angle-down icon"></i>
              </div>
              <div className="question-accordion-content">
                <div className="question-accordion-content-inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat dolorem sequi, hic ea esse ducimus. Minima
                  reprehenderit ullam, commodi aperiam nostrum excepturi,
                  assumenda blanditiis enim iusto pariatur dignissimos atque?
                </div>
              </div>
            </div>
            <div className="question-accordion">
              <div className="question-accordion-header">
                <span>Welcome to accordion heading 2</span>
                <i className="fa fa-angle-down icon"></i>
              </div>
              <div className="question-accordion-content">
                <div className="question-accordion-content-inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat dolorem sequi, hic ea esse ducimus. Minima
                  reprehenderit ullam, commodi aperiam nostrum excepturi,
                  assumenda blanditiis enim iusto pariatur dignissimos atque?
                </div>
              </div>
            </div>
            <div className="question-accordion">
              <div className="question-accordion-header">
                <span>Welcome to accordion heading 3</span>
                <i className="fa fa-angle-down icon"></i>
              </div>
              <div className="question-accordion-content">
                <div className="question-accordion-content-inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat dolorem sequi, hic ea esse ducimus. Minima
                  reprehenderit ullam, commodi aperiam nostrum excepturi,
                  assumenda blanditiis enim iusto pariatur dignissimos atque?
                </div>
              </div>
            </div>
            <div className="question-accordion">
              <div className="question-accordion-header">
                <span>Welcome to accordion heading 4</span>
                <i className="fa fa-angle-down icon"></i>
              </div>
              <div className="question-accordion-content">
                <div className="question-accordion-content-inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  placeat dolorem sequi, hic ea esse ducimus. Minima
                  reprehenderit ullam, commodi aperiam nostrum excepturi,
                  assumenda blanditiis enim iusto pariatur dignissimos atque?
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Question;
