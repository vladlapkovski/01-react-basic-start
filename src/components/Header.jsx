import React, { useState, useEffect } from "react";
import "./Header.css";
import GoogleIcon from "/google.svg"; // Импортируем иконку Google
import AppleIcon from "/apple.svg"; // Импортируем иконку Apple
import FacebookIcon from "/facebook.svg"; // Импортируем иконку Facebook

const Header = () => {
  const [showLoginHeader, setShowLoginHeader] = useState(false);
  const [showRegisterHeader, setShowRegisterHeader] = useState(false);
  const [isBackgroundShifted, setIsBackgroundShifted] = useState(false);
  const [isBackgroundShiftedUp, setIsBackgroundShiftedUp] = useState(false);

  const handleLoginClick = () => {
    setShowLoginHeader(true);
    setShowRegisterHeader(false);
    setIsBackgroundShifted(true);
    setIsBackgroundShiftedUp(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterHeader(true);
    setShowLoginHeader(false);
    setIsBackgroundShifted(false);
    setIsBackgroundShiftedUp(true);
  };

  useEffect(() => {
    if (isBackgroundShifted) {
      document.body.classList.add("shifted");
    } else {
      document.body.classList.remove("shifted");
    }

    if (isBackgroundShiftedUp) {
      document.body.classList.add("shifted-up");
    } else {
      document.body.classList.remove("shifted-up");
    }
  }, [isBackgroundShifted, isBackgroundShiftedUp]);

  return (
    <header className="header">
      {/* Основная шапка */}
      <div className="header__container">
        {/* Логотип */}
        <div className="header__logo">DEWIAR AI</div>

        {/* Навигация */}
        <nav className="header__nav">
          <a href="#analytics" className="icon-link">
            {/* Иконка Аналитика */}
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97247 2.92828C9.98545 2.92071 9.99621 2.90987 10.0037 2.89685C10.0112 2.88383 10.0151 2.86907 10.0151 2.85405C10.0151 2.83903 10.0112 2.82427 10.0037 2.81125C9.99621 2.79823 9.98545 2.78739 9.97247 2.77982L6.69095 0.873299C6.48098 0.751594 6.2426 0.6875 5.99991 0.6875C5.75722 0.6875 5.51883 0.751594 5.30886 0.873299L2.02798 2.77982C2.01501 2.78739 2.00425 2.79823 1.99677 2.81125C1.98929 2.82427 1.98535 2.83903 1.98535 2.85405C1.98535 2.86907 1.98929 2.88383 1.99677 2.89685C2.00425 2.90987 2.01501 2.92071 2.02798 2.92828L5.95704 5.23957C5.97026 5.24735 5.98532 5.25146 6.00066 5.25146C6.016 5.25146 6.03105 5.24735 6.04427 5.23957L9.97247 2.92828Z"
                fill="#013237"
              />
              <path
                d="M1.66016 3.51151C1.64705 3.50395 1.63218 3.49998 1.61705 3.5C1.60192 3.50002 1.58706 3.50404 1.57398 3.51165C1.5609 3.51926 1.55006 3.53019 1.54256 3.54333C1.53505 3.55647 1.53115 3.57136 1.53125 3.58649V7.32241C1.53158 7.50245 1.57903 7.67926 1.66888 7.83526C1.75874 7.99127 1.88787 8.12103 2.04344 8.21165L5.52735 10.3006C5.5404 10.3081 5.55521 10.3121 5.57029 10.3121C5.58537 10.3121 5.60018 10.3081 5.61325 10.3006C5.62631 10.2931 5.63716 10.2822 5.64471 10.2692C5.65225 10.2561 5.65624 10.2413 5.65625 10.2262V5.89177C5.65624 5.8767 5.65226 5.8619 5.64472 5.84885C5.63717 5.8358 5.62633 5.82497 5.61328 5.81743L1.66016 3.51151Z"
                fill="#013237"
              />
              <path
                d="M6.34375 5.9079V10.2263C6.34377 10.2413 6.34775 10.2561 6.3553 10.2692C6.36285 10.2822 6.3737 10.2931 6.38676 10.3006C6.39982 10.3081 6.41463 10.3121 6.42971 10.3121C6.44479 10.3121 6.4596 10.3081 6.47266 10.3006L9.95635 8.21167C10.1118 8.12117 10.2409 7.99159 10.3308 7.83578C10.4206 7.67998 10.4682 7.50338 10.4687 7.32351V3.58759C10.4687 3.57253 10.4647 3.55775 10.4571 3.54473C10.4496 3.5317 10.4387 3.5209 10.4256 3.51339C10.4126 3.50588 10.3978 3.50194 10.3827 3.50195C10.3677 3.50197 10.3529 3.50594 10.3398 3.51347L6.38672 5.83378C6.3737 5.8413 6.36288 5.8521 6.35534 5.8651C6.3478 5.87811 6.3438 5.89287 6.34375 5.9079Z"
                fill="#013237"
              />
            </svg>
            АНАЛИТИКА
          </a>
          <a href="#profile" className="icon-link">
            {/* Иконка Профиль */}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.14658 1.38746C6.7285 0.936074 6.14455 0.6875 5.50002 0.6875C4.85205 0.6875 4.26617 0.93457 3.85002 1.38316C3.42936 1.8367 3.2244 2.45309 3.27252 3.11867C3.36791 4.4318 4.36715 5.5 5.50002 5.5C6.63289 5.5 7.63041 4.43201 7.7273 3.1191C7.77607 2.45953 7.56982 1.84443 7.14658 1.38746Z"
                fill="#013237"
              />
              <path
                d="M9.28137 10.3125H1.71887C1.61989 10.3138 1.52186 10.293 1.43192 10.2516C1.34198 10.2103 1.26239 10.1494 1.19895 10.0734C1.0593 9.90644 1.00301 9.6785 1.04469 9.44797C1.22602 8.44207 1.79192 7.59709 2.68137 7.00391C3.47157 6.47732 4.47252 6.1875 5.50012 6.1875C6.52772 6.1875 7.52867 6.47754 8.31887 7.00391C9.20832 7.59687 9.77422 8.44185 9.95555 9.44775C9.99723 9.67828 9.94094 9.90623 9.80129 10.0732C9.73787 10.1492 9.65829 10.2101 9.56835 10.2515C9.47841 10.2929 9.38037 10.3138 9.28137 10.3125V10.3125Z"
                fill="#013237"
              />
            </svg>
            ПРОФИЛЬ
          </a>
          <a href="#contacts" className="icon-link">
            {/* Иконка Контакты */}
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.03125C3.53596 1.03125 1.53125 3.03596 1.53125 5.5C1.53125 7.96404 3.53596 9.96875 6 9.96875C8.46404 9.96875 10.4687 7.96404 10.4687 5.5C10.4687 3.03596 8.46404 1.03125 6 1.03125ZM4.92105 3.54105C5.19326 3.25252 5.57633 3.09375 6 3.09375C6.42367 3.09375 6.8033 3.25359 7.07658 3.54363C7.35351 3.83754 7.48822 4.23242 7.45643 4.65695C7.39283 5.5 6.73971 6.1875 6 6.1875C5.26029 6.1875 4.60588 5.5 4.54357 4.65674C4.51199 4.22877 4.64648 3.8326 4.92105 3.54105ZM6 9.28125C5.49522 9.28158 4.99551 9.18055 4.5305 8.98414C4.0655 8.78773 3.64467 8.49995 3.29297 8.13785C3.4944 7.8506 3.75105 7.60636 4.04793 7.41941C4.59557 7.06836 5.28865 6.875 6 6.875C6.71135 6.875 7.40443 7.06836 7.95143 7.41941C8.24855 7.60628 8.50543 7.85052 8.70703 8.13785C8.35536 8.49998 7.93454 8.7878 7.46953 8.98421C7.00451 9.18062 6.50479 9.28163 6 9.28125Z"
                fill="#013237"
              />
            </svg>
            КОНТАКТЫ
          </a>
        </nav>

        {/* Кнопка "ВОЙТИ" */}
        <button className="rounded-button" onClick={handleLoginClick}>
          ВОЙТИ
        </button>
      </div>

      {/* Шапка входа */}
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
            Нет аккаунта?{" "}
            <a href="#" onClick={handleRegisterClick}>
              Зарегистрироваться
            </a>
          </p>
        </div>
      )}

      {/* Шапка регистрации */}
      {showRegisterHeader && (
        <div className="register-header">
          <div className="register-header__buttons">
            <button className="register-header__button">
              <img src={GoogleIcon} alt="Google" />
            </button>
            <button className="register-header__button">
              <img src={AppleIcon} alt="Apple" />
            </button>
            <button className="register-header__button">
              <img src={FacebookIcon} alt="Facebook" />
            </button>
          </div>
          <form>
            <label>
              Имя и Фамилия
              <input type="text" placeholder="Введите имя и фамилию" />
            </label>
            <label>
              Почта
              <input type="email" placeholder="Введите почту" />
            </label>
            <label>
              Пароль
              <input type="password" placeholder="Введите пароль" />
            </label>
            <button type="submit" className="register-header__submit">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </form>
          <p>
            Уже есть аккаунт?{" "}
            <a href="#" onClick={handleLoginClick}>
              Войти
            </a>
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
