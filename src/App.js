import React from "react";

import Track from "./components/Track";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Bar from "./components/Bar";
import MyLoader from "./components/MyLoader";
import MyLoaderRight from "./components/MyLoaderRight";

export default function  App() {

    const [loader, setLoader] = React.useState(true);
   
    const loaderTest = () => {
        

        setTimeout(() => {
            setLoader(!true);
        }, 2000);

    };

    const [musicFilter, setMusicFilter] = React.useState(false);

    const musicFilterClick = () => {
        setMusicFilter(!musicFilter);
        setMusicStyle(false);
        setMusicYear(false);
    };
    const [musicYear, setMusicYear] = React.useState(false);

    const musicYearClick = () => {
        setMusicYear(!musicYear);
        setMusicStyle(false);
        setMusicFilter(false);
    };

    const [musicStyle, setMusicStyle] = React.useState(false);

    const musicStyleClick = () => {
        setMusicStyle(!musicStyle);
        setMusicYear(false);
        setMusicFilter(false);
    };
    
  return (

    

    <div className="wrapper">
        <div className="container">
            <main className="main">
                <Nav />
                <div className="main">
                <div className="main__centerblock centerblock">
                    <Search />

                    <h2 className="centerblock__h2">Треки</h2>

                   
                    <div className="centerblock__filter filter">
                    
                        <div className="filter__title">Искать по:</div>
                        
                        <div className="filter__choice">
                        <div className="filter__button button-author _btn-text" onClick={() =>  musicFilterClick()}>исполнителю</div>
                         {musicFilter && ( 
                            <ul className="filter__menu">
                                <li className="filter__item"><a href="http://" className="filter__link">исполнитель 1</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">исполнитель 1</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">исполнитель 1</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">исполнитель 1</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">исполнитель 1</a></li>
                               
                            </ul>
                         )} 
                        </div>
                        <div className="filter__choice">
                        <div className="filter__button button-author _btn-text" onClick={() =>  musicYearClick()}>год выпуска</div>
                         {musicYear && ( 
                            <ul className="filter__menu">
                                <li className="filter__item"><a href="http://" className="filter__link">2000</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">2000</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">2000</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">2000</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">2000</a></li>
                               
                            </ul>
                         )} 
                        </div>
                        
                        <div className="filter__choice">
                        <div className="filter__button button-year _btn-text" onClick={() =>  musicStyleClick()}>жанру</div>
                        {musicStyle && ( 
                            <ul className="filter__menu">
                                <li className="filter__item"><a href="http://" className="filter__link">жанр</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">жанр</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">жанр</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">жанр</a></li>
                                <li className="filter__item"><a href="http://" className="filter__link">жанр</a></li>
                               
                            </ul>
                         )} 
                         </div>
                    </div>
                    
                    <div className="centerblock__content">
                        <div className="content__title playlist-title">
                            <div className="playlist-title__col col01">Трек</div>
                            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                            <div className="playlist-title__col col03">АЛЬБОМ</div>
                            <div className="playlist-title__col col04">
                                <svg className="playlist-title__svg" alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                </svg>
                            </div>
                        </div>
                        <div className="content__playlist playlist">
                         {loaderTest()} 
                        {loader ? <MyLoader/> : <><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /></>}

                        
                        
                            
                        </div>                        
                    </div>
                </div>
                <div className="sidebar">
                <div className="main__sidebar">
                   <div className="sidebar__personal">
                        <p className="sidebar__personal-name">Sergey.Ivanov</p>
                        <div className="sidebar__avatar">
                            
                        </div>
                </div>
                
                    </div>
                    {loaderTest()} 
                        {loader ? <MyLoaderRight/> :
                     
                        (<div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist01.png" alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist02.png" alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist03.png" alt="day's playlist" />
                                </a>
                            </div>
                        </div>
                    </div>) 
                     
                        }
                    </div>
                </div>
            </main>
            <div className="bar">
                <Bar />   
            </div>
            <footer className="footer"></footer>
        </div>
    </div>
  );
};


