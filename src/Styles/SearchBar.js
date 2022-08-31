import styled from 'styled-components'

export const BigContainer = styled.div`
    margin-inline: 197px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: translateY(-100px);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    @media only screen and (max-width: 1200px){
        margin-inline: 100px;
    }

    @media only screen and (max-width: 1000px){
        margin-inline: 50px;
    }

    @media only screen and (max-width: 750px){
        margin-inline: 25px;
    }
`;

export const Container = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    position: relative;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
`;

export const Title = styled.h3`
    margin-bottom: 1.5rem;
`;

export const Label = styled.label`
    margin-bottom: .5rem;
`;

export const Labels = styled(Label)`
    color: #8A8A8A;
`;

export const FormItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Select = styled.select`
    width: 230px;
    padding: .7rem 1rem;
    border: 1px solid #CCC;
    color: #8A8A8A;

    &:active, &:focus{
        outline: 1px solid #5CB85F;
    }
`;

export const Selects = styled(Select)`
    border: 1px solid black;
    color: black;
`;

export const Input = styled.input`
    width: 230px;
    border: 1px solid #CCC;
    padding: .7rem 1rem;
    border-radius: 2px;

    &:active, &:focus{
        outline: 1px solid #5CB85F;
    }

    &::placeholder{
        color: #8A8A8A;
    }
`;

export const Inputs = styled(Input)`
    border: 1px solid black;

    &::placeholder{
        color: black;
    }
`;

export const Option = styled.option`
    color: #8A8A8A;
    line-height: 2rem;
    height: 2rem;

    &:hover, &:checked{
        color: #5CB85F !important;
        box-shadow: 0 0 10px 100px ${props => props.theme.greenColor} inset;
        background: #C9E7CA !important;
    }
`;

export const Sewa = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    border: 1px solid black;
    padding: .6rem 1rem;
    border-radius: 2px;
    min-height: 37px;

    &:active, &:focus{
        border: 1px solid #5CB85F;
    }

    & p{
        font-size: 14px;
    }

    & .icon{
        font-size: 20px;
    }
`;

export const Sewas = styled(Sewa)`
    border: 0;
    background-color: #D0D0D0;

    &:active, &:focus{
        border: 0;
    }

    & > *{
        color: #8A8A8A;
    }
`;