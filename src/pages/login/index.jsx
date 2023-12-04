import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

function Login({ setUser }) {
  const [loginToLogin, setLoginToLogin] = useState('');

  const verificationLogin = () => {
    if (loginToLogin) {
      setUser(true);
      localStorage.setItem('user', true);
    }
  };

  return (
    <form className={styles.login}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input
        type="text"
        value={loginToLogin}
        onChange={(e) => setLoginToLogin(e.target.value)}
        placeholder="Почта"
      />
      <input
        type="password"
        // value={passwordToLogin}
        placeholder="Пароль"
      />
      <button onClick={() => verificationLogin()} className={styles.login__button1} type="button">
        Войти
      </button>
      <Link to="/register">
        <button className={styles.login__button2} type="button">
          Зарегестрироваться
        </button>
      </Link>
    </form>
  );
}
export default Login;
