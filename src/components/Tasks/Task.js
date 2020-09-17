import React from 'react'

const Task = ({task}) => {

    if(task){
        return (
            <div className="task-container">
               <div className="task-elements" >
                   <p className="task-title">{task.title}</p>
                   <div className="task-actions">
                       <span className="favicon"><i className="far fa-pause-circle"></i></span>
                       <span className="favicon"><i className="fas fa-trash"></i></span>
                   </div>
               </div>
           </div>
        )
    }
    else{
        return <p>There are no tasks bro</p>
    }
    
}

export default Task
