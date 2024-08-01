import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import s from './styles.module.scss';
import { inStockData } from '../../InStockData'; 
import arrowRight from '../../assets/imgs/arrow-right.png';
import arrowLeft from '../../assets/imgs/arrow-left.png';
import arrowLeftHover from '../../assets/imgs/arrow-left-hover.png';
import arrowRightHover from '../../assets/imgs/arrow-right-hover.png';

function NextArrow(props) {
  const { className, style, onClick, isHidden } = props;
  const [hover, setHover] = useState(false);

  return (
    !isHidden && (
      <div
        className={`${className} ${s.nextArrow}`}
        style={{ ...style }}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? arrowRightHover : arrowRight} alt="Next" className={s.arrowImg__Next} />
      </div>
    )
  );
}

function PrevArrow(props) {
  const { className, style, onClick, isHidden } = props;
  const [hover, setHover] = useState(false);

  return (
    !isHidden && (
      <div
        className={`${className} ${s.prevArrow}`}
        style={{ ...style }}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? arrowLeftHover : arrowLeft} alt="Prev" className={s.arrowImg__Prev} />
      </div>
    )
  );
}

function InStock() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = inStockData.length; 
  const slidesToShow = 3;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow isHidden={currentSlide >= totalSlides - slidesToShow} />,
    prevArrow: <PrevArrow isHidden={currentSlide === 0} />,
    afterChange: (current) => setCurrentSlide(current),
    centerPadding: "60px",
  };

  return (
    <div className={s.sliderContainer}>
      <Slider {...settings}>
        {inStockData.map((item, index) => (
          <div key={index} className={s.slide}>
            <img className={s.sliderImg} src={item.img} alt={`Slide ${index + 1}`} />
            <p className={s.sliderText}>{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default InStock;

