import React from 'react'
import Task from "./Task"

const TaskList = ({tasks}) => {

    return (

        <div className="tasks">
           { tasks && tasks.map(task=>{
               return <Task key={task.id} task={task} />
           })}
            
              
        </div>

        
    )
}

export default TaskList
