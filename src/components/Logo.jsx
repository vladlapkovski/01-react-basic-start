import React from "react";
import "./Logo.css";

function Logo({ showMobileLogo }) {
  return (
    <div className={`logo-container ${showMobileLogo ? "mobile" : "desktop"}`}>
      <img
        src={showMobileLogo ? "/mobile-logo.svg" : "/name-logo.svg"} // Выбор логотипа
        alt="Logo"
        className={`logo ${showMobileLogo ? "mobile-logo" : "desktop-logo"}`} // Применение уникальных стилей
      />
    </div>
  );
}

export default Logo;
