import React from "react";
import "./Mobile-header.css";

function MobileHeader({ onBurgerClick }) {
  return (
    <div className="mobile-header visible">
      <div className="mobile-header-text">DEWIAR AI</div>
      <button
        className="mobile-header-button"
        aria-label="Mobile Action"
        onClick={onBurgerClick} // Добавляем обработчик клика
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
}

export default MobileHeader;
