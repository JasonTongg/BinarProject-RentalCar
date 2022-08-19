import styled from "styled-components";

export const Button1 = styled.button.attrs(props => ({
    size: props.size ? props.size : null
}))`
    padding: ${props => props.size==="big" ? '14px 107px' :'8px 12px'};
    border: 1px solid ${props => props.theme.primaryColor};
    outline: none;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border-radius: 2px;
    font-weight: bolder;
    cursor: pointer;
    `;

export const Button2 = styled.button.attrs(props => ({
    size: props.size ? props.size : null
}))`
    padding: 8px 12px;
    width: ${props => props.size==="big" ? '100%' : null};
    border: none;
    outline: none;
    color: white;
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 2px;
    font-weight: bolder;
    cursor: pointer;
`;