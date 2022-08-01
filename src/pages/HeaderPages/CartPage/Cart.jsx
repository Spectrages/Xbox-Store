import React from 'react';
import classes from './Cart.module.scss'
import Item from "./Item/Item";
import {store} from "../../../toolkitRedux";
import {useSelector} from "react-redux";
import DefaultButton from "../../../components/buttons/Default_button/Default_button";

export const CartPage = () => {
    const store = useSelector(state => state.toolkit.store)
    console.log(store)

    const sumPrice = (array) => {
        let result = 0;
        for(let index = 0; index < array.length; index++) {
            result += array[index].price * array[index].counter;
        }
        return result
    }
    const size = store.length;

    return (
        <div className={classes.main_content}>
            <span className={classes.title}>Cart</span>
            {size ? (
                <React.Fragment>
                    <Item items={store}/>
                    <div className={classes.buttons}>
                        <button className={classes.myButton}>Continue shopping</button>
                        <div className={classes.prices_block}>
                            <span className={classes.delivery_text}>Delivery Free</span>
                            <span className={classes.total_text}>Total <span className={classes.price_text}>${sumPrice(store)}</span></span>
                            <DefaultButton style={{width:'201px'}}>Proceed to checkout</DefaultButton>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <span className={classes.empty_text}>Your cart is empty.</span>
                    <button style={{marginTop: '250px'}} className={classes.myButton}>Continue shopping</button>
                </React.Fragment>
            )}

        </div>
    );
};
