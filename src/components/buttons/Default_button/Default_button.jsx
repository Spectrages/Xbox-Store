import React from 'react';
import classes from './Default_button.module.scss'

const DefaultButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}>
            <span className={classes.text}>{children}</span>
        </button>
    );
};

export default DefaultButton;