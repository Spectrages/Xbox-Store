import React from 'react';
import classes_footer from './footer.module.scss'
import classes from '../Layout.module.scss'
import logoSvg from "../../../assets/xbox.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className={classes_footer.footer}>
                <div className={classes_footer.leftTitle}>
                    <img className={classes.xbox_1} src={logoSvg} alt = "This is Xbox logo"/>
                    <p className={classes_footer.date}>© 2022 XBOX</p>
                </div>
                <div className={classes_footer.rightTitle}>
                    <div className={classes_footer.footerLinksBlock}>
                        <p className={classes_footer.footerLinksBlock_1}>Store</p>

                        <Link className={classes.linksText} to="/account">Microsoft account</Link>
                        <Link className={classes.linksText} to="/support">Support</Link>
                        <Link className={classes.linksText} to="/returns">Returns</Link>
                        <Link className={classes.linksText} to="/tracking">Order tracking</Link>
                        <Link className={classes.linksText} to="/location">Store location</Link>
                    </div>

                    <div className={classes_footer.footerLinksBlock}>
                        <p className={classes_footer.footerLinksBlock_1}>Resources</p>

                        <Link className={classes.linksText} to="/news">Xbox News</Link>
                        <Link className={classes.linksText} to="/xboxsupport">Xbox Support</Link>

                    </div>

                    <div className={classes_footer.footerLinksBlock}>
                        <p className={classes_footer.footerLinksBlock_1}>Browse</p>

                        <Link className={classes.linksText} to="/consoles">Xbox consoles</Link>
                        <Link className={classes.linksText} to="/games">Xbox games</Link>
                        <Link className={classes.linksText} to="/accessories">Xbox accessories</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;