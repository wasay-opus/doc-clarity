import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import ContactForm from '../components/ContactForm';
import AppSlider from '../components/AppSlider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  useScrollReveal();

  return (
    <main>
      {/* 1. Hero / Home Banner */}
      <section className="homeBanner">
        <div className="container text-center">
          <h5>AI-POWERED MEDICAL DOCUMENT CLARITY</h5>
          <h1>
            Bring Clarity to Complex<br />
            <strong>Medical Records.</strong>
          </h1>
          <p>
            Simplify complex medical records, uncover important details, and gain clear
            insights to better understand your health information and make more
            informed healthcare decisions.
          </p>

          <ul className="store-badges">
            <li>
              <a href="#download" title="App Store">
                <img
                  src="/assets/Frame-1321315210.svg"
                  alt="Download on App Store"
                />
              </a>
            </li>
            <li>
              <a href="#download" title="Google Play">
                <img
                  src="/assets/Frame-1321315209.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </li>
          </ul>

          <div className="hero-mockup-wrap">
            <img
              src="/assets/Group-1686556153-2.png"
              alt="Doc Clarity App Interface Mockup"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="sectionOne">
        <div className="container">
          <div className="row text-center reveal-on-scroll reveal-up">
            <div className="col-12">
              <h2>
                <strong>DOC CLARITY</strong> Key Features
              </h2>
              <p className="section-subtitle">
                Simplify complex medical records, uncover important details, and gain clear
                insights to better understand your health information.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            {/* Left 3 Features */}
            <div className="col-12 col-lg-4 feature-col reveal-on-scroll reveal-left">
              <div className="hovText">
                <h4>Dummy Feature 1</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>

              <div className="hovText">
                <h4>Dummy Feature 2</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>

              <div className="hovText">
                <h4>Dummy Feature 3</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>
            </div>

            {/* Center Phone Graphic */}
            <div className="col-12 col-lg-4 reveal-on-scroll reveal-up delay-1">
              <div className="center-phone-img">
                <img
                  src="/assets/Group-1686556130.png"
                  alt="Doc Clarity App Screen"
                />
              </div>
            </div>

            {/* Right 3 Features */}
            <div className="col-12 col-lg-4 feature-col reveal-on-scroll reveal-right">
              <div className="hovText">
                <h4>Dummy Feature 4</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>

              <div className="hovText">
                <h4>Dummy Feature 5</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>

              <div className="hovText">
                <h4>Dummy Feature 6</h4>
                <p>
                  This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Two: Real-Time Chat (Green) */}
      <section className="sectionTwo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 reveal-on-scroll reveal-left">
              <h2 className="heading-hover-line">
                <strong>Real-Time Chat</strong> and<br />
                Messaging
              </h2>
              <p>
                This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
              </p>
              <p>
                This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text.
              </p>
              <ul className="store-badges">
                <li>
                  <a href="#download" title="App Store">
                    <img
                      src="/assets/Frame-1321315210-1.svg"
                      alt="App Store"
                    />
                  </a>
                </li>
                <li>
                  <a href="#download" title="Google Play">
                    <img
                      src="/assets/Frame-1321315209-1.svg"
                      alt="Google Play"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-6 reveal-on-scroll reveal-right delay-1">
              <div className="phone-glow-wrap">
                <img
                  src="/assets/Group-1686556144.png"
                  alt="Real-Time Chat Screens"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Two Point Two: Real-Time Chat (White) */}
      <section className="sectionTwoPointTwo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 reveal-on-scroll reveal-left">
              <div className="left-phone-wrap">
                <img
                  src="/assets/Group-1686556137-1.png"
                  alt="Messaging and Findings"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 reveal-on-scroll reveal-right delay-1">
              <h2 className="heading-hover-line dark-theme">
                <strong>Real-Time Chat</strong> and<br />
                Messaging
              </h2>
              <p>
                This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.
              </p>
              <p>
                This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text.
              </p>
              <ul className="store-badges">
                <li>
                  <a href="#download" title="App Store">
                    <img
                      src="/assets/Frame-1321315210-2.svg"
                      alt="App Store"
                    />
                  </a>
                </li>
                <li>
                  <a href="#download" title="Google Play">
                    <img
                      src="/assets/Frame-1321315209-2.svg"
                      alt="Google Play"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <div className="reveal-on-scroll reveal-up">
        <FaqAccordion />
      </div>

      {/* 6. Contact Form Section */}
      <div className="reveal-on-scroll reveal-up">
        <ContactForm />
      </div>

      {/* 7. App Screens Swiper Slider */}
      <AppSlider />

      {/* 8. CTA Download Banner (Section Six) */}
      <section className="sectionSix reveal-on-scroll reveal-up" id="download-section">
        <div className="container">
          <div className="cta-banner-box">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h2>
                  Ready to get your<br />
                  <strong>DOC CLARITY</strong>
                </h2>
                <p>
                  Join millions of players who are already turning<br />
                  their trash into cash.
                </p>
                <ul className="store-badges">
                  <li>
                    <a href="#download" title="App Store">
                      <img
                        src="/assets/Frame-1321315210-1.svg"
                        alt="App Store"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#download" title="Google Play">
                      <img
                        src="/assets/Frame-1321315209-1.svg"
                        alt="Google Play"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
