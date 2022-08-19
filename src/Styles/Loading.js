import styled from 'styled-components'

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    flex-direction: column;
    padding: 0 136px;

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
        width: 50%;

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
        margin-block: 1.5rem;
        font-size: 1rem;
        color: #8A8A8A;

        @media only screen and (max-width: 600px){
            font-size: .8rem;
            margin-top: 1rem;
        }
    }
`;

export const Wave = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -120px;

    & > *{
        width: 100%;
    }
`;

export const Wave2 = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: -120px;
    transform: rotate(180deg);

    & > *{
        width: 100%;
    }
`;