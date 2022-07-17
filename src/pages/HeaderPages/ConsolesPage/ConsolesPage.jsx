import React, {useState} from 'react';
import classes from './ConsolesPage.module.scss'
import {Link} from "react-router-dom";

export const ConsolesPage = () => {
    const [number, setNumber] = useState(0)
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
                    max="1000"
                    type ="range"
                    value = {number}
                    onChange={event => setNumber(event.target.value)}
                />
            </div>

            <div className={classes.cards_block}>

            </div>

        </div>

    );
};