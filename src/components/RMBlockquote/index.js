import React from 'react';
import RMParagraph from '../RMParagraph';
import './style.css';

const RMBlockquote = ({ children }) => (
    <blockquote className="rm-blockquote">
        <RMParagraph><em>{ children }</em></RMParagraph>
    </blockquote>
);

export default RMBlockquote;