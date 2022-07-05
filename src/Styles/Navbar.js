import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    padding: 25px 136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    & img{
        width: 100px;
    }

    @media only screen and (max-width: 800px){
        padding: 25px 100px;
    }
`;

export const NavbarItems = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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