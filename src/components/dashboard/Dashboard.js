import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import TaskList from "../Tasks/TaskList"
import TaskForm from "../Tasks/TaskForm"
import Sidebar from "../layout/Sidebar"

export class Dashboard extends Component {
    
    render() {
        const {authUid} = this.props
        if(!authUid) return <Redirect to="/" />

        return (
            <div className="wrapper">
                <Sidebar />
                <div className="dashboard-page">
                    <TaskForm />
                    <TaskList />
                </div>
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
