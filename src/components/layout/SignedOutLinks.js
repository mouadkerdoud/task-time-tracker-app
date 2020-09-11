import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
            <>
                <li><NavLink className="mylink" to="/">Sign In</NavLink></li>
                <li><NavLink className="mylink" to="/">Sign Up</NavLink></li>
            </>
    )
}

export default SignedOutLinks
