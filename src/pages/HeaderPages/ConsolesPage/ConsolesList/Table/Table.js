import React from 'react';
import classes from "./TableStyles.module.scss";
import {Link} from "react-router-dom";

const Table = ({price, consoles}) => {
    const filteredConsoles = consoles.filter((item) => item.price <= price)
    return (
        <div className={classes.cards_styles}>
            {filteredConsoles.map(item=> {
                    return(
                        <div key={item.id} className={classes.card}>
                            <Link to='/xboxWC'>
                                <img className={(item.id !== 5 && item.id !== 9) ? classes.img_short : ''} src={item.image} alt='card'/>
                            </Link>
                            <div className={classes.card_description}>
                                <span className={(item.id === 5 || item.id === 9) ?  classes.card_name_big : classes.card_name}>{item.name}</span>
                                <span className={(item.id === 5 || item.id === 9) ?  classes.card_price_big : classes.card_price}>${item.price}</span>
                            </div>
                        </div>
                    )})}
            </div>
    );
};

export default Table;
