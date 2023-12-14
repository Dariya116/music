import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import Bar from '../../components/Bar/Bar';

import styles from '../home/home.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';

import { useGetFavoritesQuery } from '../../redux/favoritesAPI';
import Track from '../../components/Track/Track';
import { setCopyRequestResponse, setRequestResponse} from '../../redux/slices/song';
import { useNavigate } from 'react-router-dom';

function Favorites({ setUser, open, setOpen}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const { data = [], isLoading, error, isSuccess, } = useGetFavoritesQuery();
  
    React.useEffect (() => {
      if (data) {
        setFavoriteItems(data);
        dispatch(setRequestResponse(data));
        dispatch(setCopyRequestResponse(data));
      }
    },[])
  
  
  if (isLoading) {
    console.log(isLoading);
  }

  if (error) {
    setUser(false);
    localStorage.clear();
    navigate("/login");
console.log(error);
  }
  console.log(data);
  const tracksFavorite = favoriteItems.map((obj, index) => (
    <Track setOpen={setOpen} key={obj.id} {...obj} index={index} />
  ));
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav setUser={setUser} />

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
                <div className={styles.content__playlist}>{tracksFavorite}</div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <Sidebar setUser={setUser} />
          </div>
        </div>
      </main>

      <div className={styles.bar}>
        {/* <Bar open={open} setOpen={setOpen} /> */}
      </div>
      <footer className={styles.footer} />
    </div>
  );
}
export default Favorites;
