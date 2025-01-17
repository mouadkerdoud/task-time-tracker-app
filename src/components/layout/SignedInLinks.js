import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import {signOut} from "../../actions/authActions"

const SignedInLinks = (props) => {
    
    return (
        <>
            <li><NavLink className="logout" onClick={()=>props.signOut()} to=".">Log Out</NavLink></li>
        </>
    )
}




const mapDispatchToProps = (dispatch)=>{
    return {
        signOut : ()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
