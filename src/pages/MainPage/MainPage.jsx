import React, { useRef, useState, useEffect } from 'react';
import { Header } from "../../components/Header";
import { HeroSlider } from "../../components/HeroSlider";
import Catalog from "../../components/Catalog/Catalog";
import Partners from '../../components/Partners/Partners';

export const MainPage = () => {
  const catalogRef = useRef(null);
  const partnersRef = useRef(null);
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);

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

  const handleScroll = () => {
    if (catalogRef.current) {
      const rect = catalogRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        setCatalogVisible(true);
      } else {
        setCatalogVisible(false);
      }
    }
    if (partnersRef.current) {
      const partnersRect = partnersRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setPartnersVisible(partnersRect.top < windowHeight && partnersRect.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header onCatalogScroll={scrollToCatalog} onPartnersScroll={scrollToPartners} />
      <HeroSlider />
      <div ref={catalogRef}>
        <Catalog isVisible={catalogVisible} />
      </div>
      <div ref={partnersRef}>
      <Partners isVisible={partnersVisible} />
      </div>
    </>
  );
};
