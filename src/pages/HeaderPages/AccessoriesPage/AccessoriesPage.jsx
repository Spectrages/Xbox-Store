import React from 'react';
import classes from './AccesoriesPage.module.scss'
import arrow from './img/arrow.svg'
import pic_1 from './img/image1.png'
import pic_2 from './img/image2.png'
import pic_3 from './img/image3.png'

import pic_4 from './img/image4.png'
import pic_5 from './img/image5.png'
import pic_6 from './img/image6.png'
import pic_7 from './img/image7.png'

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

    return (
        <div className={classes.main_content}>
            <div>
                <div className={classes.controllers_block}>
                    <span className={classes.text_controllers}>Controllers</span>
                    <button className={classes.button_1}>
                        Learn more
                        <img src={arrow} alt='arrow'/>
                    </button>
                </div>

                <div className={classes.pictures_1}>
                    {first_pictures.map((element) => {
                        return (
                            <div className={classes.pic}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>

{/*//////////////////////////////////////////////////////////////////////*/}
            <div className={classes.design_lab}>
                <div>
                    <div className={classes.design_block}>
                        <span className={classes.text_design}>XBOX Design Lab </span>
                        <button className={classes.button_1}>
                            Learn more
                            <img src={arrow} alt='arrow'/>
                        </button>
                    </div>
                </div>

                <div className={classes.pictures_2}>
                    {seconds_pictures.map((element) => {
                        return (
                            <div className={classes.pic}>
                                <img src={element.name} alt='picture'/>
                            </div>
                        )})}
                </div>
            </div>

{/*//////////////////////////////////////////////////////////////////////*/}
            <div className={classes.headsets}>


            </div>
{/*//////////////////////////////////////////////////////////////////////*/}
            <div className={classes.stands}>

            </div>

        </div>
    );
};