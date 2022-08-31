import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 196px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 1rem;

    @media only screen and (max-width: 1200px){
        padding: 2rem 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 2rem 25px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
`;

export const CarInfo = styled.div`
    width: 50%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    padding: 1.5rem;

    & h2{
        font-size: 14px;
    }

    @media only screen and (max-width: 700px){
        width: 100%;
    }
`;

export const Sub = styled.div`
    margin-top: 15px;

    & ul{
        list-style: disc;
        margin-left: 1rem;
        margin-top: 8px;

        & li{
            padding-block: .5rem;
            color: #8A8A8A;
        }
    }
`;

export const SubHeader = styled(Sub)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *:last-child{
        font-size: 1.5rem;
        cursor: pointer;
        transition: all .5s ease-out;
        transform: rotate(180deg);
    }
`;

export const Gone = styled.div`
    opacity: 1;
    transition: opacity .5s ease-out, height .5s ease-out;
`;

export const CarImage = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 28px 24px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

    & img{
        width: 100%;
        align-self: center;
    }

    .maxday{
        margin-top: 1.5rem;
        color: rgba(0,0,0,.8);
        width: 100%;

        @media only screen and (max-width: 1300px){
            text-align: center;
        }
    
        @media only screen and (max-width: 700px){
            text-align: left;
        }
    
        @media only screen and (max-width: 500px){
            text-align: center;
        }
    }

    @media only screen and (max-width: 700px){
        width: 100%;
    }
`;

export const CarType = styled.div`
    & div{
        display: flex;
        margin-top: .5rem;
        align-items: center;
        color: #8A8A8A;

        & > *:first-child{
            font-size: 1.2rem;
            margin-right: .5rem;
        }
    }
`;

export const CarPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-block: 1.5rem;
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-block: .5rem 1rem;
    gap: .5rem;
    width: 100%;
    cursor: pointer;

    @media only screen and (max-width: 1300px){
        flex-direction: column;
        justify-content: center;
    }

    @media only screen and (max-width: 700px){
        flex-direction: row;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 500px){
        flex-direction: column;
        justify-content: center;
    }

    input::-webkit-datetime-edit { 
        color: transparent; 
        opacity: 0;
        cursor: pointer;
    }

    input{
        height: calc(16px + 1rem);
        width: calc(162px + 2rem);
        text-align: center;
        outline: none;

        &:focus, &:active{
            border: 2px solid rgba(0, 156, 150, 1);
        }
    }
`;

export const Button = styled.button`
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    font-weight: bolder;
    border: none;
    outline: none;
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:disabled{
        background-color: rgba(53, 176, 167, 0.2);
    }
`;