import React, {useRef} from 'react';
import classes  from './ModalWindow.module.scss'
import './ModalWindow.module.css'
import DefaultButton from "../../../components/buttons/Default_button/Default_button";
import emailjs from 'emailjs-com'


const TEMPLATE_ID = 'template_c8516s8'
const USER_ID = 'VDZFXSVn50oR2LvxY';
const SERVICE_ID = 'service_5fwj6qn';

const ModalWindow = ({active, setActive}) => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text)
            },
                (error) => {
                console.log(error.text);
                });
        e.target.reset()
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
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
                    type='email'
                    name='user_email'
                    placeholder='Email…'
                />
                <DefaultButton
                    style={{width: '417px', marginTop: '70px'}}
                    type='submit'
                    value='Send'
                    onClick={() => setActive(false)}
                >
                    Join now
                </DefaultButton>
            </div>
        </div>
        </form>
    )
};

export default ModalWindow;