import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    gap: 5rem;
    width: 100%;
    padding: 4rem 196px;
    min-height: 400px;

    @media only screen and (max-width: 1450px){
        padding: 4rem 100px;
    }
`;

export const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 136px;
    text-align: center;
    min-height: 400px;
    transform: none !important;
    transition: none !important;
    opacity: 1 !important;
    
    &.height{
        min-height: 100vh;
    }

    @media only screen and (max-width: 1000px){
        padding: 0 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 0 50px;
    }

    @media only screen and (max-width: 500px){
        padding: 0 20px;
    }

    & img{
        width: 40%;

        @media only screen and (max-width: 1300px){
            width: 60%;
        }

        @media only screen and (max-width: 1000px){
            width: 70%;
        }

        @media only screen and (max-width: 700px){
            width: 80%;
        }

        @media only screen and (max-width: 500px){
            width: 90%;
        }
    }

    & h1{
        font-weight: bold;
        font-size: 2rem;

        @media only screen and (max-width: 600px){
            font-size: 1.5rem;
            margin-top: .8rem;
        }
    }

    & p{
        margin-top: 1.5rem;
        font-size: 1rem;
        color: #8A8A8A;

        @media only screen and (max-width: 600px){
            font-size: .8rem;
            margin-top: 1rem;
        }
    }
    `;

    export const CarItem = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        max-width: 300px;
        gap: .8rem;

        & h5{
            font-weight: 0;
        }

        & img{
            width: 100%;
            height: 100%;
            min-width: 300px;
            min-height: 200px;
        }

        & p{
            font-weight: bold;
            line-height: 1.5rem;
        }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    gap: 1.5rem;
    margin-inline: auto;
`;

export const Icon = styled.button`
    background-color: white;
    color: black;
    padding: 0;
    border-radius: 50%;
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 32px;
    width: 32px;
    border: 1px solid rgba(0,0,0,.5);
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.theme.greenColor};
        background-color: ${props => props.theme.greenColor};
        color: white;
    }
`;