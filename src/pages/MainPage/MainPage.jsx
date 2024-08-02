import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/Header/Header'; 
import Catalog from "../../components/Catalog/Catalog";
import Partners from '../../components/Partners/Partners';
import TuningSlider from '../../components/TuningSlider/TuningSlider';
import { HeroSlider } from '../../components/HeroSlider'; 
import Contacts from '../../components/Contacts/Contacts';

export const MainPage = () => {
  const catalogRef = useRef(null);
  const partnersRef = useRef(null);
  const tuningSliderRef = useRef(null); 
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [tuningSliderVisible, setTuningSliderVisible] = useState(false); 

  const scrollToCatalog = (event) => {
    event.preventDefault();
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPartners = (event) => {
    event.preventDefault();
    if (partnersRef.current) {
      partnersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTuningSlider = (event) => { 
    event.preventDefault();
    if (tuningSliderRef.current) {
      tuningSliderRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    
    if (catalogRef.current) {
      const rect = catalogRef.current.getBoundingClientRect();
      setCatalogVisible(rect.top < windowHeight && rect.bottom > 0);
    }

    if (partnersRef.current) {
      const rect = partnersRef.current.getBoundingClientRect();
      setPartnersVisible(rect.top < windowHeight && rect.bottom > 0);
    }

    if (tuningSliderRef.current) { 
      const rect = tuningSliderRef.current.getBoundingClientRect();
      setTuningSliderVisible(rect.top < windowHeight && rect.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header 
        onCatalogScroll={scrollToCatalog} 
        onPartnersScroll={scrollToPartners} 
        onTuningSliderScroll={scrollToTuningSlider} 
      />
      <HeroSlider />
      <div ref={catalogRef}>
        <Catalog isVisible={catalogVisible} />
      </div>
      <div ref={partnersRef}>
        <Partners isVisible={partnersVisible} />
      </div>
      <div ref={tuningSliderRef}>
        <TuningSlider isVisible={tuningSliderVisible} /> 
      </div>
      <Contacts />
    </>
  );
};

export default MainPage;
