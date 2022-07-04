import React from 'react';
import classes from './Layout.module.scss'
import {Outlet} from "react-router-dom";
import Header from './header/Header'
import Footer from './footer/footer'

const Layout = () => {

    return (
        <div className={classes.content}>

            <Header/>

            <div className={classes.container}>
                <Outlet />
            </div>

            <Footer/>

        </div>
    );
};

export {Layout};