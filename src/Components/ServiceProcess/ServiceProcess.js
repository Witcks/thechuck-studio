import React, { useEffect, useRef, useState } from 'react';
import './ServiceProcess.css';

const ServiceProcess = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef(null);

  useEffect(() => {
    const stickyPoints = [7550, 8100, 8450];
    // Giả sử các điểm cuộn là 100px, 500px, 900px, 1300px

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Xác định activeIndex dựa trên vị trí cuộn hiện tại và các stickyPoints
      let newIndex = 0; // Phần tử đầu tiên luôn bắt đầu là sticky
      // Tính toán giá trị mới cho bottom

      for (let i = 0; i < stickyPoints.length; i++) {
        if (scrollPosition >= stickyPoints[i]) {
          newIndex = i + 1; // Cập nhật activeIndex dựa trên điểm cuộn
        }
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="service-process">
      <div className="container">
        <h3 className="service-process-heading">
          2D Motion Graphic <br /> Design Process
        </h3>
        <div className="service-process-wrap">
          <div className="service-process-left">
            <div className="service-process-item">
              <h4 className="service-process-step">01 Discovery</h4>
              <h3 className="service-process-title">Let us know your needs</h3>
              <p className="service-process-desc">
                We kick off the journey by listening to your requirements and
                goals. It allows us to understand your vision for a perfect 2D
                Motion Graphic and lay a foundation for a tailor-made digital
                experience.
              </p>
              <div className="service-process-chip">
                <p className="service-process-chip-item">Free Discovery Call</p>
                <p className="service-process-chip-item">Questionnaire</p>
                <p className="service-process-chip-item">Project Timeline</p>
                <p className="service-process-chip-item">Price Proposal</p>
              </div>
            </div>
            <div className="service-process-item">
              <h4 className="service-process-step">01 Discovery</h4>
              <h3 className="service-process-title">Let us know your needs</h3>
              <p className="service-process-desc">
                We kick off the journey by listening to your requirements and
                goals. It allows us to understand your vision for a perfect 2D
                Motion Graphic and lay a foundation for a tailor-made digital
                experience.
              </p>
              <div className="service-process-chip">
                <p className="service-process-chip-item">Free Discovery Call</p>
                <p className="service-process-chip-item">Questionnaire</p>
                <p className="service-process-chip-item">Project Timeline</p>
                <p className="service-process-chip-item">Price Proposal</p>
              </div>
            </div>
            <div className="service-process-item">
              <h4 className="service-process-step">01 Discovery</h4>
              <h3 className="service-process-title">Let us know your needs</h3>
              <p className="service-process-desc">
                We kick off the journey by listening to your requirements and
                goals. It allows us to understand your vision for a perfect 2D
                Motion Graphic and lay a foundation for a tailor-made digital
                experience.
              </p>
              <div className="service-process-chip">
                <p className="service-process-chip-item">Free Discovery Call</p>
                <p className="service-process-chip-item">Questionnaire</p>
                <p className="service-process-chip-item">Project Timeline</p>
                <p className="service-process-chip-item">Price Proposal</p>
              </div>
            </div>
            <div className="service-process-item">
              <h4 className="service-process-step">01 Discovery</h4>
              <h3 className="service-process-title">Let us know your needs</h3>
              <p className="service-process-desc">
                We kick off the journey by listening to your requirements and
                goals. It allows us to understand your vision for a perfect 2D
                Motion Graphic and lay a foundation for a tailor-made digital
                experience.
              </p>
              <div className="service-process-chip">
                <p className="service-process-chip-item">Free Discovery Call</p>
                <p className="service-process-chip-item">Questionnaire</p>
                <p className="service-process-chip-item">Project Timeline</p>
                <p className="service-process-chip-item">Price Proposal</p>
              </div>
            </div>
          </div>
          <div
            ref={containerRef}
            className="service-process-right">
            <div
              className={`service-process-image ${
                activeIndex === 0 ? 'sticky' : ''
              }`}>
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="service-process-image-first"
              />
              <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="service-process-image-left"
              />
            </div>
            <div
              className={`service-process-image ${
                activeIndex === 1 ? 'sticky' : ''
              }`}>
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="service-process-image-first"
              />
            </div>
            <div
              className={`service-process-image ${
                activeIndex === 2 ? 'sticky' : ''
              }`}>
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="service-process-image-first"
              />
            </div>
            <div
              className={`service-process-image ${
                activeIndex === 3 ? 'sticky' : ''
              }`}>
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="service-process-image-first"
              />
            </div>
          </div>
        </div>
        <div className="service-process-bottom">
          <div className="service-process-content">
            <h3 className="service-process-next">
              It’s time for you to take <br /> the next step
            </h3>
            <p className="service-process-info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti repellendus architecto fugit nobis excepturi laudantium
              fuga sit, eligendi nesciunt nisi fugiat soluta inventore
              voluptatibus possimus?
            </p>
            <a
              href="/contact"
              className="service-process-button">
              <span>More about us</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
