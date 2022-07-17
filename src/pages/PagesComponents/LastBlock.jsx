import React, {useState} from 'react';
import classes from "./LastBlock.module.css";
import last_img from "../HeaderPages/HomePage/img/image 38.png";
import DefaultButton from "../../components/buttons/Default_button/Default_button";
import ModalWindow from "../HeaderPages/HomePage/ModalWindow/ModalWindow";

const LastBlock = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
            <div className={classes.last_block}>
                <img className={classes.last_image} src={last_img} alt="last img"/>
                <div className={classes.text_button}>
                    <span className={classes.last_text} >Save 10% on your next order</span>

                    <button
                        className={classes.myButton}
                        onClick={() => setModalActive(true)}
                    >
                        Get a discount
                    </button>

                    {/*<DefaultButton*/}
                    {/*    style={{width: '210px'}}*/}
                    {/*    onClick={() => setModalActive(true)}*/}
                    {/*>*/}
                    {/*</DefaultButton>*/}
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive}/>
            </div>
    );
};

export default LastBlock;