import styled, {keyframes} from 'styled-components'

const show = keyframes`
    from{
        opacity: 0;
        transform: translateY(20%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100vw;
    min-height: 100vh;

    & > *{
        animation: ${show} .5s ease-out forwards;
    }
`;