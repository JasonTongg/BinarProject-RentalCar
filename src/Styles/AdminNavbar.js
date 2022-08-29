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
`;

export const InputContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    input, button{
        padding: .5rem 1rem;
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

    p{
        margin-left: .5rem;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px){
        display: none;
    }
`;