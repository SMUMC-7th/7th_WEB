import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export enum Color  {
    RED='RED',
    YELLOW='YELLOW'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    color?: Color;
    onClick: () => void;
    backgroundColor: string;
    borderRadius: string;
    
}

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    text:string;
    color?: string;
}

function Button({children, ...prev}
    : IButton) {
    return(
    <button style={{...prev}}>
        {children}
    </button>
    )
}

export default Button