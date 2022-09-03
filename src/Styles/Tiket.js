import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    padding: 1.5rem;

    img{
        width: 100px;
    }
`;

export const Invoice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

    .header{
        display: flex;
        width: 600px;
        align-items: center;
        justify-content: space-between;

        button{
            padding: .5rem 1rem;
            background-color: white;
            border: 2px solid ${props => props.theme.primaryColor};
            border-radius: 3px;
            color: ${props => props.theme.primaryColor};
            font-weight: bolder;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            .icon{
                font-size: 1.2rem;
            }
        }
    }

    .pdf{
        height: 200px;
        width: 100%;
        background-color: rgba(0,0,0,.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const InvoiceText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`;