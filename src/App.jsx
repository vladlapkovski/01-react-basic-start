import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MobileHeader from "./components/Mobile-header"; // Импортируем компонент мобильной шапки

function App() {
  const [showButtons, setShowButtons] = useState(false); // Отображение кнопок "Войти" и "Регистрация"
  const [isMobile, setIsMobile] = useState(false); // Проверка, мобильное устройство или нет
  const [showEmptyHeader, setShowEmptyHeader] = useState(false); // Отображение шапки с кнопками (аналитика, профиль, контакты)
  const [showLoginHeader, setShowLoginHeader] = useState(false); // Отображение шапки после нажатия на "Войти"

  // Определяем, мобильное устройство или нет
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Если ширина экрана <= 768px, считаем устройство мобильным
    };

    checkScreenSize(); // Проверяем при загрузке
    window.addEventListener("resize", checkScreenSize); // Слушаем изменения размеров экрана

    return () => window.removeEventListener("resize", checkScreenSize); // Очищаем слушатель
  }, []);

  // Обрабатываем клик или скролл
  const handleInteraction = () => {
    if (isMobile) {
      setShowButtons(true); // Показываем кнопки "Войти" и "Регистрация" только на мобильных устройствах
    }
  };

  // Обрабатываем клик на бургер-кнопку
  const handleBurgerClick = () => {
    setShowEmptyHeader(true); // Показываем шапку с кнопками (аналитика, профиль, контакты)
  };

  // Обрабатываем клик на кнопку "Войти"
  const handleLoginClick = () => {
    setShowLoginHeader(true); // Показываем шапку после нажатия на "Войти"
  };

  return (
    <div
      onClick={handleInteraction}
      onScroll={handleInteraction}
      className="screen-container"
    >
      <Header />
      {/* Показываем первую шапку только если showButtons = true */}
      {isMobile && showButtons && (
        <MobileHeader onBurgerClick={handleBurgerClick} />
      )}
      <Logo showMobileLogo={showButtons} />{" "}
      {/* Передаем состояние для отображения логотипа */}
      <main>
        {/* Показываем кнопки "Войти" и "Регистрация" только если showButtons = true */}
        {showButtons && isMobile && (
          <div className="mobile-buttons">
            <button className="rounded-button" onClick={handleLoginClick}>
              Войти
            </button>
            <button className="rounded-button secondary">Регистрация</button>
          </div>
        )}
        {/* Показываем вторую шапку только если showEmptyHeader = true */}
        {showEmptyHeader && (
          <>
            <div className="blur-background"></div> {/* Размытый фон */}
            <div className="empty-header no-blur">
              <button className="empty-header-button">
                <img src="/analytics-icon.svg" alt="Analytics" />
                АНАЛИТИКА
              </button>
              <button className="empty-header-button">
                <img src="/headerman-in-round.svg" alt="Profile" />
                ПРОФИЛЬ
              </button>
              <button className="empty-header-button">
                <img src="/headerman.svg" alt="Contacts" />
                КОНТАКТЫ
              </button>
            </div>
          </>
        )}
        {/* Показываем шапку после нажатия на "Войти" только если showLoginHeader = true */}
        {showLoginHeader && (
          <div className="login-header">
            <h2>ДОБРО ПОЖАЛОВАТЬ!</h2>
            <p>Введите свой почтовый адрес и пароль</p>
            <form>
              <label>
                Почта
                <input type="email" placeholder="Введите почту" />
              </label>
              <label>
                Пароль
                <input type="password" placeholder="Введите пароль" />
              </label>
              <button type="submit">Войти</button>
            </form>
            <p>
              Нет аккаунта? <a href="#">Зарегистрироваться</a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
