import React, {useEffect, useState} from 'react';
import classes from './Cart.module.scss'
import {Cart} from "./Storage";
import Item from "./Item/Item";

export const CartPage = () => {

    const [storage, setStorage] = useState(Cart)

    return (
        <div className={classes.main_content}>
            <span className={classes.title}>Cart</span>
            {storage.length === 0 &&
                <span className={classes.empty_text}>Your cart is empty.</span> }
                <Item items={storage} setItems={setStorage}/>
            <button className={classes.myButton}>Continue shopping</button>
        </div>
    );
};
