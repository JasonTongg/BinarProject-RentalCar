import styled, {keyframes} from 'styled-components'
import AdminImage from '../Assets/AdminLogin.png'

export const AdminContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .back{
        padding: 8px 12px;
        border: none;
        outline: none;
        color: white;
        background-color: ${props => props.theme.primaryColor};
        border-radius: 2px;
        font-weight: bolder;
        cursor: pointer;
        position: absolute;
        top: 50px;
        left: 50px;
        text-decoration: none;
        border: 1px solid white;
        z-index: 100;
    }

    @media only screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;

export const Left = styled.div`
    background-image: url(${AdminImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: relative;

    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.primaryColor};
        z-index: -100;
    }

    @media only screen and (max-width: 600px){
        display: none;
    }
`;

const show = keyframes`
    from{
        transform: translateY(50px);
        opacity: 0;
    },
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Form = styled.form`
    width: 100%;
    animation: ${show} .5s linear;
    padding: 2rem;

    img{
        width: 100px;
    }

    h2{
        font-size: 2rem;
        font-weight: bolder;
        margin-block: 2.5rem;
    }

    p{
        text-align: center;
        margin-top: 2rem;

        a{
            color: ${props => props.theme.primaryColor};
            font-weight: bolder;
            margin-left: 8px;
        }
    }
`;

export const ErrorMessage = styled.div`
    background-color: rgba(208,12,26,.1);
    color: #D00C1A;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;

    p{
        margin: 0;
    }
`;
