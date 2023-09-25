import React from 'react';
import {useNavigate} from "react-router-dom";

const InnerPages = () => {
    const history = useNavigate();
    return (
        <div>
            <h1 onClick={() => {history(-1)}}>InnerPages InnerPages</h1>
        </div>
    );
};

export default InnerPages;