import React from 'react';
import {Link} from "react-router-dom";
import classes from '../Table/TableStyles.module.scss'

const Pagination = ({ elemPerPage, totalConsoles, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalConsoles / elemPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className={classes.pagination}>
                {pageNumbers.map(number => (
                    <span className={classes.page} key={number}>
                        <Link to={'/consoles/' + number} className={classes.simple_elem} onClick={() => paginate(number)}>{number}</Link>
                    </span>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;