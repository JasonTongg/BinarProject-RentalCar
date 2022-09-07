import styled from 'styled-components'

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;

    .burger{
        font-size: 25px;
        cursor: pointer;
        color: rgba(0,0,0,0.5);
    }

    @media only screen and (max-width: 400px){
        padding: 1rem 2rem;
    }
`;

export const NavbarItem = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 600px){
        width: 300px;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 450px){
        width: 200px;
    }
`;

export const InputContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 450px){
        width: 100%;
    }

    input, button{
        padding: .5rem 1rem;
    }

    input{
        z-index: -20;
        @media only screen and (max-width: 400px){
            width: 70%;
        }

        @media only screen and (max-width: 300px){
            width: 50%;
        }
    }

    button{
        border: 2px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
        background: transparent;
        font-weight: bolder;
    }
`;

export const Profile = styled.div`
    display: flex;
    justofy-content: center;
    align-items: center;
    position: relative;
    z-index: -20;

    p{
        margin-left: .5rem;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const BigContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    transition: all 0s;
    z-index: -10;
`;