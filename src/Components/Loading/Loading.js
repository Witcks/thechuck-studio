import React, { useEffect, useState } from 'react';
import './Loading.css';
import videoLoading from './169.gif';
import { useLocation } from 'react-router-dom';

const Loading = () => {
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Trigger loading on location change
    handleStart();
    // Simulate loading for demonstration
    setTimeout(handleComplete, 3000); // remove setTimeout in a real app unless you're simulating delay

    // Cleanup if the component unmounts
    return () => {
      handleComplete();
    };
  }, [location]);
  return (
    <section className={`loading ${isLoading ? 'active' : ''}`}>
      <img
        src={videoLoading}
        alt=""
        className="loading-video"
      />
    </section>
  );
};

export default Loading;
