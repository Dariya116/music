import React from 'react';
import styles from "./Nav.module.scss";

export default function Nav() {
    const [burger, setBurger] = React.useState(false);

    const burgerOnClick = () => {
  
        setBurger(!burger);
}
    return (
        <nav className={styles.nav}>
        <div className={styles.logo}>
            <img className={styles.logo__image} src="img/logo.png" alt="logo" />
        </div>
        <div onClick={() => burgerOnClick()}>
            <div className={styles.burger}>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
            </div>
        </div>
        {burger && 

            (<div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}><a href="http://" className={styles.menu__link}>Главное</a></li>
                <li className={styles.menu__item}><a href="http://" className={styles.menu__link}>Мой плейлист</a></li>
                <li className={styles.menu__item}><a href="http://" className={styles.menu__link}>Войти</a></li>
            </ul>
            </div>)
        } 
    </nav>
    )

}
