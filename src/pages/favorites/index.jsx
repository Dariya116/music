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
            </div>
          </div>
        </div>
        <div className={styles.main__sidebar}>
          <div className={styles.sidebar__personal}>
            <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
            <div className={styles.sidebar__avatar} />
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
