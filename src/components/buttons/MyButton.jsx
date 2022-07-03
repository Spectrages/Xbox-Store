import React from 'react';
import classes from './MyButton.scss'

const MyButton = ({props}) => {
    return (
        <button className={classes.Mybutton}>{props}</button>
    );
};

export default MyButton;