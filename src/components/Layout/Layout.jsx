import React from 'react';
import './Layout.css'
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
            <>
            <header className="Header">
                <Link className="Links" to="/">Home</Link>
                <Link className="Links" to="/consoles">Consoles</Link>
                <Link className="Links" to="/accessories">Accessories</Link>

                <Link className="Links" to="/games">Games</Link>
                <Link className="Links" to="/blog">Blog</Link>
                <Link className="Links" to="/contact">Contact</Link>
            </header>
            <Outlet />
            <footer className="Footer">2022</footer>
        </>
    );
};

export {Layout};