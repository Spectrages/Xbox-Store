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
import {Link} from "react-router-dom";



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

            <div className={classes.line_first_block}>
            <div className={classes.text_button_block_first_line}>
                <span className={classes.title_text}>Controllers</span>
                <Link className={classes.link_button_style} to="/controllers"><ButtonWithArray>Learn More</ButtonWithArray></Link>
            </div>
                <div className={classes.pictures_first_line}>
                    {first_pictures.map((element) => {
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='card'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.line_second_block}>
                <div className={classes.text_button_block_second_line}>
                    <span className={classes.title_text}>XBOX Design Lab</span>
                    <Link className={classes.link_button_style} to="/controllers"><ButtonWithArray>Learn More</ButtonWithArray></Link>
                </div>
                <div className={classes.pictures_second_line}>
                    {seconds_pictures.map((element) =>{
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='card'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.line_first_block}>
                <div className={classes.text_button_block_first_line}>
                    <span className={classes.title_text}>Headsets</span>
                    <Link className={classes.link_button_style} to="/controllers"><ButtonWithArray>Learn More</ButtonWithArray></Link>
                </div>
                <div className={classes.pictures_first_line}>
                    {third_pictures.map((element) => {
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='card'/>
                            </div>
                        )})}
                </div>
            </div>

            <div className={classes.line_second_block}>
                <div className={classes.text_button_block_second_line}>
                    <span className={classes.title_text}>Stands and Charging Solutions</span>
                    <Link className={classes.link_button_style} to="/controllers"><ButtonWithArray>Learn More</ButtonWithArray></Link>
                </div>
                <div className={classes.pictures_second_line}>
                    {fourth_pictures.map((element) =>{
                        return(
                            <div className={classes.picture_style}>
                                <img src={element.name} alt='card'/>
                            </div>
                        )})}
                </div>
            </div>
            <LastBlock style={{top: '1800px', left: '280px'}}/>
        </div>
    );
};