import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 136px;
    text-align: center;

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
        margin-top: 1.5rem;
        font-size: 1rem;
        color: #8A8A8A;

        @media only screen and (max-width: 600px){
            font-size: .8rem;
            margin-top: 1rem;
        }
    }
`;