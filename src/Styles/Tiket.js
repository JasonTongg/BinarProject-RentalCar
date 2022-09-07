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

    h2,p{
        text-align: center;
        line-height: 1.5rem;
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

        @media only screen and (max-width: 700px){
            width: 400px;
        }

        @media only screen and (max-width: 450px){
            width: 250px;
        }

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

        .rpv-core__text-layer, .rpv-core__canvas-layer, .rpv-core__page-layer{
            @media only screen and (max-width: 350px){
                display: none;
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