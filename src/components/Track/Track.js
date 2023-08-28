import React from 'react';
import styles from "./Track.module.scss";

function Track() {
    return (
        <div className={styles.playlist__item}>
        <div className={styles.track}>
            <div className={styles.track__title}>
                <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg} alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                </div>
                <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">Morena <span className={styles.track__title_span}></span></a>
                </div>
            </div>
            <div className={styles.track__author}>
                <a className={styles.track__author_link} href="http://">Tom Boxer</a>
            </div>
            <div className={styles.track__album}>
                <a className={styles.track__album_link} href="http://">Soundz Made in Romania</a>
            </div>
            <div className={styles.track__time}>
                <svg className={styles.track__time_svg} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.track__time_text}>3:36</span>
            </div>
        </div>
    </div> 
    )
}
export default Track;