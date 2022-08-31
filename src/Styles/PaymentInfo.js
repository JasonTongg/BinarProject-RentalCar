import styled from 'styled-components'

export const Container = styled.div`
    height: 124px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px;
    margin: 0 auto;
    transform: translateY(-50px) !important;
`;

export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evently;
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
`;