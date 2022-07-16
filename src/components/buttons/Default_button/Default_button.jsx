import React from 'react';
import classes from './Default_button.module.scss'

const DefaultButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
};

export default DefaultButton;