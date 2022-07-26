import React, {useEffect, useState} from 'react';
import classes from './main.module.scss'
import {Link} from "react-router-dom";
import DefaultButton from '../../../../../components/buttons/Default_button/Default_button'
import {ad_cards, descriptions, setArrayColor, cards} from "./Script";
import {direction} from "../Slider";

import {ReactComponent as Icon_right} from './assets/right_array.svg';
import {ReactComponent as Icon_left} from './assets/left_array.svg';
import {ReactComponent as Icon_plus} from './assets/plus.svg';
import {ReactComponent as Icon_minus} from './assets/minus.svg';

const filterArray = (array, color) => {
    return array.filter(item => item.color === color)
}

const price = 59.99;
const old_price = 64.99;

export const XboxWC = () => {
    const [counter, setCounter] = useState(0)

    const [array] = useState(cards)
    const [color, setColor] = useState('white')
    const myArray = filterArray(array, color)

    const [selectArray, setSelectArray] = useState(myArray)

    const handleColorClick = (col) => {
        setSelectArray(filterArray(array, col));
        setColor(col);
    }

    function handleSlider(selectArray, dir){
        const newArray = direction(selectArray, dir)
        console.log(newArray)
        setSelectArray(prev =>  { return [...prev] })
            //prev =>  { return [...prev, newArray] }
    }

    const counterCorrect = (counter) => {
        if(counter <= 0) counter = 0;
        setCounter(counter);
    }
    const texts = [
        'Some text 1',
        'Some text 2',
        'Some text 3'
    ]
    const [text, setText] = useState(texts[0])

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
                            <Icon_left className={classes.left_arrow} onClick={() => handleSlider(selectArray, 'right')} />
                            <Icon_right className={classes.right_arrow} onClick={() => handleSlider(selectArray, 'left')} />
                        </div>

                </div>

                <div className={classes.card_right_block}>

                    <div className={classes.color_block}>
                        <span className={classes.color_text}>Color</span>
                            <button
                                onClick={() => handleColorClick('red')}
                                className={color === 'red' ? classes.round_enable : classes.round_disable}
                                style={{background: '#EB1C1E'}}
                            />
                            <button
                                onClick={() => handleColorClick('black')}
                                className={color === 'black' ? classes.round_enable : classes.round_disable}
                                style={{background: '#000000'}}
                            />
                            <button
                                onClick={() => handleColorClick('white')}
                                className={color === 'white' ? classes.round_enable : classes.round_disable}
                                style={{background: '#FFFFFF'}}
                            />
                            <button
                                onClick={() => handleColorClick('blue')}
                                className={color === 'blue' ? classes.round_enable : classes.round_disable}
                                style={{background: '#1F5BCC'}}
                            />
                            <button
                                onClick={() => handleColorClick('volt')}
                                className={color === 'volt' ? classes.round_enable : classes.round_disable}
                                style={{background: '#DCF260'}}
                            />
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

                    <div className={classes.description_right_block}>
                        <div className={classes.description_name}>
                            <button className={classes.name_style_enable} onClick={() => setText(texts[0])}>Connectivity</button>
                            <button className={classes.name_style_enable} onClick={() => setText(texts[1])}>Compatible With</button>
                            <button className={classes.name_style_enable} onClick={() => setText(texts[2])}>Battery</button>
                        </div>
                    </div>
                    <span className={classes.text_description}>{text}</span>
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
                {ad_cards.map((item) => {
                    return (
                        <div className={classes.card}>
                            <img className={classes.ad_image} src={item.image} alt='pic'/>
                            <span className={classes.ad_description}>{item.text}</span>
                            <span className={classes.ad_price}>${item.price}</span>
                        </div>

                    )
                })}
                </div>
            </div>

        </div>
    );
};