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
          className={s.catalogButton}
        >
          В наличии
        </CatalogButton>
        <CatalogButton
          onClick={handleClick(1)}
          className={s.catalogButton}
        >
          В пути
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


