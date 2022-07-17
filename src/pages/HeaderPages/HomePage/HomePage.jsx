import React, {useState} from 'react';
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
import LastBlock from "../../PagesComponents/LastBlock/LastBlock";
import ModalWindow from "../../PagesComponents/ModalWindow/ModalWindow";
import ButtonWithArray from "../../../components/buttons/Button_with_array/Button_with_array";
import {Link} from "react-router-dom";


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
                <div className={classes.title_left_block}>
                    <span className={classes.title_text_1}>XBOX SERIES S</span>
                    <span className={classes.title_text_2}>Next-gen performance in the smallest Xbox ever</span>
                    <DefaultButton>More</DefaultButton>
                </div>
            </div>

            <div className={classes.mainContainer_second}>
                <div className={classes.first_monoBlock}>
                    <img className={classes.first_monoBlock_image} src={monoBlockXbox_first} alt='Title Xbox'/>
                    <div className={classes.monoblock_text_1}>
                        <span className={classes.title_text_3}>Halo infinite</span>
                        <span className={classes.title_text_3}
                            style={{fontWeight: 'bold'}}
                        >
                            LIMITED EDITION
                        </span>
                        <span className={classes.title_text_3}
                            style={{color: '#0F7C10', fontWeight: 'bold'}}
                        >
                            XBOX SERIES X
                        </span>
                        <span className={classes.title_text_3}
                              style={{paddingBottom: '40px'}}
                        >
                            package</span>
                        <Link className={classes.link_text_style} to="/consoles"><DefaultButton>More</DefaultButton></Link>
                    </div>
                </div>

                <div className={classes.first_quads_block}>
                    {quad_block_one.map((element) => {
                        return(
                            <div className={classes.full_card}>
                                <img src={element.name} alt={element.alt}/>
                                <span className={classes.description_text}>{element.description}</span>
                                <span className={classes.price_text}>{element.price}</span>
                            </div>
                        )})}
                </div>

                <div className={classes.second_quads_block}>
                    {quad_block_two.map((element) => {
                        return(
                            <div className={classes.full_card}>
                                <img src={element.name} alt={element.alt}/>
                                <span className={classes.description_text}>{element.description}</span>
                                <span className={classes.price_text}>{element.price}</span>
                            </div>
                        )})}
                </div>

                <div className={classes.second_monoBlock}>
                    <img className={classes.second_monoBlock_image} src={monoBlockXbox_second} alt='Title Xbox'/>
                    <div className={classes.monoblock_text_2}>
                        <span className={classes.title_text_5}>XBOX SERIES X</span>
                        <span className={classes.title_text_6}>“This is a huge leap forward”</span>
                        <span className={classes.title_text_7}>– Shazoo (RU)</span>
                        <Link className={classes.link_text_style} to="/consoles"><DefaultButton>More</DefaultButton></Link>
                    </div>
                </div>
            </div>

            <div className={classes.sales_block}>
                <div className={classes.sales_text_block}>
                    <span className={classes.text_sales_1}>Save up to 70%.</span>
                    <span className={classes.text_sales_2}>Collaboration Sale</span>
                    <DefaultButton style={{width: '186px'}}>View offers</DefaultButton>
                </div>
                    <div className={classes.right_block}>
                        {sales_game_pictures.map((element) => {
                            return(
                                <img src={element.name} alt={element.alt} />
                            )})}
                    </div>
                </div>

            <div className={classes.popular_games}>
                    <span className={classes.popular_text}>Popular games</span>
                    <div className={classes.images}>
                        {popular_game_pictures.map((element) => {
                            return(
                                <figure>
                                    <img className={classes.img} src={element.name} alt={element.alt} />
                                    <figcaption>{element.description}</figcaption>
                                </figure>
                            )})}
                    </div>
                </div>
            <LastBlock style={{top: '2700px'}}/>
        </div>
    );
};
