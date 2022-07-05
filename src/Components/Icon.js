import React from 'react'
import styled from 'styled-components'

export default function Icon(props) {
    const Button = styled.button`
        background-color: ${props.background};
        color: ${props.font};
        padding: 0;
        border-radius: 50%;
        border: none;
        outline: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${props.size==="small" ? "15px" : "20px"};
        height: ${props.size==="small" ? "24px" : "32px"};
        width: ${props.size==="small" ? "24px" : "32px"};
    `;

    return (
        <Button>{props.text}</Button>
    )
}
