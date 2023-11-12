import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './register.module.scss';
import { setDataUser } from '../../redux/slices/dataUser';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [checkedPasswordError, setCheckedPasswordError] = React.useState(false);
  const [responseError, setResponseError] = React.useState({});
  const [disabled, setDisabled] = React.useState(false);
  const [blockError, setBlockError] = React.useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
      setEmailError(false);
    }
    if (id === 'password') {
      setPassword(value);
      setPasswordError(false);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
      setConfirmPasswordError(false);
    }
  };

  const sendingRequest = () => {
    setResponseError({});
    setCheckedPasswordError(false);
    setConfirmPasswordError(false);
    setPasswordError(false);
    setEmailError(false);
    try {
      setDisabled(true);
      fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          username: email,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          setDisabled(false);
          if (!response.ok) {
            console.log(response);
          }
          return response.json();
        })

        .then((data) => {
          console.log('data', data);
          console.log(data, data.email, data.password);

          if (data && data.email && data.email.includes('@')) {
            console.log(data.email);
            dispatch(setDataUser(localStorage.getItem('data')));
            navigate('/login');
          } else {
            setResponseError(data);
            setBlockError(true);
          }
        });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleSubmit = () => {
    if (email !== '' && password !== '' && password === confirmPassword) {
      sendingRequest();
    } else {
      if (email === '') {
        setEmailError(true);
      }
      if (password === '') {
        setPasswordError(true);
      }
      if (confirmPassword === '') {
        setConfirmPasswordError(true);
      }

      if (password !== confirmPassword) {
        setCheckedPasswordError(true);
      }
      console.log('не ок');
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input
        type="email"
        id="email"
        className="form__input"
        value={email}
        onChange={(e) => handleInputChange(e)}
        placeholder="Почта"
      />
      {emailError && <p> Не заполнена почта</p>}
      <input
        className="form__input"
        type="password"
        id="password"
        value={password}
        onChange={(e) => handleInputChange(e)}
        placeholder="Пароль"
      />
      {passwordError && <p> Не заполнен пароль</p>}
      <input
        className="form__input"
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => handleInputChange(e)}
        placeholder="Повторите пароль"
      />
      {checkedPasswordError && <p>Не совпадает пароль </p>}
      {confirmPasswordError && <p>Не заполнен повторный пароль </p>}
      <button
        className={!disabled ? styles.button_btn : styles.button_btn_active}
        disabled={disabled}
        onClick={() => handleSubmit()}
        type="button">
        Зарегестрироваться
      </button>

      {blockError && (
        <div className={styles.error}>
          {responseError.email && <p>{responseError.email}</p>}
          {responseError.password && <p>{responseError.password}</p>}
        </div>
      )}
    </div>
  );
}
export default Register;
