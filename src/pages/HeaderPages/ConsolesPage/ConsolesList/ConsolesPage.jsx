import React, {useState} from 'react';
import classes from './ConsolesPage.module.scss'
import {Link} from "react-router-dom";
import card_1 from './assets/image 1.png'
import card_2 from './assets/image 2.png'
import card_3 from './assets/image 3.png'
import card_4 from './assets/image 4.png'
import card_5 from './assets/image 5.png'
import card_6 from './assets/image 6.png'
import card_7 from './assets/image 7.png'
import card_8 from './assets/image 8.png'
import card_9 from './assets/image 9.png'
import card_10 from './assets/image 10.png'
import card_11 from './assets/image 11.png'
import card_12 from './assets/image 12.png'
import card_13 from './assets/image 13.png'

import tableSvg from './assets/app-menu_1.svg'
import rowSvg from './assets/app-menu_2.svg'


export const ConsolesPage = () => {
    const [number, setNumber] = useState(250)

    const cards = [
        {id: 1, name: card_1, description: 'Xbox Wireless Controller - Deep Pink', price: 64.99},
        {id: 2, name: card_2, description: 'Xbox Wireless Controller – 20th Anniversary Special Edition', price: 79.99},
        {id: 3, name: card_3, description: 'Xbox Wireless Controller – Phantom Magenta Special Edition', price: 69.99},
        {id: 4, name: card_4, description: 'PowerA Enhanced Wired Controller for Xbox Series X|S - Purple Camo', price: 37.99},
        {id: 5, name: card_5, price: 84.99},
        {id: 6, name: card_6, description: 'Xbox Wireless Controller – Forza Horizon 5 Limited Edition', price: 84.99},
        {id: 7, name: card_7, description: 'SCUF Instinct', price: 199.99},
        {id: 8, name: card_8, description: 'Xbox Wireless Controller – Grey/Blue', price: 64.99},
        {id: 9, name: card_9, price: 59.99},
        {id: 10, name: card_10, description: 'Xbox Wireless Controller + Wireless Adapter for Windows 10', price: 79.99},
        {id: 11, name: card_11, description: 'Xbox Wireless Controller – Aqua Shift Special Edition', price: 69.99},
        {id: 12, name: card_12, description: 'Thrustmaster ESWAP X Pro Controller', price: 159.99},
        {id: 13, name: card_13, description: 'PowerA Enhanced Wired Controller for Xbox Series X|S - Pink Lemonade', price: 37.99},
    ]
    return (
        <div className={classes.main_content}>

            <div className={classes.title}>
                <div className={classes.title_block}>
                    <Link className={classes.links_text} to="/accessories">Accessories</Link>
                    <span> / Controllers</span>
                </div>
                <div className={classes.header_controllers}>
                    <span className={classes.text_name}>Controllers</span>
                    <div className={classes.result_text}>
                        <span className={classes.header_text_2}>Controllers</span>
                        <span className={classes.header_text_3}>– 169 results</span>
                    </div>
                </div>
            </div>

            <div className={classes.form_block}>
                <div className={classes.price_range}>
                    <span style={{marginRight:'10px'}}>Under</span>
                    <span style={{marginRight:'10px'}}>${number}</span>
                </div>
                <input
                    className={classes.input_style}
                    step='0.01'
                    min="0"
                    max="500"
                    type ="range"
                    value = {number}
                    onChange={event => setNumber(event.target.value)}
                />

                <div className={classes.filter}>
                    <span className={classes.sort_text}>Sort result by:</span>
                    <span className={classes.selector_text}>Selector</span>
                    <img className={classes.table_icon} src={tableSvg} alt="form"/>
                    <img className={classes.row_icon} src={rowSvg} alt="form"/>
                </div>
            </div>

            <div className={classes.cards_block}>
                {cards.map((element ) => {
                    if(element.price <= number)
                    return(
                        <div className={classes.card}>
                            <Link to='/home'>
                            <img src={element.name} alt='card'/>
                            </Link>
                            <div className={classes.card_description}>
                                <span className={classes.card_name}>{element.description}</span>
                                <span className={classes.card_price}>${element.price}</span>
                            </div>
                        </div>
                    )})}
            </div>

        </div>

    );
};