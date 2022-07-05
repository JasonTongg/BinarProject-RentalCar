import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-inline: 136px;
    padding-block: 2rem;
    flex-wrap: wrap;

    & h2{
        font-size: ${props => props.theme.subTitleFontSize}
    }

    & p{
        margin-block: 1.5rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 1000px){
        padding-inline: 80px;
    }

    @media only screen and (max-width: 500px){
        padding-inline: 20px;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const Item = styled.div`
    border: 2px solid rgba(0,0,0,.1);
    padding: 1.5rem;
    border-radius: 8px;
    width: 23%;

    & h3{
        font-size: 16px;
        margin-top: 1.5rem;
    }

    & p{
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 1350px){
        width: 300px;
        height: 200px;
    }
`;