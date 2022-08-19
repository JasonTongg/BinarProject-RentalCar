import React from 'react'
import styled from 'styled-components'

const Button = styled.button.attrs(props => ({
    background: props.background ? props.background : null,
    font: props.font ? props.font : null,
    size: props.size ? props.size : null,
  }))`
        background-color: ${props => props.background};
        color: ${props => props.font};
        padding: 0;
        border-radius: 50%;
        border: none;
        outline: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${props => props.size==="small" ? "15px" : "20px"};
        height: ${props => props.size==="small" ? "24px" : "32px"};
        width: ${props => props.size==="small" ? "24px" : "32px"};
    `;

export default function Icon(props) {
    let doAction = () => {
        if(props.action){
            props.action();
        }
    }

    return (
        <Button onClick={doAction} background={props.background} font={props.font} size={props.size}>{props.text}</Button>
    )
}
