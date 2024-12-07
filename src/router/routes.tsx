import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const AppRouter = () => {
    return (
        <Router>
            <header>
                <nav>
                    <a href="/">Home</a> | <a href="/about">About</a>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <footer>
                <p>Footer Content</p>
            </footer>
        </Router>
    );
};
