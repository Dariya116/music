import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Track.module.scss';

import { setNameTrack } from '../../redux/slices/song';

// eslint-disable-next-line camelcase
function Track({ author, name, album, duration_in_seconds, setOpen }) {
  const dispatch = useDispatch();
  const selectedTrack = useSelector((state) => state.song.nameTrack);

  const [icon, setIcon] = React.useState(selectedTrack.name === name);
  const ref = React.useRef();

  const clickTrack = (e) => {
    e.preventDefault();
    dispatch(setNameTrack({ name, author }));
    setOpen(true);
   
  };

  const onKeyPressTrack = (e) => {
    const enterOrSpace =
      e.key === 'Enter' ||
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.which === 13 ||
      e.which === 32;

    if (enterOrSpace) {
      e.preventDefault();
      clickTrack(e);
    }
  };

  const handleClickOutside = (event) => {
    if (!event.composedPath().includes(ref.current)) {
      setIcon(false);
     
    } else {
      setIcon(true);
    
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function secondsToTime() {
    
    // eslint-disable-next-line camelcase
    const minutes = duration_in_seconds % (60 * 60);
   
    const m = Math.floor(minutes / 60);

    
    const seconds = minutes % 60;
    const s = Math.ceil(seconds);

    return `${m}:${s < 10 ? `0${s}` : s}`;
  }
  const time = secondsToTime(duration_in_seconds);

  return (
    <div className={styles.playlist__item}>
      <div
        id="track"
        ref={ref}
        className={styles.track}
        role="button"
        tabIndex={0}
        onClick={(e) => clickTrack(e)}
        onKeyDown={(e) => onKeyPressTrack(e)}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <svg className={styles.track__title_svg} alt="music">
              {icon ? (
                <use href="img/icon/sprite.svg#icon-dot" />
              ) : (
                <use href="img/icon/sprite.svg#icon-note" />
              )}
            </svg>
          </div>
          <div className={styles.track__title_text}>
            <a className={styles.track__title_link} href="http://">
              {name}
              <span className={styles.track__title_span} />
            </a>
          </div>
        </div>
        <div className={styles.track__author}>
          <a className={styles.track__author_link} href="http://">
            {author}
          </a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__album_link} href="http://">
            {album}
          </a>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__time_svg} alt="time">
            <use href="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.track__time_text}>{time}</span>
        </div>
      </div>
    </div>
  );
}
export default Track;
