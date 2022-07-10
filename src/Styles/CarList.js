import styled, {keyframes} from "styled-components";

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
    max-width: 300px;
    gap: .8rem;

    & h5{
        font-weight: 0;
    }

    & img{
        width: 100%;
        height: 100%;
    }

    & p{
        font-weight: bold;
        line-height: 1.5rem;
    }
`;

export const load = keyframes`
    to{
        transform: rotate(360deg);

    }
`;

export const Loading = styled.div`
    align-self: center;
    justify-self: center;

    & > *{
        font-size: 7rem;
        animation: ${load} 1s ease-out infinite;
        color: #D0D0D0;
    }
`;