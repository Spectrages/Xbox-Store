import React, {useState} from 'react';
import classes from "./Item.module.scss";
import {ReactComponent as Icon_remove} from "../assets/Cross.svg";
import {ReactComponent as IconMinus} from "../../../PagesComponents/CounterBlock/assets/minus.svg";
import {CounterChangerIncrement, CounterChangerDecrement, removeProduct} from "../../../../toolkitRedux/toolkitSlicer";
import {ReactComponent as IconPlus} from "../../../PagesComponents/CounterBlock/assets/plus.svg";
import {useDispatch} from "react-redux";


const Item = ({items}) => {

    const dispatch = useDispatch();
    const getId = (item) => {
        return item.id;
    }
    return (
        <React.Fragment>
            {items.map((item) => {
                return (
                    <div key={item.description} className={classes.product}>
                        <img src={item.name} alt='item'/>
                        <div className={classes.text_block}>
                            <span className={classes.item_name}>{item.description}</span>

                            <div className={classes.counter_block}>
                                <IconMinus className={classes.icons} onClick={() => dispatch(CounterChangerDecrement(item, getId(item)))}/>
                                <span className={classes.squad}>{item.counter}</span>
                                <IconPlus className={classes.icons} onClick={() => dispatch(CounterChangerIncrement(item, getId(item)))}/>
                            </div>

                            <span className={classes.item_price}>${(item.price).toFixed(2)}</span>
                            <Icon_remove className={classes.remove_icon} onClick={() => dispatch(removeProduct(item, getId(item)))}/>
                        </div>
                    </div>
                )})}
        </React.Fragment>
    );
};

export default Item;