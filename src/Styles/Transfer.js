import styled, {keyframes} from 'styled-components'

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

const showIcon = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;


export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 30px 200px;
    width: 100vw;

    & > *:first-child{
        width: 59%;
        min-width: 450px;

        @media only screen and (max-width: 865px){
            width: 100% !important;
        }

        @media only screen and (max-width: 450px){
            min-width: 0;
        }
    }

    & > *:last-child{
        width: 39%;
        min-width: 300px;

        @media only screen and (max-width: 865px){
            width: 100% !important;
        }
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
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        min-width: 150px;
        text-align: center;

        & > *{
            line-height: 1.5rem;
        }

        @media only screen and (max-width: 515px){
            align-items: center;
        }
    }

    h3{
        display: flex;
        align-items: center;
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

    @media only screen and (max-width: 515px){
        justify-content: center;
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

        @media only screen and (max-width: 290px){
            text-align: center;
            width: 100%;
            transform: translateX(0);
            margin-top: .5rem;
        }
    }

    h3{
        @media only screen and (max-width: 290px){
            text-align: center;
            width: 100%;
        }
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

    @media only screen and (max-width: 290px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
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
        animation: ${showIcon} .5s ease-out forwards;
    }
`;

export const Instruksi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    
    & > *{
        margin-bottom: 1.5rem;
    }

    ul{
        padding-inline: 1.2rem;
        animation: ${showIcon} .5s ease-out forwards;

        & > *:not(:last-child){
            margin-bottom: .8rem;
        }

        & > *{
            color: rgba(0,0,0,.6);
            line-height: 1.2rem;
            
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
        border-bottom: 2px solid rgba(0,0,0,.4);

        &.active{
            border-bottom: 2px solid ${props => props.theme.secondaryColor};
        }
    }
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

    &:disabled{
        background: #DEF1DF;
        color: white;
        cursor: default;
    }
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

    .dzu-dropzone{
        overflow: hidden;
        min-width: 0;
        width: 80%;
        margin-inline: auto;
        height: 200px;
        border: none;
        background-color: rgba(0,0,0,.1);

        label{
            color: black;
        }
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