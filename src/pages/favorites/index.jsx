import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import Bar from '../../components/Bar/Bar';

import styles from '../home/home.module.scss';

function Favorites() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />

        <div className={styles.main}>
          <div className={styles.centerblock}>
            <Search />
            <div>
              <h2 className={styles.centerblock__h2}>Мои треки</h2>
              <div className={styles.centerblock__content}>
                <div className={styles.playlist_title}>
                  <div className={`${styles.playlist_title__col} ${styles.col01}`}>Трек</div>
                  <div className={`${styles.playlist_title__col} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
                  <div className={`${styles.playlist_title__col} ${styles.col03}`}>АЛЬБОМ</div>
                  <div className={`${styles.playlist_title__col} ${styles.col04}`}>
                    <svg className={styles.playlist_title__svg} alt="time">
                      <use href="img/icon/sprite.svg#icon-watch" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.main__sidebar}>
              <div className={styles.sidebar__personal}>
                <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
                <div className={styles.sidebar__avatar} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.bar}>
        <Bar />
      </div>
      <footer className={styles.footer} />
    </div>
  );
}
export default Favorites;
