import React from 'react';
import 'milligram/dist/milligram.css';

const RMBlockquote = ({ children }) => (
    <blockquote>
        <p><em>{ children }</em></p>
    </blockquote>
);

export default RMBlockquote;