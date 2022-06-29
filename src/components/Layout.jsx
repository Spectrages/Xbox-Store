import React from 'react';
import './Layout.css'
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
            <>
            <header className="Header">
                <Link to="/">Home</Link>
                <Link to="/consoles">Consoles</Link>
                <Link to="/accessories">Accessories</Link>
                <Link to="/games">Games</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </header>
            <Outlet />
            <footer className="Footer">2022</footer>
        </>
    );
};

export {Layout};