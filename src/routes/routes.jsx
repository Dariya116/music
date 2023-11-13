import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import Register from '../pages/Register';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import Category from '../pages/category';
import NotFound from '../pages/notFound';

function AppRoutes() {
  const [user, setUser] = React.useState(false);
React.useEffect(() => {
  if(localStorage.getItem('user')) {
  setUser(true);
}

},[]);
console.log('user:',user);


 

  // if (localStorage.getItem('user') === true) {
  //   setUser(true);
  // } else {
  //   setUser(false);
  // }

  // localStorage.getItem('user') ||
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
      <Route
        path="/"
        element={user ? <Home user={user} setUser={setUser} /> : <Navigate to="/login" replace />}
      />

      <Route path="/register" element={<Register />} />

      <Route
        path="/favorites"
        element={user ? <Favorites setUser={setUser} /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/category1"
        element={user ? <Category setUser={setUser} /> : <Navigate to="/login" replace />}
      />
      <Route path="/category2" element={user ? <Category /> : <Navigate to="/login" replace />} />
      <Route path="/category3" element={user ? <Category /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
