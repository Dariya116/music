/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Bar.module.scss';

export default function Bar({ open }) {
  const audioRef = React.useRef(null);
  const song = useSelector((state) => state.song.nameTrack.name);
  const authorSong = useSelector((state) => state.song.nameTrack.author);
  const selectedUrlTrack = useSelector((state) => state.song.urlTrack);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [repeat, setRepeat] = React.useState(false);
  const [volume, setVolume] = React.useState(60);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  React.useEffect(() => {
    if (song) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song, selectedUrlTrack]);

  const handleRepeat = () => {
    setRepeat(!repeat);
    if (!repeat) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  };

  React.useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };
    React.useEffect(() => {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }, []);
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };
  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }


  const inProgress = () => {
    alert('Еще не реализовано!');
  };

  return (
    <div>
      <audio src={selectedUrlTrack} ref={audioRef} style={{ marginBottom: '100px' }} />

      <div className={styles.bar__content}>
        {open && (
          <>
            <div>
              <div className={styles.bar__player_progress}>
                <span>{formatDuration(currentTime)}</span>
                <span> / </span>
                <span>{formatDuration(duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className={styles.input_progress}
              />
            </div>

            <div className={styles.bar__player_block}>
              <div className={styles.player}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btn_prev}>
                    <svg
                      className={styles.player__btn_prev_svg}
                      alt="prev"
                      onClick={inProgress}
                      onKeyDown={inProgress}>
                      <use href="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div
                    className={`${styles.player__btn_play} ${styles.btn}`}
                    onClick={togglePlay}
                    onKeyDown={togglePlay}>
                    <svg className={styles.player__btn_play_svg} alt="play">
                      <use
                        href={
                          !isPlaying
                            ? 'img/icon/sprite.svg#icon-play'
                            : 'img/icon/sprite.svg#icon-pause'
                        }
                      />
                    </svg>
                  </div>
                  <div
                    className={styles.player__btn_next}
                    onClick={inProgress}
                    onKeyDown={inProgress}>
                    <svg className={styles.player__btn_next_svg} alt="next">
                      <use href="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div
                    className={`${styles.player__btn_repeat} ${styles.btn_icon}`}
                    onClick={() => handleRepeat()}
                    onKeyDown={() => handleRepeat()}>
                    <svg
                      className={
                        !repeat
                          ? styles.player__btn_repeat_svg
                          : styles.player__btn_repeat_svg_active
                      }
                      alt="repeat">
                      <use href="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div
                    className={`${styles.player__btn_shuffle} ${styles.btn_icon}`}
                    onClick={inProgress}
                    onKeyDown={inProgress}>
                    <svg className={styles.player__btn_shuffle_svg} alt="shuffle">
                      <use href="img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>
                <div className={styles.track_play}>
                  <div className={styles.track_play__contain}>
                    <div className={styles.track_play__image}>
                      <svg className={styles.track_play__svg} alt="music">
                        <use href="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className={styles.track_play__author}>
                      <a className={styles.track_play__author_link} key={song} href="http://">
                        {song}
                      </a>
                    </div>
                    <div className={styles.track_play__album}>
                      <a className={styles.track_play__album_link} href="http://">
                        {authorSong}
                      </a>
                    </div>
                  </div>
                  <div className={styles.track_play__like_dis}>
                    <div className={`${styles.track_play__like} ${styles.btn_icon}`}>
                      <svg className={styles.track_play__like_svg} alt="like">
                        <use href="img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className={`${styles.track_play__dislike} ${styles.btn_icon}`}>
                      <svg className={styles.track_play__dislike_svg} alt="dislike">
                        <use href="img/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.volume}>
                <div className={styles.volume__content}>
                  <div className={styles.volume__image}>
                    <svg className={styles.volume__svg} alt="volume">
                      <use href="img/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div className={`${styles.volume__progress} ${styles.btn}`}>
                    <input
                      className={styles.volume__progress_line}
                      type="range"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      min={0}
                      max={100}
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
