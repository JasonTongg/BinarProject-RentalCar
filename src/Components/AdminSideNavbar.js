import React from 'react'
import {Container} from '../Styles/AdminSideNavbar'
import {useDispatch} from 'react-redux';
import {adminNavbar} from '../Redux/Actions/AnimationAction'

export default function AdminSideNavbar() {
    let dispatch = useDispatch();

    let close = () => {
        dispatch(adminNavbar());
    }
    return (
        <Container>
        Side NavBar...
        <button onClick={close}>Close</button>
        </Container>
    )
}
