import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100%;
    padding: 32px;
    padding-top: 110px;

    p{
        margin-bottom: 1.2rem;
    }

    h2{
        margin-top: 2rem;
    }
`;

export const Pwd = styled.h1`
    margin-bottom: 40px;

    span{
        font-weight: normal;
    }
`;

export const Label = styled.div`
    border-left: 5px solid ${props => props.theme.primaryColor};
    padding: 10px;
    margin-block: 18px;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;

    select{
        padding: 9px 12px;
        font-size: 1.2rem;
        width: 150px;
        outline: none;
    }

    button{
        padding: 9px 12px;
        font-size: 1.2rem;
        color: white;
        background-color: ${props => props.theme.primaryColor};
        border: 1px solid ${props => props.theme.primaryColor};
    }
`;