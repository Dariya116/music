
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.search}>
        <svg className={styles.search__svg}>
            <use xlinkHref="img/icon/sprite.svg#icon-search"/>
        </svg>
        <input className={styles.search__text} type="search" placeholder="Поиск" name="search" />
    </div>
  )
}
