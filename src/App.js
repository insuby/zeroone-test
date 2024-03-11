import './main.scss';
import { useState } from 'react';

export const App = () => {
  const [isRegNeeded, setIsRegNeeded] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const onRegClick = () => {
    setIsRegNeeded(!isRegNeeded);
  };

  const onBackClick = () => {
    setIsRegNeeded(false);
    setIsCodeSent(false);
  };

  const onCodeSent = () => {
    setIsCodeSent(true)
  }

  return (
    <div className="app">
      {!isRegNeeded && (
        <div className="auth-form">
          <div className="auth-form__header form-header">
            <button className="btn form-header__close-btn" onClick={onBackClick}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 2L1.5 10" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
                <path d="M9.5 10L1.5 2" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
              </svg>
            </button>
            <p className="form-header__header">
              Войти
            </p>
          </div>
          <div className="auth-form__body form-body">
            <div className="form-body__input">
              <label htmlFor="login">Логин</label>
              <input type="text" id="login" placeholder="Введите данные" />
            </div>
            <div className="form-body__input">
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" placeholder="Введите данные" />
            </div>
            <span className="form-body__forgot-password">Забыл пароль</span>
          </div>
          <div className="auth-form__footer form-actions">
            <button className="btn form-actions__btn form-actions__btn_colored">Войти</button>
            <button className="btn form-actions__btn form-actions__btn_dark" onClick={onRegClick}>Регистрация</button>
          </div>
        </div>
      )}

      {isRegNeeded && !isCodeSent && (
        <div className="auth-form">
          <div className="auth-form__header form-header">
            <button className="btn form-header__close-btn" onClick={onBackClick}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 2L1.5 10" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
                <path d="M9.5 10L1.5 2" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
              </svg>
            </button>
            <p className="form-header__header">
              Регистрация
            </p>
          </div>
          <div className="auth-form__body form-body">
            <div className="form-body__input">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Введите данные" />
            </div>
            <div className="form-body__input">
              <label htmlFor="login">Ваш ник</label>
              <input type="text" id="login" placeholder="Введите данные" />
            </div>
            <div className="form-body__input">
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" placeholder="Введите данные" />
            </div>
            <div className="form-body__input">
              <label htmlFor="password">Повторите пароль</label>
              <input type="password" id="password" placeholder="Введите данные" />
            </div>
          </div>
          <div className="auth-form__footer form-actions">
            <button className="btn form-actions__btn form-actions__btn_colored" onClick={onCodeSent}>Зарегистрироваться</button>
            <button className="btn form-actions__btn form-actions__btn_dark">Войти</button>
          </div>
        </div>
      )}


      {isCodeSent && (
        <div className="auth-form">
          <div className="auth-form__header form-header">
            <button className="btn form-header__close-btn" onClick={onBackClick}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 2L1.5 10" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
                <path d="M9.5 10L1.5 2" stroke="white" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
              </svg>
            </button>
            <p className="form-header__header">
              Подтвердите почту
            </p>
            <div className="form-send-code">
              Вам был отправлен код на почту sptsd@mail.ru, <br />
              введите полученный код в область внизу.
            </div>
          </div>
          <div className="auth-form__body form-body">
            <div className="form-body__input">
              <label htmlFor="code">Ввести код</label>
              <input type="text" id="code" placeholder="Ввести код" />
            </div>
          </div>
          <div className="auth-form__footer form-actions">
            <button className="btn form-actions__btn form-actions__btn_colored">Завершить регестрацию</button>
            <button className="btn form-actions__btn form-actions__btn_dark">Послать код опять</button>
            <button className="btn form-actions__btn form-actions__btn_empty" onClick={onBackClick}>Назад</button>
          </div>
        </div>
      )}
    </div>
  );
};
