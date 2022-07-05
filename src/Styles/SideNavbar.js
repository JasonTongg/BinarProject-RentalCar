import styled, {keyframes} from 'styled-components'

export const SideNavbarContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    background-color: white;
    position: relative;

    & > *{
        font-size: 1.5rem;
        margin-bottom: 2rem;

        &:not:(:last-of-type){
            margin-bottom: 1rem;
        }
    }

    & .close{
        font-size: 30px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
`;

const slideIn = keyframes`
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0);
    }
`;

export const Sidenavbar = styled.nav`
    height: 100vh;
    width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    padding: 2rem;
    z-index: 2;
    animation: ${slideIn} .5s ease-in-out;
`;

export const Overlay = styled.div`
    background-color: ${props => props.theme.overlayColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;