import styled from "styled-components";

export const Container = styled.section`
    padding: 3rem 196px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100vw;
    gap: 1rem;

    @media only screen and (max-width: 1000px){
        padding: 3rem 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 3rem 50px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 500px){
        padding: 3rem 20px;
    }
`;

export const CarInfo = styled.div`
    width: 50%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

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

export const CarImage = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 28px 24px;
    height: 400px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

    & img{
        width: 70%;
        align-self: center;
    }

    @media only screen and (max-width: 1000px){
        height: 350px;
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
`;