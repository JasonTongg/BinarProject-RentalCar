import React from 'react'
import {PopupContainer} from '../Styles/PopupMessage'


export default function PopupMessage(props) {
  return (
    <PopupContainer color={props.color}>
      <p>{props.text}</p>
    </PopupContainer>
  )
}
