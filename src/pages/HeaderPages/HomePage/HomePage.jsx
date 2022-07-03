import React from 'react';
import classes from './HomePage.module.scss'

import titleXbox from './img/titleXbox.png'
import monoBlockXbox_first from './img/xboxBlack.png'
import black_xbox from './img/imageBlack.png'
import blue_xbox from './img/imageBlue.png'
import yellow_xbox from './img/imageYellow.png'
import green_xbox from './img/imageGreen.png'
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
                    <div className={classes.first_quad_block}>
                        <img src = {black_xbox} alt='Black Xbox'/>
                        <p className={classes.text_white}> Xbox Elite Series 2 Wireless Controller</p><br/>
                        <p className={classes.text_price_white}> $50 </p>
                    </div>

                    <div className={classes.second_quad_block}>
                        <img src = {blue_xbox} alt='Blue Xbox'/>
                        <p className={classes.text_black}> Xbox Elite Series 2 Wireless Controller</p><br/>
                        <p className={classes.text_price_black}> $69.99 </p>
                    </div>

                    <div className={classes.third_quad_block}>
                        <img src = {green_xbox} alt='Blue Xbox'/>
                        <p className={classes.text_white}> Xbox Elite Series 2 Wireless Controller</p><br/>
                        <p className={classes.text_price_white}> $199.99 </p>
                    </div>

                    <div className={classes.fourth_quad_block}>
                        <img src = {yellow_xbox} alt='Yellow Xbox'/>
                        <p className={classes.text_black}> Xbox Elite Series 2 Wireless Controller</p><br/>
                        <p className={classes.text_price_black}> $74.99 </p>
                    </div>
                </div>

                <div className={classes.second_quads_block}>
                    <div className={classes.first_quad_block}>
                        <img src = {headset_1} alt='headset'/>
                        <p className={classes.text_white}> Xbox Wireless Headset</p><br/>
                        <p className={classes.text_price_white}> $99.99 </p>
                    </div>

                    <div className={classes.second_quad_block}>
                        <img src = {headset_3} alt='headset'/>
                        <p className={classes.text_black}> Bang & Olufsen Beoplay Portal</p><br/>
                        <p className={classes.text_price_black}> $499.99 </p>
                    </div>

                    <div className={classes.third_quad_block}>
                        <img src = {headset_4} alt='headset'/>
                        <p className={classes.text_white}> Xbox Stereo Headset - 20th Anniversary Special Edition</p><br/>
                        <p className={classes.text_price_white}> $69.99 </p>
                    </div>

                    <div className={classes.fourth_quad_block}>
                        <img src = {headset_2} alt='headset'/>
                        <p className={classes.text_black}> Xbox Stereo Headset</p><br/>
                        <p className={classes.text_price_black}> $159.99 </p>
                    </div>
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
                        <img src={game_1} alt="game_1" />
                        <img src={game_2} alt="game_2" />
                        <img src={game_3} alt="game_3" />
                        <img src={game_4} alt="game_4" />
                    </div>
                </div>

                <div className={classes.popular_games}>
                    <p className={classes.popular_text}>Popular games</p>
                    <div className={classes.images}>
                        <figure>
                            <img className={classes.img} src={pop_game_1} alt="pop_game_1" />
                            <figcaption>Mortal Kombat 11</figcaption>
                        </figure>

                        <figure>
                            <img className={classes.img} src={pop_game_2} alt="pop_game_2" />
                            <figcaption>Minecraft</figcaption>
                        </figure>

                        <figure>
                            <img className={classes.img} src={pop_game_3} alt="pop_game_3" />
                            <figcaption>Red Dead Redemption 2</figcaption>
                        </figure>

                        <figure>
                            <img className={classes.img} src={pop_game_4} alt="pop_game_4" />
                            <figcaption>Elden Ring</figcaption>
                        </figure>
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
