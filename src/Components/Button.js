import React from 'react'
import {Button1, Button2} from '../Styles/Button'

export default function Button(props) {

    let doAction = () => {
        if(props.action){
            props.action();
        }
    }

    if(props.second) {
        return (
            <Button1 onClick={doAction} size={props.size}>{props.children}</Button1>
        )
    }
    else{
        return (
            <Button2 onClick={doAction} size={props.size} background={props.background}>{props.children}</Button2>
        )
    }
}
