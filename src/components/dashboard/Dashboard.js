import React, { Component } from 'react'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import {Redirect} from "react-router-dom"
import TaskList from "../Tasks/TaskList"
import TaskForm from "../Tasks/TaskForm"
import Sidebar from "../layout/Sidebar"
import PreLoader from "../PreLoader"

export class Dashboard extends Component {
    
    
    render() {
        const {authUid,tasks} = this.props
        if(!authUid) return <Redirect to="/" />

        if(tasks){
            return (
                <div className="wrapper">
                    <Sidebar />
                    <div className="dashboard-page">
                        <TaskForm authUid={authUid} />
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            )
        }else{
            return <PreLoader />
        }
        
    }
}
const mapStateToProps = (state)=>{
    return {
        authUid:state.firebase.auth.uid,
        tasks: state.firestore.ordered.tasks
        
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const { authUid } = props;
        if(!authUid) return []
        else{
            return [
                {
                    collection: 'tasks',
                    where : ["userId", "==", authUid],
                    orderBy : ["createdAt" , "desc"]
                  }
              ]
        }
       
      })

) (Dashboard)
