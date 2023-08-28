import React from 'react';
import styles from "./Bar.module.scss";

export default function Bar() {

  return (
    <div className={styles.bar__content}>
                <div className={styles.bar__player_progress}></div>
                <div className={styles.bar__player_block}>
                    <div className={styles.player}>
                        <div className={styles.player__controls}>
                            <div className={styles.player__btn_prev}>
                                <svg className={styles.player__btn_prev_svg} alt="prev">
                                    <use href="img/icon/sprite.svg#icon-prev"></use>
                                </svg>
                            </div>
                            <div className={`${styles.player__btn_play} ${styles.btn}`}>
                                <svg className={styles.player__btn_play_svg} alt="play">
                                    <use href="img/icon/play.svg"></use>
                                </svg>
                            </div>
                            <div className={styles.player__btn_next}>
                                <svg className={styles.player__btn_next_svg} alt="next">
                                    <use href="img/icon/sprite.svg#icon-next"></use>
                                </svg>
                            </div>
                            <div className={`${styles.player__btn_repeat} ${styles.btn_icon}`}>
                                <svg className={styles.player__btn_repeat_svg} alt="repeat">
                                    <use href="img/icon/sprite.svg#icon-repeat"></use>
                                </svg>
                            </div>
                            <div className={`${styles.player__btn_shuffle} ${styles.btn_icon}`}>
                                <svg className={styles.player__btn_shuffle_svg} alt="shuffle">
                                    <use href="img/icon/sprite.svg#icon-shuffle"></use>
                                </svg>
                            </div>
                        </div>
                    <div className={styles.track_play}>
                        <div className={styles.track_play__contain}>
                            <div className={styles.track_play__image}>
                                <svg className={styles.track_play__svg} alt="music">
                                    <use href="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className={styles.track_play__author}>
                                <a className={styles.track_play__author_link} href="http://">Ты та...</a>
                            </div>
                            <div className={styles.track_play__album}>
                                <a className={styles.track_play__album_link} href="http://">Баста</a>
                            </div>
                        </div>
                        <div className={styles.track_play__like_dis}>
                            <div className={`${styles.track_play__like} ${styles.btn_icon}`}>
                                <svg className={styles.track_play__like_svg} alt="like">
                                    <use href="img/icon/sprite.svg#icon-like"></use>
                                </svg>
                            </div>
                            <div className={`${styles.track_play__dislike} ${styles.btn_icon}`}>
                                <svg className={styles.track_play__dislike_svg} alt="dislike">
                                    <use href="img/icon/sprite.svg#icon-dislike"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.volume}>
                    <div className={styles.volume__content}>
                        <div className={styles.volume__image}>
                            <svg className={styles.volume__svg} alt="volume">
                                <use href="img/icon/sprite.svg#icon-volume"></use>
                            </svg>
                        </div>
                        <div className={`${styles.volume__progress} ${styles.btn}`}>
                            <input className={styles.volume__progress_line} type="range" name="range" />
                        </div>

                    </div>
                </div>
            </div>
    
    </div>
  )
}
