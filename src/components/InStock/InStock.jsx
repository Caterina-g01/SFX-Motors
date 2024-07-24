import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import s from './styles.module.scss';
import imgOne from '../../assets/imgs/1.jpeg';
import arrowRight from '../../assets/imgs/arrow-right.png';
import arrowLeft from '../../assets/imgs/arrow-left.png';


function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		 className={`${className} ${s.nextArrow}`}
		 style={{ ...style }}
		 onClick={onClick}
	  >
		 <img src={arrowRight} alt="Next" className={s.arrowImg} />
	  </div>
	);
 }
 
 function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		 className={`${className} ${s.prevArrow}`}
		 style={{ ...style }}
		 onClick={onClick}
	  >
		 <img src={arrowLeft} alt="Prev" className={s.arrowImg} />
	  </div>
	);
 }
	
	function InStock() {
	  const settings = {
		 dots: true,
		 infinite: false,
		 speed: 500,
		 slidesToShow: 3,
		 slidesToScroll: 3,
		 rows: 2,
		 slidesPerRow: 1,
	    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
		 centerPadding: "60px",
	  };
	  return (
		 <div className={s.sliderContainer}>
			<Slider {...settings}>
			
			<div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			  
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			 
			 
		  <div className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Slide 1" />
          <p className={s.sliderText} >MV Agusta Dragster 800 RR</p>
        </div>
			
			</Slider>
		 </div>
	  );
	}


export default InStock;

