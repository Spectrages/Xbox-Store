import React, {useState} from 'react';
import classes from './main.module.scss'
import {Link} from "react-router-dom";
import DefaultButton from '../../../../../components/buttons/Default_button/Default_button'
import {ad_cards, descriptions, colorRow, cards, descriptionText} from "./Script";
import {direction_main} from "../Slider";

import {ReactComponent as Icon_right} from './assets/right_array.svg';
import {ReactComponent as Icon_left} from './assets/left_array.svg';
import {ReactComponent as Icon_plus} from './assets/plus.svg';
import {ReactComponent as Icon_minus} from './assets/minus.svg';
import {Cart} from "../../../CartPage/Storage";

const OLD_PRICE = 64.99;

const filterArray = (array, color) => {
    return array.filter(item => item.color === color)
}

export const XboxWC = () => {

    const [counter, setCounter] = useState(0)

    const [array] = useState(cards)
    const [color, setColor] = useState('white')
    const myArray = filterArray(array, color)

    const [selectArray, setSelectArray] = useState(myArray)

    const [adArray, setAdArray] = useState(ad_cards)

    const [textDescription, setTextDescription] = useState(descriptionText[0].text)


    const handleColorClick = (col) => {
        setSelectArray(filterArray(array, col));
        setColor(col);
    }

    const handleSliderCards = (array, dir) => {
        direction_main(array, dir, 'main')
        setSelectArray([...array])
    }

    const handleSliderAdCards = (array, dir) => {
        direction_main(array, dir, 'ad')
        setAdArray([...array])
    }

    const counterCorrect = (counter) => {
        if(counter <= 0) counter = 0;
        setCounter(counter);
    }

    const PushItem = (array) => {
        if(counter > 0) return array.filter((item) => item.enable === true ? Cart.push(item) : null)
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
                    {selectArray.map((item) => {
                        return(
                            <img className={item.enable ? classes.img_enable : classes.img_disable} src={item.name} alt='card'/>
                        )})}
                        <div className={classes.arrow_row}>
                            <Icon_left className={classes.left_arrow} onClick={() => handleSliderCards(selectArray, 'right')} />
                            <Icon_right className={classes.right_arrow} onClick={() => handleSliderCards(selectArray, 'left')} />
                        </div>
                </div>

                <div className={classes.card_right_block}>

                    <div className={classes.color_block}>
                        <span className={classes.color_text}>Color</span>
                        {colorRow.map((item) => {
                            return (
                                <button onClick={() => handleColorClick(item.name)}
                                className={color === item.name ? classes.round_enable : classes.round_disable}
                                style={{background: item.hex}}
                                />
                            )})}
                    </div>

                    <div className={classes.counter_block}>
                        <Icon_minus onClick={() => counterCorrect(counter - 1)}/>
                        <span className={classes.squad}>{counter}</span>
                        <Icon_plus onClick={() => counterCorrect(counter + 1)}/>
                    </div>
                    <div className={classes.prices_text}>
                        <span className={classes.new_price_text}>${selectArray[0].price}</span>
                        <span className={classes.old_price_text}>{OLD_PRICE}</span>
                    </div>
                    <div className={classes.button_position}>
                        <DefaultButton
                            style={{width: '184px'}}
                            onClick={() => PushItem(selectArray)}
                        >
                            Add to cart</DefaultButton>
                    </div>

                    <div className={classes.description_right_block}>
                        <div className={classes.description_name}>
                            {descriptionText.map((item) => {
                                return(
                                    <button
                                        className={item.text === textDescription ? classes.name_style_enable : classes.name_style_disable}
                                        onClick={() => setTextDescription(item.text)}
                                    >
                                        {item.name}</button>
                                )})}
                        </div>
                    </div>
                    <span className={classes.text_description}>{textDescription}</span>
                </div>
            </div>

            <div className={classes.description_block}>
                <div className={classes.left_block}>
                    <span className={classes.name}>{descriptions[0].name}</span>
                    <span className={classes.some_text}>{descriptions[0].text}</span>
                </div>

                <div className={classes.right_block}>
                    <span className={classes.name}>{descriptions[1].name}</span>
                    <span className={classes.some_text}>{descriptions[1].text}</span>
                </div>
            </div>

            <div className={classes.ad_block}>
                <span className={classes.ad_title}>You will also be interested</span>
                <div className={classes.cards}>
                {adArray.map((item) => {
                    return (
                        <div className={classes.card}>
                            <img className={classes.ad_image} src={item.image} alt='pic'/>
                            <span className={classes.ad_description}>{item.text}</span>
                            <span className={classes.ad_price}>${item.price}</span>
                        </div>
                    )})}
                </div>
                <div className={classes.ad_arrows}>
                    <Icon_left className={classes.ad_icon_left} onClick={() => handleSliderAdCards(adArray, 'left')}/>
                    <Icon_right className={classes.ad_icon_right} onClick={() => handleSliderAdCards(adArray, 'right')}/>
                </div>

            </div>
        </div>
    );
};