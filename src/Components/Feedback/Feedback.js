import React, { useState } from 'react';
import './Feedback.css';

const feedbacks = [
  {
    icon: ',,',
    content:
      'A young team with outstanding ideas. Our deadline for development was pretty short, and the Devolfs team had done everything on time. I’m sure we will continue our collaboration.',
    name: 'Ông Này Tên Gì',
    position: 'COO, ABC',
    job: 'UI UX Design',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: ',,',
    content:
      'A young team with outstanding ideas. Our deadline for development was pretty short, and the Devolfs team had done everything on time. I’m sure we will continue our collaboration.',
    name: 'Ông Này Tên Gì',
    position: 'COO, ABC',
    job: 'UI UX Design',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: ',,',
    content:
      'B young team with outstanding ideas. Our deadline for development was pretty short, and the Devolfs team had done everything on time. I’m sure we will continue our collaboration.',
    name: 'Ông Này Tên Gì',
    position: 'COO, ABC',
    job: 'UI UX Design',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: ',,',
    content:
      'C young team with outstanding ideas. Our deadline for development was pretty short, and the Devolfs team had done everything on time. I’m sure we will continue our collaboration.',
    name: 'Ông Này Tên Gì',
    position: 'COO, ABC',
    job: 'UI UX Design',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Thêm nhiều feedback khác ở đây
];

const Feedback = () => {
  const [current, setCurrent] = useState(0);

  const nextFeedback = () => {
    setCurrent((current + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrent((current - 1 + feedbacks.length) % feedbacks.length);
  };

  const getTransformStyle = () => {
    return {
      transform: `translateX(-${current * 100}%)`,
    };
  };

  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-layout">
          <h3 className="feedback-heading">WHAT OUR CLIENTS SAY</h3>
          <div className="feedback-wrapper">
            <div
              className="feedback-info"
              style={getTransformStyle()}>
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="feedback-client">
                  <p className="feedback-content">{feedback.content}</p>
                  <div className="feedback-bottom">
                    <div className="feedback-user">
                      <img
                        src={feedback.avatar}
                        alt=""
                        className="feedback-user-avatar"
                      />
                      <div className="feedback-user-info">
                        <h4 className="feedback-user-name">{feedback.name}</h4>
                        <p className="feedback-user-position">
                          {feedback.position}
                        </p>
                      </div>
                    </div>
                    <p className="feedback-job">{feedback.job}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="feedback-nextprev">
              <i
                className="fas fa-chevron-left"
                onClick={prevFeedback}></i>
              <i
                className="fas fa-chevron-right"
                onClick={nextFeedback}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
