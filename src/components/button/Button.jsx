import React from 'react'
import './Button.css'


const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn-small', 'btn-medium', 'btn-large'];
const COLOR = ['red', 'blue', 'primary'];

const Button = ({children, type, onClick, buttonStyle, buttonColor, buttonSize}) => {

    const checkbuttonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkbuttonColor = COLOR.includes(buttonColor) ? buttonColor : null;
    const checkbuttonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
            <button 
            type={type} 
            onClick={onClick} 
            className={`btn ${checkbuttonStyle} ${checkbuttonColor} ${checkbuttonSize}`}>
                {children}
            </button>

    )
}

export default Button