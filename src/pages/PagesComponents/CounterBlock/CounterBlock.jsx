import React from 'react';
import classes from "./CounterBlock.module.scss";
import {ReactComponent as IconMinus} from "./assets/minus.svg";
import {decrement, increment, addProduct, } from "../../../toolkitRedux/toolkitSlicer";
import {ReactComponent as IconPlus} from "./assets/plus.svg";
import {useDispatch, useSelector} from "react-redux";

const CounterBlock = ({element}) => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.toolkit.counter);
    const store = useSelector(state => state.toolkit.store);

    return (
        <div className={classes.counter_block}>
            <IconMinus className={classes.icons} onClick={() => dispatch(decrement())}/>
            <span className={classes.squad}>{counter}</span>
            <IconPlus className={classes.icons} onClick={() => dispatch(increment())}/>
        </div>
    );
};

export default CounterBlock;