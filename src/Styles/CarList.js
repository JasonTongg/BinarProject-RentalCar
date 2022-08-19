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

    @media only screen and (max-width: 1450px){
        padding: 4rem 100px;
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