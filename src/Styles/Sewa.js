import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 3rem;
    color: white;
    border-radius: 10px;

    & h2{
        font-size: ${props => props.theme.titleFontSize};

        @media only screen and (max-width: 500px){
            font-size: ${props => props.theme.subTitleFontSize};
        }
    }

    & p{
        width: 35%;
        line-height: 1.5rem;

        @media only screen and (max-width: 1200px){
            width: 45%;
        }
    
        @media only screen and (max-width: 1000px){
            width: 55%;
        }

        @media only screen and (max-width: 850px){
            width: 70%;
        }

        @media only screen and (max-width: 600px){
            width: 80%;
        }
    }

    @media only screen and (max-width: 600px){
        padding: 2rem;
    }
`;
export const BigContainer = styled.div`
    padding-block: 2rem;
    padding-inline: 136px;

    @media only screen and (max-width: 1000px){
        padding-inline: 80px;
    }

    @media only screen and (max-width: 500px){
        padding-inline: 20px;
    }
`;
