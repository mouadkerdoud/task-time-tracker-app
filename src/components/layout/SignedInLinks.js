import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <>
            <li><NavLink className="mylink" to="/">Create Task</NavLink></li>
            <li><NavLink className="mylink" to="/">Log Out</NavLink></li>
        </>
    )
}

export default SignedInLinks
