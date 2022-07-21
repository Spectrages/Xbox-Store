import React from 'react';
import classes_footer from './footer.module.scss'
import logoSvg from "../../../assets/xbox.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
            <div className={classes_footer.footer}>
                <div className={classes_footer.leftTitle}>
                    <img src={logoSvg} alt = "This is Xbox logo"/>
                    <p className={classes_footer.date}>© 2022 XBOX</p>
                </div>
                <div className={classes_footer.rightTitle}>
                    <div className={classes_footer.footerLinksBlock}>
                        <span className={classes_footer.footerLinksBlock_1}>Store</span>

                        <Link className={classes_footer.links_text} to="/account">Microsoft account</Link>
                        <Link className={classes_footer.links_text} to="/support">Support</Link>
                        <Link className={classes_footer.links_text} to="/returns">Returns</Link>
                        <Link className={classes_footer.links_text} to="/tracking">Order tracking</Link>
                        <Link className={classes_footer.links_text} to="/location">Store location</Link>
                    </div>

                    <div className={classes_footer.footerLinksBlock}>
                        <span className={classes_footer.footerLinksBlock_1}>Resources</span>

                        <Link className={classes_footer.links_text} to="/news">Xbox News</Link>
                        <Link className={classes_footer.links_text} to="/xboxsupport">Xbox Support</Link>

                    </div>

                    <div className={classes_footer.footerLinksBlock}>
                        <span className={classes_footer.footerLinksBlock_1}>Browse</span>

                        <Link className={classes_footer.links_text} to="/consoles">Xbox consoles</Link>
                        <Link className={classes_footer.links_text} to="/games">Xbox games</Link>
                        <Link className={classes_footer.links_text} to="/accessories">Xbox accessories</Link>
                    </div>
                </div>
            </div>
    );
};

export default Footer;