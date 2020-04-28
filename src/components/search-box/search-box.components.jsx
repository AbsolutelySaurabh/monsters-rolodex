import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
    //a functional component
    //just get some props and return html
    <input
        className = "search"
        type = "search"
        placeholder = {props.placeholder}
        onChange = {props.handleChange}
    />
);
