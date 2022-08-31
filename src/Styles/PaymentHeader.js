import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    height: 175px;
    width: 100vw;
    background-color: ${props => props.theme.lighterPrimaryColor};
    padding: 1rem 200px;

    @media only screen and (max-width: 1200px){
        padding-inline: 100px;
    }

    @media only screen and (max-width: 1000px){
        padding-inline: 50px;
    }

    @media only screen and (max-width: 750px){
        padding-inline: 25px;
    }

    @media only screen and (max-width: 375px){
        height: 220px;
    }
`;

export const Items = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    @media only screen and (max-width: 375px){
        height: 100%;
    }
`;

export const Button = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bolder;
    font-size: 1.2rem;

    .icon{
        font-size: 1.4rem;
        font-weight: bolder;
    }
`;

export const Pwd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media only screen and (max-width: 375px){
        width: 50%;
    }
`;

export const PwdItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    min-width: 134px;
`;

export const Icon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;

    &.active{
        background-color: ${props => props.theme.primaryColor};
        color: white;
    }

    & ~ p{
        font-size: 1.2rem;
    }
`;

export const Line = styled.div`
    width: 30px;
    height: 1px;
    background-color: ${props => props.theme.primaryColor};
`;

