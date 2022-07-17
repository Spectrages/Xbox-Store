import React from 'react';
import classes from './Button_with_array.module.scss'
import arrow from "../../../pages/HeaderPages/AccessoriesPage/img/arrow.svg";

const ButtonWithArray = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button_style}>
            {children}
            <img src={arrow} alt='arrow'/>
        </button>
    );
};

export default ButtonWithArray;