import React, { useEffect, useRef, useState } from 'react';
import './ServiceProcess.css';

const ServiceProcess = ({ heading = '', items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef(null);

  useEffect(() => {
    const stickyPoints = [7550, 8100, 8450];
    // Giả sử các điểm cuộn là 100px, 500px, 900px, 1300px
    if (window.innerWidth >= 1024) {
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
    }
  }, []);

  return (
    <section className="service-process">
      <div className="container">
        <h3 className="service-process-heading">{heading}</h3>
        <div className="service-process-wrap">
          <div className="service-process-left">
            {items.map((item, index) => (
              <div
                className="service-process-item"
                key={index}>
                <h4 className="service-process-step">{item.number}</h4>
                <h3 className="service-process-title">{item.title}</h3>
                <p className="service-process-desc">{item.desc}</p>

                <div className="service-process-chip">
                  {item.chip.map((chip, i) => (
                    <p
                      className="service-process-chip-item"
                      key={i}>
                      {chip.chipText}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
