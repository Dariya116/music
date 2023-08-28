import { Link } from 'react-router-dom';
import styles from "./login.module.scss";

function Login () {
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
          <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input placeholder="Почта"/>
      <input placeholder="Пароль"/>
      <button className={styles.login__button1} type="button">Войти</button>
      <Link to="/register"><button className={styles.login__button2} type="button">Зарегестрироваться</button></Link>
    </div>
  );
  }
  export default Login