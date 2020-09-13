import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
            <>
                <li><NavLink className="mylink" to="/signIn">Sign In</NavLink></li>
                <li><NavLink className="mylink" to="/signUp">Sign Up</NavLink></li>
            </>
    )
}

export default SignedOutLinks
