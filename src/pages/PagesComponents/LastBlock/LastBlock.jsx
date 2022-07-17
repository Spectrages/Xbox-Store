import React, {useState} from 'react';
import classes from "./LastBlock.module.css";
import last_img from "../../HeaderPages/HomePage/img/image 38.png";
import DefaultButton from "../../../components/buttons/Default_button/Default_button";
import ModalWindow from "../ModalWindow/ModalWindow";

const LastBlock = ({...props}) => {
    const [modalActive, setModalActive] = useState(false);
    return (

            <div {...props} className={classes.last_block}>
                <img className={classes.last_image} src={last_img} alt="last img"/>
                <div className={classes.text_button}>
                    <span className={classes.last_text} >Save 10% on your next order</span>
                    <DefaultButton
                        style={{width: '210px'}}
                        onClick={() => setModalActive(true)}
                    >Get a discount
                    </DefaultButton>
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive}/>
            </div>
    );
};

export default LastBlock;