import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import Bar from '../../components/Bar/Bar';
import styles from '../home/home.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

function Category({setUser}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <div className={styles.main}>
          <div className={styles.centerblock}>
            <Search />
          </div>
        </div>
        <Sidebar setUser={setUser}/>
      </main>

      <div className={styles.bar}>
        <Bar />
      </div>
      <footer className={styles.footer} />
    </div>
  );
}
export default Category;
