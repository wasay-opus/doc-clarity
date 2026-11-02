import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="custom-site-splash" className={hidden ? 'splash-hidden' : ''}>
      <img src="/assets/Frame-1686556656-1.svg" alt="Doc Clarity Logo" />
    </div>
  );
};

export default Preloader;

