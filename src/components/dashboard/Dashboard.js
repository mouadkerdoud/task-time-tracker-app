import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"


export class Dashboard extends Component {
    
    render() {
        const {authUid} = this.props
        if(!authUid) return <Redirect to="/" />

        return (
            <div>
                DASHBOARD
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        authUid:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Dashboard)
