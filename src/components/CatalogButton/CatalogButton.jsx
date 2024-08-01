import React from "react";
import s from './styles.module.scss'

export function CatalogButton({ children, onClick, className }) {
  return (
    <li className={s.catalogButtonItem}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </li>
  );
}
