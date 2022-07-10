import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {searchCarDetail} from '../Redux/Actions/CarAction'

export default function Button(props) {
    let Button;
    let dispatch = useDispatch();

    if(props.second){
        Button = styled.button`
            padding: ${props.size==="big" ? '14px 107px' :'8px 12px'};
            border: 1px solid ${props => props.theme.primaryColor};
            outline: none;
            color: ${props => props.theme.primaryColor};
            background-color: white;
            border-radius: 2px;
            font-weight: bolder;
            cursor: pointer;
        `;
    }
    else{
        Button = styled.button`
            padding: 8px 12px;
            width: ${props.size==="big" ? '100%' : null};
            border: none;
            outline: none;
            color: white;
            background-color: ${props => props.theme.secondaryColor};
            border-radius: 2px;
            font-weight: bolder;
            cursor: pointer;
        `;
    }

    let doAction = () => {
        if(props.action){
            dispatch(searchCarDetail(props.idCar));
            props.action();
        }
    }

    return (
        <Button onClick={doAction}>{props.children}</Button>
    )
}
