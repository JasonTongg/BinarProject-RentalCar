import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    padding-left: 136px;
    background-color: ${props => props.theme.lighterPrimaryColor};

    @media only screen and (max-width: 1000px){
        padding-left: 80px;
    }

    @media only screen and (max-width: 500px){
        padding-left: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-right: 2rem;

    & h2{
        font-size: ${props => props.theme.titleFontSize};
        line-height: 4rem;
        margin-bottom: 1.8rem;
        
        @media only screen and (max-width: 800px){
            font-size: ${props => props.theme.subTitleFontSize};
            line-height: 3rem;
            margin-bottom: 1rem;
        }
    }

    & p{
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 1.8rem;
        width: 90%;
        margin-bottom: 1.5rem;
    }

    @media only screen and (max-width: 1270px){
        margin-bottom: 3rem;
    }

    @media only screen and (max-width: 1000px){
        padding-right: 20px;
    }
`;

export const Image = styled.div`
    width: 100%;

    & img{
        width: 100%;
    }
`;