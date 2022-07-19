import React from 'react';
import {cards_table} from './Cards'
import classes from './TableStyles.module.scss'
import {Link} from "react-router-dom";

const TableConsoles = ({price}) => {
    return (
        <div className={classes.cards_styles}>
            {cards_table.map((element) => {
                if(price <= element.price){
                return (
                    <div className={classes.card}>
                        <Link to='/home'>
                            <img src={element.image} alt='card'/>
                        </Link>
                        <div className={classes.card_description}>
                            <span className={(element.id === 5 || element.id === 9) ?  classes.card_name_big : classes.card_name}>{element.name}</span>
                            <span className={(element.id === 5 || element.id === 9) ?  classes.card_price_big : classes.card_price}>${element.price}</span>
                        </div>
                    </div>
                )}})}
        </div>
    );
};

export default TableConsoles;