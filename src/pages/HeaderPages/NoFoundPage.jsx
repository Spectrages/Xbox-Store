import React from 'react';
import {Link} from "react-router-dom";

export const NoFoundPage = () => {
    return (
        <div>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    );
};
