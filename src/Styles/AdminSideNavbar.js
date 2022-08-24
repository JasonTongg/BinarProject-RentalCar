import styled, {keyframes} from 'styled-components'

const show = keyframes`
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0%);
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 500px;
    background-color: red;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${show} 1s linear forwards;
`;