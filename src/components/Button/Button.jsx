import style from './Button.module.css';
import React from 'react';

export default function Button({ children, onClick }) {

    return (
        <button
        className= {style.feedbackBtn}
        onClick={onClick}
        >
        {children}
        </button>
    );
    
}