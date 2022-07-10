import styled from 'styled-components'

export const Container = styled.section`
    & > *{
        opacity: 0;
        transition: transform .5s ease-out, opacity 1.5s ease-out;
    }

    & > *:nth-child(even){
        transform: translateX(-20%);
    }

    & > *:nth-child(odd){
        transform: translateX(20%);
    }
`;