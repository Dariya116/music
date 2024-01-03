import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import styles from './home.module.scss';

import Track from '../../components/Track/Track';
import MyLoader from '../../components/MyLoader';

import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import Bar from '../../components/Bar/Bar';
import MyLoaderRight from '../../components/MyLoaderRight';
import SideBar from '../../components/Sidebar/Sidebar';

import { setCopyRequestResponse, setRequestResponse } from '../../redux/slices/song';
import { Filter } from '../../components/Filter/Filter';
import { useGetFavoritesQuery } from '../../redux/favoritesAPI';

function Home({ setUser, open, setOpen, favoritesPage, homePage, setLike, like }) {
  const dispatch = useDispatch();

  const [loader, setLoader] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [likeId, setLikeId] = React.useState([]);

  const [addError, setAddError] = React.useState(null);
  const { data = [], isSuccess } = useGetFavoritesQuery({}, { refetchOnMountOrArgChange: true });

  React.useEffect(() => {
    isSuccess && setLikeId(data.map((el) => el.id));
  }, [data, isSuccess]);



  const tracks = items.map((obj, index) => (
    <Track
      setOpen={setOpen}
      key={obj.id}
      {...obj}
      index={index}
      favoritesPage={favoritesPage}
      homePage={homePage}
     
     
    />
  ));

  const skeletons = [...new Array(2)].map((_, index) => <MyLoader key={Math.random(index)} />);

  React.useEffect(() => {
    setLoader(true);
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')

      .then((res) => {
        setItems(res.data);
        setLoader(false);
        console.log(res.data);
        dispatch(setCopyRequestResponse(res.data));
      })
      .catch((error) => {
        console.log(error);

        setAddError('Не удалось загрузить плейлист, попробуйте позже');
      });

    window.scrollTo(0, 0);
  }, []);

  const loaderTest = () => {
    setTimeout(() => {
      setLoader(!true);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav setUser={setUser} setOpen={setOpen} />

        <div className={styles.main}>
          <div className={styles.centerblock}>
            <Search />

            <div>
              <h2 className={styles.centerblock__h2}>Треки</h2>
              <Filter />
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
                <div className={styles.content__playlist}>
                  {loaderTest()}
                  {loader ? skeletons : tracks}
                  <p>{addError}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <SideBar setUser={setUser} setOpen={setOpen} />
            {loaderTest()}
            {loader ? (
              <MyLoaderRight />
            ) : (
              <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                  <div className={styles.sidebar__item}>
                    <Link className={styles.sidebar__link} to="/category1">
                      <img
                        className={styles.sidebar__img}
                        src="img/playlist01.png"
                        alt="day's playlist"
                      />
                    </Link>
                  </div>
                  <div className={styles.sidebar__item}>
                    <Link className={styles.sidebar__link} to="/category2">
                      <img
                        className={styles.sidebar__img}
                        src="img/playlist02.png"
                        alt="day's playlist"
                      />
                    </Link>
                  </div>
                  <div className={styles.sidebar__item}>
                    <Link className={styles.sidebar__link} to="/category3">
                      <img
                        className={styles.sidebar__img}
                        src="img/playlist03.png"
                        alt="day's playlist"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className={styles.bar}>{/* <Bar open={open} setOpen={setOpen} /> */}</div>
      <footer className={styles.footer} />
    </div>
  );
}
export default Home;
