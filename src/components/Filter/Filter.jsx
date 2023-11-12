import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Filter.module.scss';

export function Filter() {
  const requestResponse = useSelector((state) => state.song.requestResponse);

  const authorFilter = requestResponse.map((obj) => obj.author);
  const genreFilter = requestResponse.map((obj) => obj.genre);
  const yearFilter = requestResponse.map((obj) => obj.release_date);
  const makeUniqAuthor = (author) => [...new Set(author)];

  const makeUniqGenre = (genre) => [...new Set(genre)];

  const makeUniqYear = (year) => [...new Set(year)];

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

  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();

  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setMusicFilter(false);
      }
      if (!event.composedPath().includes(ref1.current)) {
        setMusicYear(false);
      }
      if (!event.composedPath().includes(ref2.current)) {
        setMusicStyle(false);
      }
    };

    document.addEventListener('click', clickOutside);

    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);
  return (
    <div className={styles.filter}>
      <div className={styles.filter__title}>Искать по:</div>

      <div className={styles.filter__choice}>
        <div
          ref={ref}
          role="button"
          tabIndex="0"
          className={`${styles.filter__button} ${styles.btn_text}`}
          onClick={() => musicFilterClick()}
          onKeyDown={() => musicFilterClick()}>
          исполнителю
        </div>
        {musicFilter && (
          <ul className={styles.filter__menu}>
            <li className={styles.filter__item}>
              {makeUniqAuthor(authorFilter).map((author) => (
                <a href="http://" className={styles.filter__link}>
                  {author}
                </a>
              ))}
            </li>
          </ul>
        )}
      </div>
      <div className={styles.filter__choice}>
        <div
          ref={ref1}
          role="button"
          tabIndex="0"
          className={`${styles.filter__button} ${styles.btn_text}`}
          onClick={() => musicYearClick()}
          onKeyDown={() => musicYearClick()}>
          год выпуска
        </div>
        {musicYear && (
          <ul className={styles.filter__menu}>
            <li className={styles.filter__item}>
              {makeUniqYear(yearFilter)
                .filter((year) => year !== null)
                .map((year) => year.slice(0, 4))
                .filter((year, index, arr) => arr.slice(0, index).indexOf(year) === -1)
                .sort((a, b) => a - b)
                .map((year) => (
                  <a href="http://" className={styles.filter__link}>
                    {year}
                  </a>
                ))}
            </li>
          </ul>
        )}
      </div>

      <div className={styles.filter__choice}>
        <div
          ref={ref2}
          role="button"
          tabIndex="0"
          className={`${styles.filter__button} ${styles.btn_text}`}
          onClick={() => musicStyleClick()}
          onKeyDown={() => musicStyleClick()}>
          жанру
        </div>
        {musicStyle && (
          <ul className={styles.filter__menu}>
            <li className={styles.filter__item}>
              {makeUniqGenre(genreFilter).map((genre) => (
                <a href="http://" className={styles.filter__link}>
                  {genre}
                </a>
              ))}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
