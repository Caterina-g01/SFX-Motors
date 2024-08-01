import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './styles.module.scss';
import cn from 'classnames';
import imgOne from '../../assets/imgs/1.jpeg';
import imgTwo from '../../assets/imgs/2.jpeg';
import imgThree from '../../assets/imgs/3.jpeg';
import arrowRight from '../../assets/imgs/arrow-right.png';
import arrowLeft from '../../assets/imgs/arrow-left.png';
import arrowLeftHover from '../../assets/imgs/arrow-left-hover.png';
import arrowRightHover from '../../assets/imgs/arrow-right-hover.png';

function NextArrow(props) {
  const { className, style, onClick, hover } = props;
  return (
    <div
      className={`${className} ${s.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
    >
      <img src={hover.hover ? arrowRightHover : arrowRight} alt="Next" className={s.arrowImg} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick, hover } = props;
  return (
    <div
      className={`${className} ${s.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
    >
      <img src={hover.hover ? arrowLeftHover : arrowLeft} alt="Prev" className={s.arrowImg} />
    </div>
  );
}

function HeroSlider() {
  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const duration = 5000;

  const [nextHover, setNextHover] = useState(false);
  const [prevHover, setPrevHover] = useState(false);

  const startProgressTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
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
    nextArrow: <NextArrow hover={{ hover: nextHover, onMouseEnter: () => setNextHover(true), onMouseLeave: () => setNextHover(false) }} />,
    prevArrow: <PrevArrow hover={{ hover: prevHover, onMouseEnter: () => setPrevHover(true), onMouseLeave: () => setPrevHover(false) }} />,
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
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgTwo} alt="Slide 2" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgThree} alt="Slide 3" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 4" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
        <div className={s.slide}>
          <img className={s.sliderImg} src={imgTwo} alt="Slide 5" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
      </Slider>
      <div className={s.progressBarContainer}>
        <div
          className={s.progressBar}
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
      <div className={s.arrowLeft__background}></div>
      <div className={s.arrowRight__background}></div>
    </div>
  );
}

export default HeroSlider;
