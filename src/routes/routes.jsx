import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from '../pages/home';
import Register from '../pages/Register';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import Category from '../pages/category';
import NotFound from '../pages/notFound';
import Bar from '../components/Bar/Bar';
export const userNameContext = React.createContext();


function AppRoutes() {
  const [dataUser, setDataUser] = React.useState('');
   const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
   const [like, setLike] = React.useState(localStorage.getItem('like'));
    const location = useLocation();
// React.useEffect(() => {
//   if (localStorage.getItem('like')) {
//     setLike(true);
//   }
// }, []);

 
 React.useEffect(() => {
   if (localStorage.getItem('user')) {
     setUser(true);
   }
 }, []);
const showBar =
  location.pathname.includes('category') ||
  location.pathname === '/favorites' ||
  location.pathname === '/';

console.log('user:',user);
const favoritesPage = location.pathname.includes('favorite');
const homePage = location.pathname.includes('');
  return (
    <userNameContext.Provider value={{ dataUser, setDataUser }}>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
        <Route
          path="/"
          element={
            user ? (
              <Home
                open={open}
                setOpen={setOpen}
                user={user}
                setUser={setUser}
                favoritesPage={favoritesPage}
                homePage={homePage}
                setLike={setLike}
                like={like}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/favorites"
          element={
            user ? (
              <Favorites
                open={open}
                setOpen={setOpen}
                setUser={setUser}
                favoritesPage={favoritesPage}
                homePage={homePage}
                setLike={setLike}
                like={like}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/category1"
          element={user ? <Category setUser={setUser} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/category2"
          element={user ? <Category setUser={setUser} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/category3"
          element={user ? <Category setUser={setUser} /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showBar && <Bar open={open} setOpen={setOpen} />}
    </userNameContext.Provider>
  );
}
export default AppRoutes;
