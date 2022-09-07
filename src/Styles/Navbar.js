import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    padding: 25px 136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: ${props => props.theme.lighterPrimaryColor};
    transition: all .5s ease-out;
    z-index: 100;
    position: relative;

    & img{
        width: 100px;
    }

    @media only screen and (max-width: 1200px){
        padding: 25px 90px;
    }

    @media only screen and (max-width: 800px){
        padding: 25px 30px;
    }

    @media only screen and (max-width: 250px){
        padding: 25px 20px;
    }
`;

export const NavbarItems = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

    & > *{
        cursor: pointer;
    }

    @media only screen and (max-width: 1290px){
        width: 50%;
    }

    @media only screen and (max-width: 1000px){
        width: 60%;
    }

    @media only screen and (max-width: 720px){
        width: 70%;
    }

    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const BurgerNavbar = styled.div`
    display: none;
    & > *{
        font-size: 30px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px){
        display: block;
    }
`;

