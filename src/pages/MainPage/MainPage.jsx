import React, { useRef } from 'react';
import { Header } from "../../components/Header";
import { HeroSlider } from "../../components/HeroSlider";
import Catalog from "../../components/Catalog/Catalog";

export const MainPage = () => {
  const catalogRef = useRef(null);

  const scrollToCatalog = (event) => {
    event.preventDefault();
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onCatalogScroll={scrollToCatalog} />
      <HeroSlider />
      <div ref={catalogRef}>
        <Catalog />
      </div>
    </>
  );
};

