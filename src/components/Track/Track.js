/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from "react-redux";

import styles from "./Track.module.scss";

import { setAuthorTrack, setNameTrack } from "../../redux/slices/song"


function Track({author, name, album, duration_in_seconds, setOpen}) {
    const dispatch = useDispatch();


   const[icon, setIcon]=React.useState(false);
   const ref = React.useRef();
 const  clickIconTrack = () => {
    dispatch(setNameTrack(name));
    dispatch(setAuthorTrack(author));
   
    setIcon(!icon);
    setOpen(true);
    
   } 

   

   React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setIcon(false);  
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
        <div className={styles.playlist__item}>
        
        <div ref = { ref} className={styles.track}>
            <div className={styles.track__title}>
                <div  className={styles.track__title_image}  >
                    <svg className={styles.track__title_svg} alt="music" onClick={() => clickIconTrack()}> 
                   {icon ? <use href="img/icon/sprite.svg#icon-dot"/> :
                   <use href="img/icon/sprite.svg#icon-note"/>}
                    </svg>
                </div>
                <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">{name} <span className={styles.track__title_span}/></a>
                </div>
            </div>
            <div className={styles.track__author}>
                <a className={styles.track__author_link} href="http://">{author}</a>
            </div>
            <div className={styles.track__album}>
                <a className={styles.track__album_link} href="http://">{album}</a>
            </div>
            <div className={styles.track__time}>
                <svg className={styles.track__time_svg} alt="time">
                    <use href="img/icon/sprite.svg#icon-like"/>
                </svg>
                <span className={styles.track__time_text}>{duration_in_seconds}</span>
            </div>
        </div>
    </div> 
    )
}
export default Track;