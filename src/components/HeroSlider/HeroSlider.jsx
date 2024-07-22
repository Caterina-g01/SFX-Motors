import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './styles.module.scss';
import imgOne from '../../assets/imgs/1.jpg';
import imgTwo from '../../assets/imgs/2.jpg';
import imgThree from '../../assets/imgs/3.jpg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function HeroSlider() {
  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const duration = 5000; 

  const startProgressTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set a new interval
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to the next slide and reset progress
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
          return 0;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50); 
  };

  const resetProgress = () => {
    setProgress(0);
    startProgressTimer();
  };

  useEffect(() => {
    startProgressTimer();
    return () => {
      clearInterval(intervalRef.current); 
    };
  }, [slideIndex]);

  useEffect(() => {
    resetProgress();
  }, [slideIndex]);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    beforeChange: (oldIndex, newIndex) => {
      setSlideIndex(newIndex);
    },
  };

  return (
    <div className={s.sliderContainer}>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgTwo} alt="Slide 2" />
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgThree} alt="Slide 3" />
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 4" />
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgTwo} alt="Slide 5" />
        </div>
      </Slider>
      <div className={s.progressBarContainer}>
        <div
          className={s.progressBar}
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}

export default HeroSlider;
