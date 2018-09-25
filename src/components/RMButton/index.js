import React from 'react';
import './style.css';

const RMButton = ({ children, isOutline, isClear, onClick }) => {
    return(
        <button 
            className={`rm-button ${ isOutline ? 'rm-button-outline' : '' } ${ isClear ? 'rm-button-clear' : '' }`}
            onClick={onClick}
        >
            { children }
        </button>
    )
};

export default RMButton;