import React, {useState} from 'react';
import classes from './main.module.scss'
import {Link} from "react-router-dom";
import DefaultButton from '../../../../../components/buttons/Default_button/Default_button'

import {ReactComponent as Icon_right} from './assets/right_array.svg';
import {ReactComponent as Icon_left} from './assets/left_array.svg';
import {ReactComponent as Icon_plus} from './assets/plus.svg';
import {ReactComponent as Icon_minus} from './assets/minus.svg';

import image_1_white from './assets/WhiteColor/image 1.png'
import image_2_white from './assets/WhiteColor/image 2.png'
import image_3_white from './assets/WhiteColor/image 3.png'
import image_4_white from './assets/WhiteColor/image 4.png'
import image_5_white from './assets/WhiteColor/image 5.png'

const colors = ['#EB1C1E', '#000000', '#FFFFFF', '#1F5BCC', '#DCF260']
const card_img_white = [
    {name: image_1_white, enable: true, colorId: 3},
    {name: image_2_white, enable: false, colorId: 3},
    {name: image_3_white, enable: false, colorId: 3},
    {name: image_4_white, enable: false, colorId: 3},
    {name: image_5_white, enable: false, colorId: 3},
]

const price = 59.99;
const old_price = 64.99;

export const XboxWC = () => {
    const [counter, setCounter] = useState(0)
    const enable = true;

    const counterCorrect = (counter) => {
        if(counter <= 0) counter = 0;
        setCounter(counter);
    }

    const changeImage_right = (arr) => {
        arr.map((item) => item.enable === true ? item.enable = false  : null)
        console.log(arr)
    }

    const changeImage_left = (arr) => {

    }

    return (
        <div className={classes.main_content}>
            <div className={classes.title}>
                <div className={classes.title_block}>
                    <Link className={classes.links_text} to="/accessories">Accessories</Link> <span> / </span>
                    <Link className={classes.links_text} to="/controllers">Controllers</Link> <span> / </span>
                    <span>Xbox Wireless Controller</span>
                </div>
                <span className={classes.text_name}>Xbox Wireless Controller</span>
            </div>

            <div className={classes.card_left_block}>
                <div className={classes.images_block}>
                    {card_img_white.map((item) => {
                        return(
                            <img className={item.enable ? classes.img_enable : classes.img_disable} src={item.name} alt="card"/>
                        )})}
                        <div className={classes.arrow_row}>
                            <Icon_left className={classes.left_arrow} onClick={() => changeImage_left(card_img_white)}/>
                            <Icon_right className={classes.right_arrow} onClick={() => changeImage_right(card_img_white)}/>
                        </div>

                </div>

                <div className={classes.card_right_block}>
                    <div className={classes.color_block}>
                        <span className={classes.color_text}>Color</span>
                        {colors.map((item, index) => {
                            return(<div className={classes.round} style={{background: colors[index]}}/>
                            )})}
                    </div>

                    <div className={classes.counter_block}>
                        <Icon_minus onClick={() => counterCorrect(counter - 1)}/>
                        <span className={classes.squad}>{counter}</span>
                        <Icon_plus onClick={() => counterCorrect(counter + 1)}/>
                    </div>
                    <div className={classes.prices_text}>
                        <span className={classes.new_price_text}>${price}</span>
                        <span className={classes.old_price_text}>{old_price}</span>
                    </div>
                    <div className={classes.button_position}>
                        <DefaultButton style={{width: '184px'}}>Add to cart</DefaultButton>
                    </div>

                </div>
            </div>

            <div className={classes.description_block}>
                <div className={classes.left_block}>

                </div>

                <div className={classes.right_block}>

                </div>
            </div>

            <div className={classes.ad_block}>

            </div>

        </div>
    );
};