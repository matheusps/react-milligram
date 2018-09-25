import React from 'react';
import 'milligram/dist/milligram.css';

const RMButton = ({ children, isOutline, isClear, onClick }) => {
    return(
        <button 
            className={`button ${ isOutline ? 'button-outline' : '' } ${ isClear ? 'button-clear' : '' }`}
            onClick={onClick}
        >
            { children }
        </button>
    )
};

export default RMButton;