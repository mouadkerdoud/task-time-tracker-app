import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"



export class CreateTask extends Component {
    
    render() {
        const {authUid} = this.props
        if(!authUid) return <Redirect to="/" />

        return (
            <div>
                CREATE A TASK
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        authUid:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(CreateTask)
