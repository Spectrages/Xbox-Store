import React from 'react';
import classes from './AccesoriesPage.module.scss'
import pic_1 from './img/image1.png'
import pic_2 from './img/image2.png'
import pic_3 from './img/image3.png'

import pic_4 from './img/image4.png'
import pic_5 from './img/image5.png'
import pic_6 from './img/image6.png'
import pic_7 from './img/image7.png'

import pic_8 from './img/image8.png'
import pic_9 from './img/image9.png'
import pic_10 from './img/image10.png'

import pic_11 from './img/image11.png'
import pic_12 from './img/image12.png'
import pic_13 from './img/image13.png'
import pic_14 from './img/image14.png'

import LastBlock from "../../PagesComponents/LastBlock/LastBlock";
import ButtonWithArray from "../../../components/buttons/Button_with_array/Button_with_array";



export const AccessoriesPage = () => {

    const first_pictures = [
        {name: pic_1},
        {name: pic_2},
        {name: pic_3},
    ]

    const seconds_pictures = [
        {name: pic_4},
        {name: pic_5},
        {name: pic_6},
        {name: pic_7}
    ]

    const third_pictures = [
        {name: pic_8},
        {name: pic_9},
        {name: pic_10},
    ]

    const fourth_pictures = [
        {name: pic_11},
        {name: pic_12},
        {name: pic_13},
        {name: pic_14},
    ]

    return (
        <div className={classes.main_content}>

            <div className={classes.first_block}>
            <div className={classes.text_button_block_first}>
                <span className={classes.title_text}>Controllers</span>
                <ButtonWithArray>Learn More</ButtonWithArray>
            </div>
                <div className={classes.pictures_first}>
                    {first_pictures.map((element) => {
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.second_block}>
                <div className={classes.text_button_block_second}>
                    <span className={classes.title_text}>XBOX Design Lab</span>
                    <ButtonWithArray>Learn More</ButtonWithArray>
                </div>
                <div className={classes.pictures_second}>
                    {seconds_pictures.map((element) =>{
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.third_block}>
                <div className={classes.text_button_block_first}>
                    <span className={classes.title_text}>Headsets</span>
                    <ButtonWithArray>Learn More</ButtonWithArray>
                </div>
                <div className={classes.pictures_first}>
                    {third_pictures.map((element) => {
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.fourth_block}>
                <div className={classes.text_button_block_fourth}>
                    <span className={classes.title_text}>Stands and Charging Solutions</span>
                    <ButtonWithArray>Learn More</ButtonWithArray>
                </div>
                <div className={classes.pictures_second}>
                    {fourth_pictures.map((element) =>{
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>
            <LastBlock style={{top: '1800px', left: '280px'}}/>
        </div>
    );
};