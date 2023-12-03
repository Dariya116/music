import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './login.module.scss';


function Login({ setUser }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [disabledEnter, setDisabledEnter] = useState(false);
  const [emailErrorLogin, setEmailErrorLogin] = useState(false);
  const [passwordErrorLogin, setPasswordErrorLogin] = useState(false);
  const [blockErrorLogin, setBlockErrorLogin] = useState(false);
  const [responseErrorLogin, setResponseErrorLogin] = useState('');
  

  console.log('responseErrorLogin', responseErrorLogin);

  const handleInputChangeLogin = (e) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmailLogin(value);
      setEmailErrorLogin(false);
    }
    if (id === 'password') {
      setPasswordLogin(value);
      setPasswordErrorLogin(false);
    }
  };
  const selectedNameLogin = useSelector((state) => state.dataUser);
  console.log(selectedNameLogin);

  const sendingRequestLogin = () => {
    setResponseErrorLogin('');
    setDisabledEnter(true);
    setEmailErrorLogin(false);
    setPasswordErrorLogin(false);
    try {
      fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        body: JSON.stringify({
          email: emailLogin,
          password: passwordLogin,
          username: emailLogin,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          setDisabledEnter(false);
          if (!response.ok) {
            console.log(response);
            setUser(false);
            
          }
          return response.json();
        })

        .then((data) => {
          if (data.detail) {
            console.log('++++++++++++');
            setResponseErrorLogin(data.detail);
            setBlockErrorLogin(true);
            setUser(false);
          } else {
            localStorage.setItem('data', data.username);
            setUser(true);
          }

        });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleSubmitLogin = () => {
    if (emailLogin !== '' && passwordLogin !== '') {
      console.log('ok');
      sendingRequestLogin();

      localStorage.setItem('user', true);
    } else {
      if (emailLogin === '') {
        setEmailErrorLogin(true);
      }
      if (passwordLogin === '') {
        setPasswordErrorLogin(true);
      }

      console.log('не ок');
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input
        type="email"
        id="email"
        value={emailLogin}
        onChange={(e) => handleInputChangeLogin(e)}
        placeholder="Почта"
      />
      {emailErrorLogin && <p> Не заполнена почта</p>}
      <input
        type="password"
        id="password"
        value={passwordLogin}
        onChange={(e) => handleInputChangeLogin(e)}
        placeholder="Пароль"
      />
      {passwordErrorLogin && <p> Не заполнен пароль</p>}
      <button
        disabled={disabledEnter}
        onClick={() => handleSubmitLogin()}
        className={!disabledEnter ? styles.login__button1 : styles.login__button1_active}
        type="button">
        Войти
      </button>
      <Link to="/register">
        <button className={styles.login__button2} type="button">
          Зарегестрироваться
        </button>
      </Link>
      {blockErrorLogin && (
        <div className={styles.error}>{responseErrorLogin && <p>{responseErrorLogin}</p>}</div>
      )}
    </div>
  );
}
export default Login;
