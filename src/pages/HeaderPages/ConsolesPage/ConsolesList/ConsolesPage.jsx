import React, {useState} from 'react';
import classes from './ConsolesPage.module.scss'
import {Link} from "react-router-dom";
import {cards_table, cards_row} from './Cards'

import TableConsoles from "./Table/Table_consoles";
import RowConsoles from "./Row/Row_consoles";

import {ReactComponent as Icon_1} from './assets/app-menu_1.svg'
import {ReactComponent as Icon_2} from './assets/app-menu_2.svg';


export const ConsolesPage = () => {
    const [number, setNumber] = useState(250)
    //if false == table; true == row
    const [filter, setFilter] = useState(false)

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
                        <span className={classes.header_text_3}>– {filter ? cards_row.length : cards_table.length} results</span>
                    </div>
                </div>
            </div>

            <div className={classes.form_block}>
                <div className={classes.price_range}>
                    <span style={{marginRight:'10px'}}>Under</span>
                    <span style={{marginRight:'10px'}}>${number}</span>
                </div>
                <div className={classes.filter}>
                    <input
                        className={classes.input_style}
                        step='0.01'
                        min="0"
                        max="500"
                        type ="range"
                        value = {number}
                        onChange={event => setNumber(event.target.value)}
                    />
                    <span className={classes.sort_text}>Sort result by:</span>
                    <span className={classes.selector_text}>Selector</span>
                    <Icon_1
                        className={filter ? classes.table_disable : classes.table_enable}
                        onClick={() => setFilter(false)}
                    />
                    <Icon_2
                        className={filter ? classes.row_enable : classes.row_disable}
                        onClick={() => setFilter(true)}
                    />
                </div>
            </div>
                {filter ? <RowConsoles price={number}/> : <TableConsoles price={number}/>}
        </div>

    );
};