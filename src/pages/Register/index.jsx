import styles from './register.module.scss';

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="img/logo2.png" alt="logo" />
      </div>
      <input
        type="text"
        //  value={login}
        placeholder="Логин"
      />
      <input
        type="password"
        //  value={password}
        placeholder="Пароль"
      />
      <input
        type="password"
        // value={returnPassword}
        placeholder="Повторите пароль"
      />
      <button type="button">Зарегестрироваться</button>
    </div>
  );
}
export default Register;
