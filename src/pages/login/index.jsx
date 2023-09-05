import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styles from "./login.module.scss";


function Login () {
  const navigate = useNavigate();
  const [loginToLogin, setLoginToLogin] =useState("");
  const [passwordToLogin, setPasswordToLogin] =useState("");

  const verificationLogin = () => {
    if (loginToLogin === localStorage.getItem("login") && passwordToLogin === localStorage.getItem("password")) {
      navigate("/");
  } else {
    alert("Проверьте логин и пароль!")
  }
}
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
          <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input type="text"
        value={loginToLogin}
        onChange={(e) => setLoginToLogin(e.target.value)} placeholder="Почта"/>
      <input type="password"
        value={passwordToLogin}
        onChange={(e) => setPasswordToLogin(e.target.value)} placeholder="Пароль"/>
      <button onClick={() => verificationLogin()} className={styles.login__button1} type="button">Войти</button>
      <Link to="/register"><button className={styles.login__button2} type="button">Зарегестрироваться</button></Link>
    </div>
  );
  }
  export default Login