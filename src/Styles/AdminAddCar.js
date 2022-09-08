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

            &:disabled{
                background-color: ${props => props.theme.lightPrimaryColor} !important;
                border: 2px solid ${props => props.theme.lightPrimaryColor};
                cursor: default;
                color: white;
            }
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
    
    .dzu-dropzone{
        width: 340px;
        margin: 0;
        height: 40px;
        min-height: 0;
        overflow: hidden;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: .5rem;
        border: 1px solid rgba(0,0,0,.6);
        position: static;

        @media only screen and (max-width: 660px){
            width: 100%;
        }

        @media only screen and (max-width: 400px){
            height: 60px;
        }
        
        label{
            font-size: 15px;
            color: rgba(0,0,0,.6);
            padding: 1rem;
            font-weight: bolder;
            position: static;
            width: 100%;
            justify-content: flex-start;
        }
    }

    .dzu-previewContainer{
        height: 40px;
        min-height: 0;
        padding: 0 3%;
    }

    p{
        font-size: 0.9rem;
        padding: 0;
    }
`;