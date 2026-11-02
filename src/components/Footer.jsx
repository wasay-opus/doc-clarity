import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="f-logo">
              <Link to="/">
                <img
                  src="/assets/Frame-1686556656-1.svg"
                  alt="Doc Clarity"
                  style={{ maxWidth: '220px', height: 'auto' }}
                />
              </Link>
              <ul className="cnss-social-icon">
                <li className="cn-fa-linkedin cn-fa-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/"
                    title="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="cn-fa-facebook cn-fa-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook.com/"
                    title="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="cn-fa-instagram cn-fa-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/"
                    title="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="cn-fa-youtube cn-fa-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtube.com/"
                    title="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-start justify-content-md-end mt-4 mt-md-0">
            <div className="f-links">
              <h6>Install App</h6>
              <div className="imagesCombine">
                <a href="#download" title="Google Play">
                  <img src="/assets/Group-78.svg" alt="Google Play" />
                </a>
                <a href="#download" title="App Store">
                  <img src="/assets/Group-77.svg" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="foo-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 copyright-text mb-3 mb-md-0 text-center text-md-start">
              © 2026 <Link to="/">DocClarity.</Link> All rights reserved.
            </div>
            <div className="col-12 col-md-6">
              <ul className="bottomLinks justify-content-center justify-content-md-end">
                <li>
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/end-user-license-agreement">EULA</Link>
                </li>
                <li>
                  <a href="mailto:info@docclarity.app">Contact Us</a>
                </li>
                <li>
                  <Link to="/delete-account">Delete Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
