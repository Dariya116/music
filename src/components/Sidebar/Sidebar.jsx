import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { setDataUser } from '../../redux/slices/dataUser';


function Sidebar({ setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setDataUser(localStorage.getItem('data')));
  const selectedName = useSelector((state) => state.dataUser);

  const exitIcon = () => {
    setUser(false);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>{selectedName.dataUser}</p>
        <div className={styles.sidebar__avatar}>
          <svg alt="exit" onClick={() => exitIcon()}>
            <use href="img/icon/sprite.svg#icon-exit" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;