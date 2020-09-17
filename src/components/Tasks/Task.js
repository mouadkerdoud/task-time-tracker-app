import React from 'react'
import {deleteTask} from "../../actions/projectActions"
import {connect} from "react-redux"

const Task = (props) => {

    const {deleteTask,task} = props
    if(task){
        return (
            <div className="task-container">
               <div className="task-elements" >
                   <p className="task-title">{task.title}</p>
                   <div className="task-actions">
                       <span className="favicon"><i className="far fa-pause-circle"></i></span>
                       <span className="favicon"><i onClick={()=>deleteTask(task.id)} className="fas fa-trash"></i></span>
                   </div>
               </div>
           </div>
        )
    }
    else{
        return <p>There are no tasks bro</p>
    }
    
}


const mapDispatchToProps = (dispatch)=>{
    return {
        deleteTask : (taskId)=>dispatch(deleteTask(taskId))
    }
}


export default connect(null,mapDispatchToProps)(Task)
