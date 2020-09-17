import React from 'react'
import NavBar from "./layout/NavBar"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

const LandingPage = (props) => {

    const {authUid} = props
    if(authUid) return <Redirect to="/dashboard" />

    return (
        <>
        <NavBar />
        <div className="container1">
           <div className="body-content">
                <div className="actual-content">
                    <h1><span style={{color:"#ee2853"}}>Pl</span>anny</h1>
                    <p><span style={{display:"block"}}>Time isn't the main thing.</span>It's the only thing. </p>
                </div>
                <img src={require("../img/plantBody2.png")} className="body-img" alt="" />

           </div>
        </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        authUid:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(LandingPage)
