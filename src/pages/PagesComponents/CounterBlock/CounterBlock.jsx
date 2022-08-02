import React from 'react';
import classes from "./CounterBlock.module.scss";
import {ReactComponent as IconMinus} from "./assets/minus.svg";
import {decrement, increment} from "../../../toolkitRedux/toolkitSlicer";
import {ReactComponent as IconPlus} from "./assets/plus.svg";
import {useDispatch, useSelector} from "react-redux";

const CounterBlock = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.toolkit.counter);

    const iconButton = (operation) => {
        operation === 'plus' ? dispatch(increment()) : dispatch(decrement())
    }

    return (
        <div className={classes.counter_block}>
            <IconMinus className={classes.icons} onClick={() => iconButton('minus')}/>
            <span className={classes.squad}>{counter}</span>
            <IconPlus className={classes.icons} onClick={() => iconButton('plus')}/>
        </div>
    );
};

export default CounterBlock;