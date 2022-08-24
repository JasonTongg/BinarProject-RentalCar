import styled from 'styled-components'

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;

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
`;