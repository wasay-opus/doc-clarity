import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleDownloadClick = (e) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById('download-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={isHome ? 'header-home' : 'header-subpage'}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-6">
            <div className="h-logo">
              <Link to="/">
                <img
                  src="/assets/Frame-1686556656.svg"
                  alt="Doc Clarity"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-6">
            <div className="h-button text-end">
              <a
                className="primaryBtn"
                href="/#download-section"
                onClick={handleDownloadClick}
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
