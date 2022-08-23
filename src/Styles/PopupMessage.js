import styled, {keyframes} from 'styled-components'
import redCar from '../Assets/redCar.jpeg'
import blackCar from '../Assets/blackCar.jpeg'

const show = keyframes`
    from{
        transform: translateY(0px);
        opacity: 1;
    }
    to{
        transform: translateY(30px);
        opacity: 0;
    }
`;

export const PopupContainer = styled.div.attrs(props => ({
    color: props.color ? redCar : blackCar
}))`
    position: fixed;
    padding: 1.5rem 2.5rem;
    background-image: url(${props => props.color});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    right: 20px;
    bottom: 20px;
    z-index: 100;
    border-radius: 10px;
    animation: ${show} 3.5s linear forwards;
    opacity: 0;
    font-weight: bolder;
    font-size: 1.2rem;
`;