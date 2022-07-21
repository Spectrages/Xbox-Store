import React from 'react';
import classes from './Pagination.module.scss'

const Pagination = ({ elemPerPage, totalConsoles, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalConsoles / elemPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <div className={classes.pagination}>
                {pageNumbers.map(number => (
                    <span className={classes.page} key={number}>
                        <button className={classes.simple_elem} onClick={() => paginate(number)}>{number}</button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Pagination;