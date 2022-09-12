import styled, {keyframes} from 'styled-components'

const show = keyframes`
    0%{
        opacity: 0;
        transform: translateY(20px);
    }
    50%{
        transform: translateY(0);
    }
    100%{
        opacity: 1;
    }
`;

const show2 = keyframes`
    from{
        opacity: 0;
        transform: translateY(-70px);
    }
    to{
        transform: translateY(-50px);
        opacity: 1;
    }
`;

export const Container = styled.section`
    position: relative;
    
    & > *:not(:nth-child(3)){
        animation: ${show} .7s ease-out forwards;
    }

    & > *:nth-child(3){
        animation: ${show2} .7s ease-out forwards;
    }
`;