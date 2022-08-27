import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: white;
    gap: 16px;
    margin-top: 16px;

    .buttons{
        width: 150px;

        & > *{
            border: 2px solid ${props => props.theme.primaryColor};
            padding: .5rem;
        }
        
        & > *:nth-child(1){
            
            color:${props => props.theme.primaryColor};
        }

        & > *:nth-child(2){
            background-color: ${props => props.theme.primaryColor};
        }
    }
`;

export const FormItem = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    font-size: 1.2rem;
    align-items: center;
    width: 100%;
    
    input, select, p{
        padding: .7rem 1rem;
        width: 340px;
        font-size: 1.2rem;
        outline: none;

        &.upload{
            padding-inline: 0;
        }

        @media only screen and (max-width: 660px){
            width: 100%;
        }
    }

    @media only screen and (max-width: 660px){
        grid-template-columns: 1fr 2fr;
    }

    @media only screen and (max-width: 450px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p{
        font-size: 0.9rem;
        padding: 0;
    }
`;