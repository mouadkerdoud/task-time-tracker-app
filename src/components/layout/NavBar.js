import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import SignedOutLinks from "./SignedOutLinks"
import {connect} from "react-redux"
import {compose} from "redux"

const Navbar = (props) => {
    const {authUid} = props
    
    return (
        <header>
            <div className="grouped-logo">
                <img src={require("../../img/plant.svg.png")}/>
                <li><NavLink className="mylink logo" to={authUid ? "/dashboard" : "/"}><span style={{color:"#ee2853"}}>Pl</span>anny</NavLink></li>
            </div>
            <nav>
                <ul className="nav-elements" >
                    <SignedOutLinks />
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
