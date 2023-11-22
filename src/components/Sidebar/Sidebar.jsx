import React from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { userNameContext } from '../../routes/routes';

function Sidebar({ setUser }) {
  const { dataUser, setDataUser } = React.useContext(userNameContext);

  const navigate = useNavigate();
  setDataUser(localStorage.getItem('data'));

  const exitIcon = () => {
    setUser(false);
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>{dataUser}</p>
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
