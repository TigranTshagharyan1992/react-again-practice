import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";

const Router = () => {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">about</Link>
                    <Link to="/posts">posts</Link>
                </div>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;