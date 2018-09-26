import React from 'react';
import './style.css';

export const Paragraph = ({ children }) => (
    <p className="rm-paragraph">{ children }</p>
);

export const Heading = ({ children, size }) => (
    <h1 className={`rm-heading heading-${size}`}>{ children }</h1>
);

export const Anchor = ({ children, href, target}) => (
    <a className="rm-anchor" href={href} target={target}>{ children }</a>
);

export const Emphasis = ({ children }) => (
    <em className="rm-emphasis">{ children }</em>
);

export const Small = ({ children }) => (
    <small className="rm-small">{ children }</small>
);

export const Strong = ({ children }) => (
    <strong className="rm-strong">{ children }</strong>
);

export const Underline = ({ children }) => (
    <u className="rm-underline">{ children }</u>
);