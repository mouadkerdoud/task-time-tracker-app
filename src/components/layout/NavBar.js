import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import {connect} from "react-redux"


const Navbar = (props) => {
    const {authUid} = props
    const links = authUid ?  <SignedInLinks /> : <SignedOutLinks />

    return (
        <header>
            <div className="grouped-logo">
                <img src={require("../../img/plant.svg.png")}/>
                <li><NavLink className="mylink logo" to={authUid ? "/dashboard" : "/"}><span style={{color:"#ee2853"}}>Pl</span>anny</NavLink></li>
            </div>
            <nav>
                <ul className="nav-elements" >
                    {links}
                </ul>
            </nav>
        </header>

    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        authUid:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Navbar)
