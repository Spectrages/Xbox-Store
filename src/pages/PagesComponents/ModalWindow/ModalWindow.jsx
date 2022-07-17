import React from 'react';
import classes  from './ModalWindow.module.scss'
import './ModalWindow.module.css'
import DefaultButton from "../../../components/buttons/Default_button/Default_button";

const ModalWindow = ({active, setActive}) => {

    return (
        <div className={active ? classes.modal_enable : classes.modal_disable} onClick={() => setActive(false)}>
            <div className={active ? classes.content_enable : classes.content_disable} onClick={event => event.stopPropagation()}>
                <svg
                    className={classes.close_icon}
                    width="24"
                    height="24"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setActive(false)}
                >
                    <path
                        className={classes.close_icon_active}
                        d="M1 1L25 25M1 25L25 1"
                        stroke="#D7D7D7"
                    />
                </svg>
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
    )
};

export default ModalWindow;