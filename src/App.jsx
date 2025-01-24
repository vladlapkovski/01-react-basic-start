import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Проверяем ширину экрана
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Условие для мобильных устройств
    };

    checkScreenSize(); // Проверяем при загрузке
    window.addEventListener("resize", checkScreenSize); // Проверяем при изменении размера экрана

    return () => window.removeEventListener("resize", checkScreenSize); // Удаляем слушатель
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setShowButtons(true); // Только на мобильных устройствах
    }
  };

  return (
    <div onClick={handleInteraction} onScroll={handleInteraction}>
      <Header />
      <Logo showMobileLogo={showButtons} /> {/* Передаем состояние */}
      <main>
        {showButtons &&
          isMobile && ( // Кнопки показываются только на мобильных устройствах
            <div className="mobile-buttons">
              <button className="rounded-button">Войти</button>
              <button className="rounded-button secondary">Регистрация</button>
            </div>
          )}
      </main>
    </div>
  );
}

export default App;
