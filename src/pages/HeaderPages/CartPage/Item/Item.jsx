import React, {useState} from 'react';
import classes from "./Item.module.scss";
import {ReactComponent as Icon_remove} from "../assets/Cross.svg";


const Item = ({items}) => {

    const removeItem = (item) => {
        console.log(item)
        return items.filter(i => i.id !== item.id)
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <div className={classes.product}>
                        <img className={classes.image} src={item.name}/>
                        <div className={classes.text_block}>
                            <span className={classes.item_name}>{item.description}</span>
                            <span className={classes.item_price}>${item.price}</span>
                            <Icon_remove className={classes.remove_icon} onClick={() => removeItem(item.id)}/>
                        </div>

                    </div>
                )})}
        </div>
    );
};

export default Item;