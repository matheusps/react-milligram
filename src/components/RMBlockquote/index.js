import React from 'react';
import { Paragraph, Emphasis } from '../RMTypography';
import './style.css';

const RMBlockquote = ({ children }) => (
    <blockquote className="rm-blockquote">
        <Paragraph><Emphasis>{ children }</Emphasis></Paragraph>
    </blockquote>
);

export default RMBlockquote;