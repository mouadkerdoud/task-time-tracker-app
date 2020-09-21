import React from 'react'
import TaskDate from "./TaskDate"

const Task = (props) => {


    const {tasks,date_of_task,task_titles} = props

    const getRelevantTasks = (item)=>{
        if(task_titles.includes(item.title)) return true
        else return false
    }
    
    let relevantTasks= tasks.filter(getRelevantTasks)
  
   
    
        return(
            < >
                <div className="day-tasks">{date_of_task}</div>
                    {relevantTasks.map(taskSet=>(
                        <TaskDate key={taskSet.id} taskSet={taskSet}  />
                    ))}
            </>
        )    
      
   
}





export default Task


