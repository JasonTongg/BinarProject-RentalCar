import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 30px 200px;
    width: 100vw;


    & > *:first-child{
        width: 59%;
        min-width: 400px;
    }

    & > *:last-child{
        width: 39%;
        min-width: 300px;
    }

    @media only screen and (max-width: 1200px){
        padding-inline: 100px;
    }

    @media only screen and (max-width: 1000px){
        padding-inline: 50px;
    }

    @media only screen and (max-width: 750px){
        padding-inline: 25px;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & > *{
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    }
`;

export const CountDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    flex-wrap: wrap;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        min-width: 150px;
    }

    h3{
        display: flex;
        align-items: center
        justify-content: center;
        min-width: 150px;
        gap: .2rem;

        span:nth-of-type(odd){
            padding: .5rem;
            background-color: red;
            color: white;
            border-radius: 3px;
        }

        span:nth-of-type(even){
            padding-block: .5rem;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    width: 100%;

    & > *:not(:nth-child(2)){
        margin-bottom: 1.5rem;
    }

    & > p:nth-of-type(1){
        transform: translateX(90px);
    }
`;

export const Bank = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    div{
        border: 1px solid rgba(0,0,0,.4);
        border-radius: 5px;
        padding: .5rem 1rem;
        min-width: 74px;
        text-align: center;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    position: relative;

    input{
        width: 100%;
        padding: .5rem 1rem;
        outline: none;

        &:disabled{
            background: white;
            color: black;
            border: 1px solid black;
        }
    }

    .icon{
        position: absolute;
        right: 10px;
        top: 28px;
        font-size: 1.2rem;
        cursor: pointer;
    }
`;

export const Instruksi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    
    & > *:not(:nth-child(2)){
        margin-bottom: 1.5rem;
    }

    ul{
        padding-inline: 1.2rem;
        // list-style-type: dot;

        & > *:not(:last-child){
            margin-bottom: .8rem;
        }

        & > *{
            color: rgba(0,0,0,.6);
            
            & > *{
                display: block;
                margin-top: .5rem;
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > *{
        width: calc(100%/4);
        min-width: 80px;
        background-color: transparent;
        border: none;
        padding: 1rem;
        font-weight: bold;
        font-size: .9rem;
        cursor: pointer;

        &.active{
            border-bottom: 2px solid ${props => props.theme.secondaryColor};
        }
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,.5);
    transform: translateY(-1px);
    z-index: -1;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > *{
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
        padding: 1rem;
    }
`;

const show = keyframes`
    from{
        opacity: 0;
        transform: translateY(-50px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Konfirmasi = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 20px;
`;

export const Button = styled.button`
    width: 100%;
    padding: .7rem 1rem;
    text-align: center;
    border: none;
    outline: none;
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    fonr-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
`;

export const Upload = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    animation: ${show} .5s ease-out forwards;

    & > *:not(:nth-child(3)){
        margin-bottom: 1.5rem;
    }

    & > *:nth-child(3){
        margin-bottom: 1rem;
    }

    p{
        line-height: 20px;
    }

    .image{
        width: 90%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: auto;
        border-radius: 10px;
        background-color: rgba(0,0,0,.5);
    }
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .2rem;

        span:nth-of-type(odd){
            padding: .5rem;
            background-color: red;
            color: white;
            border-radius: 3px;
        }

        span:nth-of-type(even){
            padding-block: .5rem;
        }
    }
`;