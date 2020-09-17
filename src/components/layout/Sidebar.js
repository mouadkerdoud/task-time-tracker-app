import React from 'react'
import SignedInLinks from "./SignedInLinks"
import {connect} from "react-redux"
import  {Popover, OverlayTrigger} from "react-bootstrap"


const Sidebar = (props) => {

    const {profile,authUid} = props

    const popover = (
        <Popover id="popover-basic">
            <div   className="popover-element">
                <p className="popover-name">{profile.firstName} {profile.lastName}</p>
                <span className="popover-initials">{profile.initials}</span>
            </div>
            <div  className="popover-element">Profile Settings</div>
            <div  className="popover-element"><SignedInLinks /></div>
        </Popover>
      );
    
    return (
          
        <div id="sidebar">
            <div className="title-logo" >
                <img src={require("../../img/plant.svg.png")} alt="" />
                <span className="title-sidebar"><span style={{color:"#ee2853"}}>Pl</span>anny</span>
            </div>
            <div className="info-container">
                <p className="name">{profile.firstName} {profile.lastName}</p>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <span className="initials">{profile.initials}</span>
                </OverlayTrigger>
            </div>
        </div> 

    )
}



const mapStateToProps = (state)=>{

    return {
        authUid:state.firebase.auth.uid,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Sidebar)
