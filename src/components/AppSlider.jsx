import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const screens = [
  { src: '/assets/Upload-Documents.png', alt: 'Upload Documents Screen' },
  { src: '/assets/Case-Review_Findings.png', alt: 'Compliance and Fraud Screen' },
  { src: '/assets/Case-Review_Indicators.png', alt: 'Initial Medical Documentation Review' },
  { src: '/assets/Home.png', alt: 'Home Screen' },
  { src: '/assets/Upload-Documents.png', alt: 'Upload Documents Screen repeat' },
  { src: '/assets/Case-Review_Findings.png', alt: 'Compliance and Fraud Screen repeat' },
  { src: '/assets/Case-Review_Indicators.png', alt: 'Initial Medical Documentation Review repeat' },
  { src: '/assets/Home.png', alt: 'Home Screen repeat' }
];

const AppSlider = () => {
  return (
    <section className="sectionSlider">
      {/* Title & subtitle inside standard container */}
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h2>
              <strong>Showcasing Stunning Visuals</strong> in<br />
              Flexible Gallery Layouts
            </h2>
            <p className="section-subtitle">
              Explore beautiful, organized layouts designed to highlight app screenshots, features and designs with clarity, creativity, and user-focused presentation.
            </p>
          </div>
        </div>
      </div>

      {/* Full width slider — NO max-width constraint */}
      <div className="race-slider-wrap full-width-slider">
        <div className="race-slider-stage">
          {/* Phone Frame overlay — background layer */}
          <div className="phone-frame">
            <img src="/assets/iPhone-X.png" alt="Phone Frame" />
          </div>

          {/* Swiper Slider */}
          <Swiper
            className="raceSlider"
            modules={[Autoplay]}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            speed={850}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            watchSlidesProgress={true}
            slideToClickedSlide={true}
            centeredSlidesBounds={true}
          >
            {screens.map((screen, idx) => (
              <SwiperSlide key={idx}>
                <img src={screen.src} alt={screen.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AppSlider;
