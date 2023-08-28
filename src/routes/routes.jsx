import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Register from "../pages/Register";
import Login from "../pages/login";
import Favorites from "../pages/favorites";
import Category from "../pages/category";
import NotFound from "../pages/notFound";


function  AppRoutes() {

    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category1" element={<Category />} />
            <Route path="/category2" element={<Category />} />
            <Route path="/category3" element={<Category />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default AppRoutes;