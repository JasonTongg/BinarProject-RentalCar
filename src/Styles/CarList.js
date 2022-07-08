import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 5rem;
    width: 100%;
    padding: 4rem 196px;

    @media only screen and (max-width: 1000px){
        padding: 4rem 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 4rem 50px;
    }
    @media only screen and (max-width: 500px){
        padding: 4rem 25px;
    }
`;

export const CarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: .8rem;

    & h5{
        font-weight: 0;
    }

    & img{
        width: 100%;
    }

    & p{
        font-weight: bold;
        line-height: 1.5rem;
    }
`;