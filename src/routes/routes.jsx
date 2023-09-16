import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";




import Home from "../pages/home";
import Register from "../pages/Register";
import Login from "../pages/login";
import Favorites from "../pages/favorites";
import Category from "../pages/category";
import NotFound from "../pages/notFound";



function  AppRoutes() {
    
    const [isLoggedIn, setLoggedIn] = React.useState(
        localStorage.getItem("isLoggedIn") || false,
      );
    
    return (
     
        <Routes>
        
        <Route
        path="/login"
        element=
        
          {isLoggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} />
        }
      />
      <Route
        path="/"
        element={
          isLoggedIn ? <Home setLoggedIn={setLoggedIn}/> : <Navigate to="/login" replace />
        }
      />
    
            
            
            <Route path="/register" element={<Register />} />
            
            <Route path="/favorites" element={
          isLoggedIn ? <Favorites /> : <Navigate to="/login" replace />
        } />
            <Route path="/category1" element={
          isLoggedIn ? <Category /> : <Navigate to="/login" replace />
        }/>
            <Route path="/category2" element={
          isLoggedIn ? <Category /> : <Navigate to="/login" replace />
        } />
            <Route path="/category3" element={
          isLoggedIn ? <Category /> : <Navigate to="/login" replace />
        } />
            <Route path="*" element={<NotFound />} />
        </Routes>
       
    );
};
export default AppRoutes;