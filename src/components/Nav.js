import React from 'react'

export default function Nav() {
    const [burger, setBurger] = React.useState(false);

    const burgerOnClick = () => {
  
        setBurger(!burger);
}
    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div onClick={() => burgerOnClick()}>
            <div className="nav__burger burger" >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
        </div>
        {burger && 

            (<div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
            </ul>
            </div>)
        } 
    </nav>
    )

}
