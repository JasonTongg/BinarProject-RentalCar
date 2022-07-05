import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
    const Button = styled.button`
        padding: ${props.size==="big" ? '14px 107px' :'8px 12px'};
        border: none;
        outline: none;
        color: white;
        background-color: ${props => props.theme.secondaryColor};
        border-radius: 2px;
        font-weight: bolder;
    `;

    return (
        <Button>{props.children}</Button>
    )
}
