import React, {useContext} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";
import {AuthContext} from "../context";
import Login from "../pages/Login";

const Router = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext);
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">about</Link>
                    {isAuth ?
                        <Link to="/posts">posts</Link>:
                        <span>
                            <Link to="/login">posts</Link>
                            <Link to="/login">login</Link>
                        </span>
                    }
                </div>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                {isAuth ?
                    <Route path="/posts" element={<Posts />} />
                     :
                    <Route path="/posts" element={<Login />} />
                }
                <Route path="/login" element={<Login />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;