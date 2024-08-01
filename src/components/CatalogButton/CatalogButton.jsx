import React from "react";

export function CatalogButton({ children, onClick, className }) {
  return (
    <li>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </li>
  );
}
