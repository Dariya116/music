import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./home.module.scss";

import Track from "../../components/Track/Track";
import MyLoader from "../../components/MyLoader";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Bar from "../../components/Bar/Bar";
import MyLoaderRight from "../../components/MyLoaderRight";


function Home() {
    


    

    const [loader, setLoader] = React.useState(true);
   
    const loaderTest = () => {
        

        setTimeout(() => {
            setLoader(!true);
        }, 2000);

    };

    const [musicFilter, setMusicFilter] = React.useState(false);
    const [musicYear, setMusicYear] = React.useState(false);
    const [musicStyle, setMusicStyle] = React.useState(false);

    const musicFilterClick = () => {
        setMusicFilter(!musicFilter);
        setMusicStyle(false);
        setMusicYear(false);
    };
    

    const musicYearClick = () => {
        setMusicYear(!musicYear);
        setMusicStyle(false);
        setMusicFilter(false);
    };

    

    const musicStyleClick = () => {
        setMusicStyle(!musicStyle);
        setMusicYear(false);
        setMusicFilter(false);
    };

  return (
    <div className={styles.container}>
       
            <main className={styles.main}>
            
                <Nav />
                    

                <div className={styles.main}>
                <div className={styles.centerblock}>
                    <Search />

                    
                    

                    

                    <div><h2 className={styles.centerblock__h2}>Треки</h2>

                  
                    <div className={styles.filter}>

                    <div className={styles.filter__title}>Искать по:</div>
    
                    <div className={styles.filter__choice}>
                    <div role="button" tabIndex="0" className={`${styles.filter__button} ${styles.btn_text}`} onClick={() =>  musicFilterClick()} onKeyDown={() => musicFilterClick()} >исполнителю</div>
                    {musicFilter && ( 
                        <ul className={styles.filter__menu}>
                            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>исполнитель 1</a></li>
                            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>исполнитель 1</a></li>
                            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>исполнитель 1</a></li>
                            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>исполнитель 1</a></li>
                            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>исполнитель 1</a></li>
            
                        </ul>
                    )} 
                </div>
                    <div className={styles.filter__choice}>
                    <div role="button" tabIndex="0" className={`${styles.filter__button} ${styles.btn_text}`} onClick={() =>  musicYearClick()} onKeyDown={() => musicYearClick()}>год выпуска</div>
                {musicYear && ( 
        <ul className={styles.filter__menu}>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>2000</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>2000</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>2000</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>2000</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>2000</a></li>
           
        </ul>
     )} 
    </div>
    
    <div className={styles.filter__choice}>
    <div role="button" tabIndex="0" className={`${styles.filter__button} ${styles.btn_text}`} onClick={() => musicStyleClick()} onKeyDown={() => musicStyleClick()}>жанру</div>
    {musicStyle && ( 
        <ul className={styles.filter__menu}>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>жанр</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>жанр</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>жанр</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>жанр</a></li>
            <li className={styles.filter__item}><a href="http://" className={styles.filter__link}>жанр</a></li>
           
        </ul>
     )} 
     </div>
</div>

<div className={styles.centerblock__content}>
    <div className={styles.playlist_title}>

        <div className={`${styles.playlist_title__col} ${styles.col01}`}>Трек</div>
        <div className={`${styles.playlist_title__col} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
        <div className={`${styles.playlist_title__col} ${styles.col03}`}>АЛЬБОМ</div>
        <div className={`${styles.playlist_title__col} ${styles.col04}`}>
            <svg className={styles.playlist_title__svg} alt="time">
                <use href="img/icon/sprite.svg#icon-watch"/>
            </svg>
        </div>
    </div>
    <div className={styles.content__playlist}>
     {loaderTest()} 
    {loader ? <MyLoader/> : <><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /><Track /></>}

    
    
        
    </div>                        
</div></div>
                </div>
                <div className={styles.sidebar}>
                <div className={styles.main__sidebar}>
                   <div className={styles.sidebar__personal}>
                        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
                        <div className={styles.sidebar__avatar}/>
                </div>
                
                    </div>
                    {loaderTest()} 
                        {loader ? <MyLoaderRight/> :
                     
                        (<div className={styles.sidebar__block}>
                        <div className={styles.sidebar__list}>
                            <div className={styles.sidebar__item}>
                                <Link className={styles.sidebar__link} to="/category1">
                                    <img className={styles.sidebar__img} src="img/playlist01.png" alt="day's playlist" />
                                </Link>
                            </div>
                            <div className={styles.sidebar__item}>
                                <Link className={styles.sidebar__link} to="/category2">
                                    <img className={styles.sidebar__img} src="img/playlist02.png" alt="day's playlist" />
                                </Link>
                            </div>
                            <div className={styles.sidebar__item}>
                                <Link className={styles.sidebar__link} to="/category3">
                                    <img className={styles.sidebar__img} src="img/playlist03.png" alt="day's playlist" />
                                </Link>
                            </div>
                        </div>
                    </div>) 
                     
                        }
                    </div>
                </div>
            </main>
            <div className={styles.bar}>
                <Bar />   
            </div>
            <footer className={styles.footer}/>
        </div>
  )
}
export default Home;
