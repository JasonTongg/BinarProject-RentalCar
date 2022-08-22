import styled from 'styled-components'

export const Container = styled.section`
    position: relative;
    
    & > *{
        opacity: 0;
        transition: transform .5s ease-out, opacity 1.5s ease-out;
        transform: translateY(20%);
    }
`;