import styled, {keyframes} from 'styled-components'

const show = keyframes`
    from{
        transform: translateY(0px);
        opacity: 1;
    }
    to{
        transform: translateY(30px);
    }
`;

export const PopupContainer = styled.div.attrs(props => ({
    color: props.color ? props.color : "#5CB85F"
}))`
    position: fixed;
    padding: 1rem;
    background-color: ${props => props.color};
    color: white;
    right: 20px;
    bottom: 20px;
    z-index: 100;
    border-radius: 10px;
    animation: ${show} 3.5s linear;
    opacity: 0;
`;