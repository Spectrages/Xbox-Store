import searchSvg from "../../../assets/ei_search.svg";
import {Link} from "react-router-dom";
import logoSvg from "../../../assets/xbox.svg";
import cartSvg from "../../../assets/cart.svg";
import React, {useEffect, useState} from "react";
import classes_header from './header.module.scss'
import classes from '../Layout.module.scss'
import {Cart} from "../../../pages/HeaderPages/CartPage/Storage";

const Header = () => {

    return (
        <header className={classes_header.header}>
            <div className={classes_header.searchBlock}>
                <img className={classes_header.search_svg} src={searchSvg} alt = "This is Search icon"/>
                <span className={classes_header.searchText}>Search</span>
            </div>

            <div className={classes_header.text_1}>
                <Link className={classes.linksText} to="/">Home</Link>
                <Link className={classes.linksText} to="/controllers">Consoles</Link>
                <Link className={classes.linksText} to="/accessories">Accessories</Link>
            </div>

            <img className={classes.xbox_1} src={logoSvg} alt = "This is Xbox logo"/>

            <div className={classes_header.text_2}>
                <Link className={classes.linksText} to="/games">Games</Link>
                <Link className={classes.linksText} to="/blog">Blog</Link>
                <Link className={classes.linksText} to="/contact">Contact</Link>
            </div>

            <div className={classes_header.cartBlock}>
                <img className={classes_header.cart} src = {cartSvg} alt = 'This is cart-logo'/>
                <div className={classes_header.cartsCounter}>

                    <Link className={classes.linksText} to='/cart'>Cart ({})</Link><br/>
                    <span>${}</span>

                </div>
            </div>
        </header>
    );
};

export default Header;