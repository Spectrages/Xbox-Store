import React from 'react';
import classes from './HomePage.module.scss'
import DefaultButton from '../../../components/buttons/Default_button/Default_button'

import titleXbox from './img/titleXbox.png'

import monoBlockXbox_first from './img/xboxBlack.png'

import card_1 from './img/1_card.png'
import card_2 from './img/2_card.png'
import card_3 from './img/3_card.png'
import card_4 from './img/4_card.png'

import card_5 from './img/5_card.png'
import card_6 from './img/6_card.png'
import card_7 from './img/7_card.png'
import card_8 from './img/8_card.png'

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
        {name: card_1, alt: "Card 1", description: "Xbox Elite Series 2 Wireless Controller", price: "$50"},
        {name: card_2, alt: "Card 2", description: "Aqua Shift Special Edition Xbox Wireless Controller", price: "$69.99"},
        {name: card_3, alt: "Card 3", description: "Forza Horizon 5 Limited Edition Xbox Wireless Controller", price: "$74.99"},
        {name: card_4, alt: "Card 4", description: "Xbox Elite Series 2 Wireless Controller", price: "$199.99"},
    ]
    const quad_block_two = [
        {name: card_5, alt: "Card 5", description: "Xbox Wireless Headset", price: "$99.99"},
        {name: card_6, alt: "Card 6", description: "Bang & Olufsen Beoplay Portal", price: "$499.99"},
        {name: card_7, alt: "Card 7", description: "Xbox Stereo Headset - 20th Anniversary Special Edition", price: "$69.99"},
        {name: card_8, alt: "Card 8", description: "Xbox Stereo Headset", price: "$159.99"},
    ]

    return (
        <div className={classes.mainContainer}>

            <div className={classes.mainContainer_first}>
                <img className={classes.title_image} src={titleXbox} alt='Title Xbox'/>
                <div className={classes.left_block_title}>
                    <p className={classes.title_text_1}>XBOX SERIES S</p>
                    <p className={classes.title_text_2}>Next-gen performance in the smallest Xbox ever</p>
                    <DefaultButton>
                            More
                    </DefaultButton>
                </div>
            </div>

            <div className={classes.mainContainer_second}>
                <div className={classes.first_monoBlock}>
                    <img className={classes.first_monoBlock_image} src={monoBlockXbox_first} alt='Title Xbox'/>
                    <p className={classes.title_text_3}>Halo infinite LIMITED EDITION XBOX SERIES X package</p>
                    <DefaultButton>
                            More
                    </DefaultButton>
                </div>

                <div className={classes.first_quads_block}>
                    {quad_block_one.map((element) => {
                        return(
                            <div className={classes.full_card}>
                                <img src={element.name} alt={element.alt}/>
                                <span className={classes.description_text}>{element.description}<br/>{element.price}</span>
                            </div>
                        )})}
                </div>

                <div className={classes.second_quads_block}>
                    {quad_block_two.map((element) => {
                        return(
                            <div className={classes.full_card}>
                                <img src={element.name} alt={element.alt}/>
                                <span className={classes.description_text}>{element.description}<br/>{element.price}</span>
                            </div>
                        )})}
                </div>

                <div className={classes.second_monoBlock}>
                    <img className={classes.second_monoBlock_image} src={monoBlockXbox_second} alt='Title Xbox'/>
                    <div>
                        <p className={classes.title_text_5}>XBOX SERIES X</p>
                        <p className={classes.title_text_6}>“This is a huge leap forward”</p>
                        <p className={classes.title_text_7}>– Shazoo (RU)</p>
                    </div>
                    <DefaultButton>
                        More
                    </DefaultButton>
                </div>
            </div>

            <div className={classes.sales_block}>
                        <p className={classes.text_sales_1}>Save up to 70%.</p>
                        <p className={classes.text_sales_2}>Collaboration Sale</p>
                        <DefaultButton>
                            View offers
                        </DefaultButton>
                    <div className={classes.right_block}>
                        {sales_game_pictures.map((element) => {
                            return(
                                <img src={element.name} alt={element.alt} />
                            )})}
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
                    <DefaultButton>
                        Get a discount
                    </DefaultButton>
                </div>

        </div>
    );
};
