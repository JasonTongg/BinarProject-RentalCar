import styled, {keyframes} from "styled-components";

export const Container = styled.section`
    padding: 2rem 196px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100vw;
    gap: 1rem;

    @media only screen and (max-width: 1000px){
        padding: 2rem 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 2rem 50px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 500px){
        padding: 2rem 20px;
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
    height: 150px;
    opacity: 1;
    transition: opacity .5s ease-out, height .5s ease-out;

    @media only screen and (max-width: 600px){
        height: 180px;
    }

    @media only screen and (max-width: 415px){
        height: 200px;
    }

    @media only screen and (max-width: 340px){
        height: 235px;
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