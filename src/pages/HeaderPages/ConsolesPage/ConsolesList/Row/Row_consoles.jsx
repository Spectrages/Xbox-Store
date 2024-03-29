import React from 'react';
import {cards_row} from '../Cards'
import classes from './row_style.module.scss'
import {Link} from "react-router-dom";

const RowConsoles = ({price}) => {
    const filteredConsoles = cards_row.filter((item) => item.price <= price)
    return (
        <div className={classes.cards_styles}>
            {filteredConsoles.map((element) => {
                return (
                    <div className={classes.card}>
                        <Link to='/xboxWC'>
                            <img src={element.image} alt='card'/>
                        </Link>
                        <form className={classes.card_description}>
                            <span className={classes.card_name}>{element.name}</span>
                            <br/>
                            <span className={classes.card_text}>{element.description_1}</span>
                            <br/>
                            <span className={classes.card_text}>{element.description_2}</span>
                            <br/>
                            <span className={classes.card_text}>{element.description_3}</span>
                            <br/>
                            <span className={classes.card_text}>{element.description_4}</span>
                        </form>
                        <span className={classes.card_price}>${element.price}</span>
                    </div>
                )})}
        </div>
    );
};

export default RowConsoles;