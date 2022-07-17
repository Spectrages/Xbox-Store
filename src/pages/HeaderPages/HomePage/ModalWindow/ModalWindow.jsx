import React, {useState} from 'react';
import classes  from './ModalWindow.module.scss'
import './ModalWindow.module.css'
import DefaultButton from "../../../../components/buttons/Default_button/Default_button";

const ModalWindow = ({active, setActive}) => {

    return (
        <div className={active ? classes.modal : classes.modal.active} onClick={() => setActive(false)}>
            <div className={classes.content} onClick={event => event.stopPropagation()}>
                <span className={classes.text_1}>Save 10% on your next order</span>
                <span className={classes.text_2}>Subscribe to our newsletter & receive a coupon</span>
                <input
                className={classes.input_style}
                placeholder='Type your email'
                />
                <DefaultButton
                    style={{width: '417px', marginTop: '70px'}}
                >
                    Join now
                </DefaultButton>
            </div>
        </div>
    );
};

export default ModalWindow;