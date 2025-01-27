import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MobileHeader from "./components/Mobile-header"; // Импортируем компонент мобильной шапки

function App() {
  const [showButtons, setShowButtons] = useState(false); // Отображение кнопок и шапки
  const [isMobile, setIsMobile] = useState(false); // Проверка, мобильное устройство или нет

  // Определяем, мобильное устройство или нет
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Если ширина экрана <= 768px, считаем устройство мобильным
    };

    checkScreenSize(); // Проверяем при загрузке
    window.addEventListener("resize", checkScreenSize); // Слушаем изменения размеров экрана

    return () => window.removeEventListener("resize", checkScreenSize); // Очищаем слушатель
  }, []);

  // Обрабатываем клик
  const handleInteraction = () => {
    if (isMobile) {
      setShowButtons(true); // Показываем кнопки и шапку только на мобильных устройствах
    }
  };

  return (
    <div onClick={handleInteraction} onScroll={handleInteraction} className="screen-container">
      <Header />
      {/* Показываем мобильную шапку только если showButtons = true */}
      {isMobile && showButtons && <MobileHeader />}
      <Logo showMobileLogo={showButtons} /> {/* Передаем состояние для отображения логотипа */}
      <main>
        {/* Показываем кнопки только если showButtons = true */}
        {showButtons &&
          isMobile && (
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