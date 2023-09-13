
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./register.module.scss";

function Register () {

  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [returnPassword, setReturnPassword] = useState("");

const sendLogin = () => {
if(password === returnPassword) {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
navigate("/login");
} else {
  alert("Проверьте пароль!")
}
}


    return (
      <div className={styles.register}>
        <div className={styles.logo}>
            <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
        </div>
        <input type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)} placeholder="Логин"/>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"/>
        <input type="password"
        value={returnPassword}
        onChange={(e) => setReturnPassword(e.target.value)} placeholder="Повторите пароль"/>
        <button onClick={() => sendLogin()} type="button">Зарегестрироваться</button>
      </div>
    );
  }
  export default Register;