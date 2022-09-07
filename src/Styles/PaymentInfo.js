import styled from 'styled-components'

export const Container = styled.div`
    min-height: 124px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px;
    margin-inline: auto;
    transform: translateY(-50px) !important;

    @media only screen and (max-width: 1200px){
        margin-inline: 100px;
    }

    @media only screen and (max-width: 1000px){
        margin-inline: 50px;
    }

    @media only screen and (max-width: 750px){
        margin-inline: 25px;
    }

    @media only screen and (max-width: 603px){
        align-items: center;
    }

    @media only screen and (max-width: 375px){
        transform: translateY(0px) !important;
    }
`;

export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
    position: relative;   
    gap: 1rem;

`;

export const DataItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 240px;
    min-width: 150px;

    & > *:not(:last-child){
        margin-bottom: .7rem;
    }

    h4{
        font-weight: bold;
    }

    p{
        color: rgba(0,0,0,.5);
    }

    @media only screen and (max-width: 603px){
        align-items: center;
    }

    @media only screen and (max-width: 350px){
        width: auto;
    }
`;