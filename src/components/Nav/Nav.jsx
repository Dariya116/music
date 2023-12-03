import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

export default function Nav({setUser}) {
  const ref = React.useRef();
  const [burger, setBurger] = React.useState(false);

  const navBurger = () => {
    setBurger(!burger);
  };

  const exitButton = () => {
   setUser(false);
   localStorage.clear();
  
  };
  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setBurger(false);
      }
    };

    document.addEventListener('click', clickOutside);

    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.logo__image} src="img/logo.png" alt="logo" />
        </Link>
      </div>
      <div>
        <div
          ref={ref}
          role="button"
          tabIndex="0"
          onClick={() => navBurger()}
          onKeyDown={() => navBurger()}
          className={styles.burger}>
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
        </div>
      </div>
      {burger && (
        <div className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link to="/" className={styles.menu__link}>
                Главное
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to="/favorites" className={styles.menu__link}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link onClick={() => exitButton()} to="/login" className={styles.menu__link}>
                Выйти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
