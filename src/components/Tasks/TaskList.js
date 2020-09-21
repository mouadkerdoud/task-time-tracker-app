import React from 'react'
import Task from "./Task"
import _ from 'lodash'
import moment from "moment"

const TaskList = ({tasks}) => {

    const dayName = task => moment(task.createdAt.toDate()).format("ddd, Do MMM ");

    const result = _(tasks)
    .groupBy(dayName)
    .mapValues(items => _.map(items, "title"))
    .value()

    const day_and_task = Object.entries(result)
   console.log(day_and_task)


    const renderTasks = day_and_task.map( (item,index)=>(
        <div  key={index} className="tasks"><Task key={index} tasks={tasks}  date_of_task={item[0]} task_titles={item[1]} /></div>
    ))

  
        return <>{renderTasks}</>
   
    
}

export default TaskList


