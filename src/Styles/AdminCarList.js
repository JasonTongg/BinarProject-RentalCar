import styled, {keyframes} from 'styled-components'

export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justifyy-content: center;
    margin: 2rem;
    width: calc(100vw - 4rem);
    background: rgba(244, 245, 247, 1);
    padding-top: 78px;
`;

export const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    padding-block: 25px;
`;

export const ListItem = styled.div`
    width: 100%;
    padding: 24px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > *{
        margin-top: 16px;
    }

    img{
        width: 276px;
        height: 213px;
        padding: 31px 17px;
        margin: 0;
        align-self: center;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;

    button{
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.primaryColor};
        color: white;
        padding: .8rem;
        border: none;
        outline: none;
        cursor: pointer;

        .icon{
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 280px){
        justify-content: center;
    }
`;

export const Pwd = styled.h3`
    margin-bottom: 27px;

    span{
        font-weight: normal;
    }
`;

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 24px;
    flex-wrap: wrap;
`;

export const Category = styled.div`
    padding: .5rem 1rem;
    border: 2px solid rgba(174, 183, 225, 1);
    border-radius: 3px;
    color: rgba(174, 183, 225, 1);
    cursor: pointer;

    &.active{
        border: 2px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
        background-color: rgba(207, 212, 237, 1);
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    & > *{
        width: 50%;
        cursor: pointer;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 5px;

    .icon{
        font-size: 1.2rem;
    }

    &:nth-of-type(1){
        background-color:  white;
        border: 2px solid red;
        color: red;
    }

    &:nth-of-type(2){
        background-color: ${props => props.theme.secondaryColor};
        border: 2px solid ${props => props.theme.secondaryColor};
        color: white;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const show = keyframes`
    from{
        opacity: 0;
        transform: translateY(-100px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    gap: 24px;
    
    width: 400px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    animation: ${show} .35s linear forwards;
`;

export const DeleteInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    p{
        line-height: 20px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
`;

export const DeleteButton = styled.button`
    padding: .8rem 1rem;
    font-weight: bolder;
    min-width: 100px;
    border-radius: 3px;
    cursor: pointer;


    &:nth-of-type(1){
        background-color: ${props => props.theme.primaryColor};
        border: 2px solid ${props => props.theme.primaryColor};
        color: white;
    }

    &:nth-of-type(2){
        background-color: transparent;
        border: 2px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
    }
`;