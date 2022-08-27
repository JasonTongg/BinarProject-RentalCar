import styled, {keyframes} from 'styled-components'

const show = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0%);
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 350px;
    color: white;
    position: absolute;
    background-color: white;
    display: grid;
    grid-template-columns: 78px 272px;
    left: 0;
    top: 0;
    animation: ${show} .3s linear backwards;

    @media only screen and (max-width: 350px){
        width: auto;
    }
`;

export const Left = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primaryColor};
    display: grid;
    grid-template-rows: repeat(3, 78px);

    .active{
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

export const CategoryContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    .icon{
        font-size: 2rem;
        margin-bottom: .5rem;
    }

    .big{
        font-size: 2.5rem !important;
        margin: 0;
    }

    p{
        font-size: 1rem;
    }
`;

export const Right = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 78px) 50px;
    color: black;

    img{
        width: 100px;
    }

    h3, h4{
        text-align: center;
    }

    h3{
        font-size: 1.5rem;
        color: rgba(138, 138, 138, 1);
    }

    h4{
        font-size: 1.2rem;
    }
`;

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 11px 24px;
    cursor: pointer;

    &:first-of-type{
        justify-content: center;
    }

    &:last-of-type{
        background: rgba(207, 212, 237, 1);
    }
`;