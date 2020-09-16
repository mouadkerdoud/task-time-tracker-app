import React, { Component } from 'react'

export class TaskForm extends Component {
    render() {
        return (
                <div className="task-form-container">
                    <form className="task-form">
                        <input type="text" placeholder="What do you want to work on?" />
                        <div className="task-form-right">
                            <span className="time">00:00:00</span>
                            <span className="favicon"><i className="fas fa-play"></i></span>
                        </div>
                    </form>
                </div>
        )
    }
}

export default TaskForm
