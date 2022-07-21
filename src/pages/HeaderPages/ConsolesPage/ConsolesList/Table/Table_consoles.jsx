import React, {useEffect, useState} from 'react';
import {cards_table} from '../Cards'
import Table from "./Table";
import Pagination from "../Pagination/Pagination";

const TableConsoles = ({price}) => {

    const [consoles, setConsoles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [elemPerPage] = useState(13)

    useEffect(() => {
        setConsoles(cards_table);
    }, [])

    const lastConsolesIndex = currentPage * elemPerPage;
    const firstConsolesIndex = lastConsolesIndex - elemPerPage;
    const currentConsoles = consoles.slice(firstConsolesIndex, lastConsolesIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <Table consoles={currentConsoles} price={price}/>
            <Pagination
                elemPerPage={elemPerPage}
                totalConsoles={consoles.length}
                paginate={paginate}
            />
        </div>
    );
};

export default TableConsoles;
