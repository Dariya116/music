import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Bar from "../../components/Bar/Bar";

import styles from "../home/home.module.scss";
import style from "./notFound.module.scss";

function NotFound () {
    return (
      <div className={styles.container}>

      <main className={styles.main}>

        <Nav />


        <div className={styles.main}>
          <div className={styles.centerblock}>
            <Search />
           
          </div>
       
    </div><div className={styles.main__sidebar}>
        <div className={styles.sidebar__personal}>
          <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
          <div className={styles.sidebar__avatar} />
        </div>
        </div>
      </main>
      <div className={style.notFound}>
        <h1>404</h1>
        <h3>Страница не найдена 😭</h3>
        <p>Возможно, она была удалена или перенесена на другой адрес</p>
        <button type="button">Вернуться на главную</button>
      </div>
      <div className={styles.bar}>
              <Bar />   
          </div>
          <footer className={styles.footer}/>
      </div>
    );
  }
  export default NotFound;