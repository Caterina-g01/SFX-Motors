import React, { useState } from "react";
import s from "./styles.module.scss";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { InStock } from "../InStock";

function Catalog() {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleClick = (section) => (event) => {
    event.preventDefault();
    setSelectedSection(section);
  };

  return (
    <div className={s.catalogContainer}>
      <div className={s.catalogButtons}>
      <CatalogButton
          onClick={handleClick(0)}
          className={`${s.catalogButton} ${selectedSection === 0 ? s.active : ''}`}
        >
          Техника&nbsp;
          <span className={`${s.catalogButtonUnderline} ${selectedSection === 0 ? s.active : ''}`}>
            В наличии
          </span>
        </CatalogButton>

        <div className={s.catalogButtonsDivisor}></div>

        <CatalogButton
          onClick={handleClick(1)}
          className={`${s.catalogButton} ${selectedSection === 1 ? s.active : ''}`}
        >
          <span className={`${s.catalogButtonUnderline} ${selectedSection === 1 ? s.active : ''}`}>
          В пути
          </span>
          
        </CatalogButton>
      </div>
      <div className={s.catalogContent}>
        {selectedSection === 0 ? (
          <InStock />
        ) : (
          <div className={s.developmentMessage}>в разработке</div>
        )}
      </div>
    </div>
  );
}

export default Catalog;


