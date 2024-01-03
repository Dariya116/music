import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Track.module.scss';

import {
  setIndexTrack,
  setNameTrack,
  setUrlTrack,
  setIcon,
  setPulse,
  setIdTrack,
  setListTracksToPlay,
  setRequestResponse,
} from '../../redux/slices/song';
import {
  useAddFavoritesTracksMutation,
  useDeleteFavoritesTracksMutation,
  useLazyGetFavoritesQuery,
} from '../../redux/favoritesAPI';
import { useNewTokenMutation } from '../../redux/registrationAPI';
function Track({
  author,
  name,
  album,
  duration_in_seconds,
  track_file,
  id,
  setOpen,
  index,
  favoritesPage,
  homePage,
}) {
  const dispatch = useDispatch();

  const [showLike, setShowLike] = React.useState(false);
  // const [likeId, setLikeId] = React.useState(false);
  const selectedTrack = useSelector((state) => state.song.nameTrack);
  const selectedIcon = useSelector((state) => state.song.icon);
  const selectedPulse = useSelector((state) => state.song.pulse);
  const selectedIdTrack = useSelector((state) => state.song.idTrack);
  const selectedListFavorite = useSelector((state) => state.song.listTracksToPlay);
  let copyRequestResponseHome = useSelector((state) => state.song.copyRequestResponse);
  const [updateToken, { data: updateTokenData }] = useNewTokenMutation();

  // const test = trackLike.filter((el) => el === id);

  // console.log('test', test);

  const ref = React.useRef();
  const [addTracks, { isError: isErrorAddTracks, error: errorAddTracks }] =
    useAddFavoritesTracksMutation();

  const [deleteTracks, { isError, error }] = useDeleteFavoritesTracksMutation();

  const clickTrack = (e) => {
    if (homePage) {
      console.log(copyRequestResponseHome);
      dispatch(setRequestResponse(copyRequestResponseHome));
    }
    if (favoritesPage) {
      console.log(selectedListFavorite);
      dispatch(setRequestResponse(selectedListFavorite));
    }
    e.preventDefault();
    dispatch(setNameTrack({ name, author }));
    dispatch(setIndexTrack(index));

    setOpen(true);
    dispatch(setIcon(true));
    dispatch(setPulse(true));

    dispatch(setUrlTrack(track_file));

    sessionStorage.setItem('url', track_file);
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

  function secondsToTime() {
    const minutes = duration_in_seconds % (60 * 60);
    const m = Math.floor(minutes / 60);
    const seconds = minutes % 60;
    const s = Math.ceil(seconds);

    return `${m}:${s < 10 ? `0${s}` : s}`;
  }
  const time = secondsToTime(duration_in_seconds);

  const [favoritesData, { data, isError: isErrorFavoritesData, error: errorFavoritesData }] =
    useLazyGetFavoritesQuery();

  const favorites = [];
  const refreshToken = { refresh: localStorage.getItem('refreshToken') };

  React.useEffect(() => {
    favoritesData();
  }, []);

  if (data) {
    for (let i = 0; i < data.length; i++) {
      favorites.push(data[i].id);
    }
  }

  const handleLike = async () => {
    favorites.includes(id) ? await deleteTracks(id) : await addTracks(id);
    if (
      (isError && error.status === 401) ||
      (isErrorAddTracks && errorAddTracks.status === 401) ||
      (isErrorFavoritesData && errorFavoritesData.status === 401)
    ) {
      console.log('401');
      await updateToken(refreshToken).then((data) => {
        if (data.data) {
          console.log('token:', data.data.access);
          localStorage.setItem('accessToken', data.data.access);
        }
      });
      favorites.includes(id) ? await deleteTracks(id) : await addTracks(id);
    }

    await favoritesData();
  };

  return (
    <div className={styles.playlist__item}>
      <div id="track" ref={ref} className={styles.track}>
        <div
          className={styles.track}
          role="button"
          tabIndex={0}
          onClick={(e) => clickTrack(e)}
          onKeyDown={(e) => onKeyPressTrack(e)}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              <svg className={`${styles.track__title_svg} `} alt="music">
                {selectedIcon && selectedTrack.name === name ? (
                  <use
                    className={selectedPulse ? styles.active_icon : ''}
                    href="img/icon/sprite.svg#icon-dot"
                  />
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
        </div>
        <div className={styles.track__time}>
          <svg onClick={() => handleLike()} className={styles.track__time_svg} alt="time">
            {!favorites?.includes(id) ? (
              <use href="img/icon/sprite.svg#icon-like" />
            ) : (
              <use href="img/icon/sprite.svg#icon-favorite" />
            )}
          </svg>
          <span className={styles.track__time_text}>{time}</span>
        </div>
      </div>
    </div>
  );
}
export default Track;
