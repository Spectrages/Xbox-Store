import React from 'react';
import classes from './HomePage.module.scss'

import titleXbox from './img/titleXbox.png'

import monoBlockXbox_first from './img/xboxBlack.png'

import xbox_1 from './img/imageBlack.png'
import xbox_2 from './img/imageBlue.png'
import xbox_3 from './img/imageYellow.png'
import xbox_4 from './img/imageGreen.png'

import headset_1 from './img/headset_1.png'
import headset_2 from './img/headset_2.png'
import headset_3 from './img/headset_3.png'
import headset_4 from './img/headset_4.png'

import monoBlockXbox_second from './img/xbox_second.png'

import game_1 from './img/game-1.png'
import game_2 from './img/game-2.png'
import game_3 from './img/game-3.png'
import game_4 from './img/game-4.png'

import pop_game_1 from './img/pop_game_1.png'
import pop_game_2 from './img/pop_game_2.png'
import pop_game_3 from './img/pop_game_3.png'
import pop_game_4 from './img/pop_game_4.png'

import last_img from './img/image 38.png'



export const HomePage = () => {

    const sales_game_pictures = [
        {name: game_1, alt: "Game 1"},
        {name: game_2, alt: "Game 2"},
        {name: game_3, alt: "Game 3"},
        {name: game_4, alt: "Game 4"}
    ]

    const popular_game_pictures = [
        {name: pop_game_1, alt: "Game 1", description: "Mortal Kombat 11"},
        {name: pop_game_2, alt: "Game 2", description: "Minecraft"},
        {name: pop_game_3, alt: "Game 3", description: "Red Dead Redemption 2"},
        {name: pop_game_4, alt: "Game 4", description: "Elden Ring"}
    ]

    const quad_block_one = [
        {name: xbox_1, alt: "Xbox 1", description: "Xbox Elite Series 2 Wireless Controller", price: "$50", color: 1},
        {name: xbox_2, alt: "Xbox 2", description: "Aqua Shift Special Edition Xbox Wireless Controller", price: "$69.99", color: 0},
        {name: xbox_3, alt: "Xbox 3", description: "Xbox Elite Series 2 Wireless Controller", price: "$199.99", color: 1},
        {name: xbox_4, alt: "Xbox 4", description: "Forza Horizon 5 Limited Edition Xbox Wireless Controller", price: "$74.99", color: 0},
    ]
    const quad_block_two = [
        {name: headset_1, alt: "Xbox Wireless Headset", description: "Xbox Elite Series 2 Wireless Controller", price: "$99.99"},
        {name: headset_2, alt: "Blue Xbox", description: "Bang & Olufsen Beoplay Portal", price: "$499.99"},
        {name: headset_3, alt: "Black Xbox", description: "Xbox Stereo Headset - 20th Anniversary Special Edition", price: "$69.99"},
        {name: headset_4, alt: "Blue Xbox", description: "Xbox Stereo Headset", price: "$159.99"},
    ]

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainer_first}>
                <img className={classes.title_image} src={titleXbox} alt='Title Xbox'/>
                <div className={classes.left_block_title}>
                    <p className={classes.title_text_1}>XBOX SERIES S</p>
                    <p className={classes.title_text_2}>Next-gen performance in the smallest Xbox ever</p>
                    <button className={classes.more_button}>
                        <span className={classes.more_text}>
                            More
                        </span>
                    </button>
                </div>

            <div className={classes.mainContainer_second}>

                <div className={classes.first_monoBlock}>
                    <img className={classes.first_monoBlock_image} src={monoBlockXbox_first} alt='Title Xbox'/>
                    <p className={classes.title_text_3}>Halo infinite LIMITED EDITION XBOX SERIES X package</p>
                    <button className={classes.more_button_2}>
                        <span className={classes.more_text}>
                            More
                        </span>
                    </button>
                </div>

                <div className={classes.first_quads_block}>
                    {quad_block_one.map((element) => {
                        return(
                            <div>
                                <img src = {element.name} alt={element.alt}/>
                                <p className={classes.text_white}>{element.description}</p><br/>
                                <p className={classes.text_price_white}>{element.price}</p>

                            </div>
                        )})}
                </div>

                <div className={classes.second_quads_block}>
                    {quad_block_two.map((element) => {
                        return(
                            <div>
                                <img src = {element.name} alt={element.alt}/>
                                <p className={classes.text_white}>{element.description}</p><br/>
                                <p className={classes.text_price_white}>{element.price}</p>
                            </div>
                        )})}
                </div>

                <div className={classes.second_monoBlock}>
                    <img className={classes.second_monoBlock_image} src={monoBlockXbox_second} alt='Title Xbox'/>
                    <div className={classes.text}>
                        <p className={classes.title_text_5}>XBOX SERIES X</p>
                        <p className={classes.title_text_6}>“This is a huge leap forward”</p>
                        <p className={classes.title_text_7}>– Shazoo (RU)</p>
                    </div>
                    <button className={classes.more_button_2}>
                        <span className={classes.more_text}>
                            More
                        </span>
                    </button>
                </div>

            </div>

                <div className={classes.sales_block}>
                    <div className={classes.left_block}>
                        <p className={classes.text_sales_1}>Save up to 70%.</p>
                        <p className={classes.text_sales_2}>Collaboration Sale</p>
                        <button className={classes.more_button_3}>
                            <span className={classes.more_text}>
                                View offers
                            </span>
                        </button>
                    </div>

                    <div className={classes.right_block}>
                        {sales_game_pictures.map((element) => {
                            return(
                                <img src={element.name} alt={element.alt} />
                            )
                        })}
                    </div>
                </div>

                <div className={classes.popular_games}>
                    <p className={classes.popular_text}>Popular games</p>
                    <div className={classes.images}>
                        {popular_game_pictures.map((element) => {
                            return(
                                <figure>
                                    <img className={classes.img} src={element.name} alt={element.alt} />
                                    <figcaption>{element.description}</figcaption>
                                </figure>
                            )
                        })}
                    </div>
                </div>

                <div className={classes.last_block}>
                    <img className={classes.last_image} src={last_img} alt="last img"/>
                    <p className={classes.last_text} >Save 10% on your next order</p>
                    <button className={classes.more_button_4}>
                            <span className={classes.more_text}>
                                Get a discount
                            </span>
                    </button>
                </div>
        </div>
        </div>

    );
};
