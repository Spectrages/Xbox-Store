import React, {useState} from 'react';
import classes from './main.module.scss'
import {Link} from "react-router-dom";
import DefaultButton from '../../../../../components/buttons/Default_button/Default_button'
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../../../../toolkitRedux/toolkitSlicer";
import {ad_cards, descriptions, colorRow, cards, descriptionText} from "./Script";
import {direction_main} from "../Slider";
import CounterBlock from "../../../../PagesComponents/CounterBlock/CounterBlock";

import {ReactComponent as IconRight} from './assets/right_array.svg';
import {ReactComponent as IconLeft} from './assets/left_array.svg';


const OLD_PRICE = 64.99;
const PRICE = 59.99;

const filterArray = (array, color) => {
    return array.filter(item => item.color === color)
}

export const XboxWC = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.toolkit.counter)

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

    const pushItem = (array, counter) => {
       for(let index = 0; index < array.length; index++) array[index].itemCounter = counter
       for(let index = 0; index < array.length; index++) array[index].price = array[index].price * array[index].itemCounter
       if(counter > 0) {
           for(let index = 0; index <= array.length; index++){
               if(array[index].enable === true) {
                   return (array[index])
               }
           }
       }
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
                            <img key={item.name} className={item.enable ? classes.img_enable : classes.img_disable} src={item.name} alt='card'/>
                        )})}
                        <div className={classes.arrow_row}>
                            <IconLeft className={classes.left_arrow} onClick={() => handleSliderCards(selectArray, 'right')} />
                            <IconRight className={classes.right_arrow} onClick={() => handleSliderCards(selectArray, 'left')} />
                        </div>
                </div>

                <div className={classes.card_right_block}>

                    <div className={classes.color_block}>
                        <span className={classes.color_text}>Color</span>
                        {colorRow.map((item) => {
                            return (
                                <button key={item.name} onClick={() => handleColorClick(item.name)}
                                className={color === item.name ? classes.round_enable : classes.round_disable}
                                style={{background: item.hex}}
                                />
                            )})}
                    </div>
                   <CounterBlock/>
                    <div className={classes.prices_text}>
                        <span className={classes.new_price_text}>${PRICE}</span>
                        <span className={classes.old_price_text}>{OLD_PRICE}</span>
                    </div>
                    <div className={classes.button_position}>
                        <DefaultButton
                            disabled={counter === 0}
                            style={{width: '184px'}}
                            onClick={() => dispatch(addProduct(pushItem(selectArray, counter)))}
                        >
                            Add to cart</DefaultButton>
                    </div>

                    <div className={classes.description_right_block}>
                        <div className={classes.description_name}>
                            {descriptionText.map((item) => {
                                return(
                                    <button
                                        key={item.name}
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
                        <div key={item.image} className={classes.card}>
                            <img className={classes.ad_image} src={item.image} alt='pic'/>
                            <span className={classes.ad_description}>{item.text}</span>
                            <span className={classes.ad_price}>${item.price}</span>
                        </div>
                    )})}
                </div>
                <div className={classes.ad_arrows}>
                    <IconLeft className={classes.ad_icon_left} onClick={() => handleSliderAdCards(adArray, 'left')}/>
                    <IconRight className={classes.ad_icon_right} onClick={() => handleSliderAdCards(adArray, 'right')}/>
                </div>

            </div>
        </div>
    );
};