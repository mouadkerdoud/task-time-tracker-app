import React from 'react'
import {deleteTask} from "../../actions/projectActions"
import {connect} from "react-redux"


const TaskDate = (props) => {

    const {deleteTask,taskSet} = props

    
        return (
            <div>
                <div className="task-container">
                    <div className="task-elements" >
                        <p className="task-title">{taskSet.title}</p>
                        <div className="task-actions">
                            <span className="favicon"><i className="far fa-pause-circle"></i></span>
                            <span className="favicon"><i onClick={()=>deleteTask(taskSet.id)} className="fas fa-trash"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    
}



const mapDispatchToProps = (dispatch)=>{
    return {
        deleteTask : (taskId)=>dispatch(deleteTask(taskId))
    }
}

export default connect(null,mapDispatchToProps)(TaskDate)
