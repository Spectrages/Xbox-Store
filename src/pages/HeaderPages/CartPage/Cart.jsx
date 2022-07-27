import React, {useState} from 'react';
import classes from './Cart.module.scss'
import DefaultButton from "../../../components/buttons/Default_button/Default_button";
import {Cart} from "./Storage";

export const CartPage = ({counter, setCounter}) => {
    const [storageArr, setStorageArr] = useState(Cart)

    return (
        <div className={classes.main_content}>
            <span className={classes.title}>Cart</span>
            {storageArr.length === 0 &&
                <span className={classes.empty_text}>Your cart is empty.</span> }
            {storageArr.map((item) => {
                return (
                    <div className={classes.product}>
                        //Some product
                    </div>
                )})}

            <button className={classes.myButton}>Continue shopping</button>
        </div>
    );
};
