import React from "react";
import "./Mobile-header.css";

function MobileHeader() {
  return (
    <div className="mobile-header visible">
      <div className="mobile-header-text">Заголовок</div>
      <button className="mobile-header-button" aria-label="Mobile Action">
        {/* Полоски внутри кнопки */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
}

export default MobileHeader;

