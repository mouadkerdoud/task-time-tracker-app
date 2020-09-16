import React from 'react'

const Task = () => {
    return (
             <div className="task-container">
                <div className="task-elements" >
                    <p className="task-title">Django App</p>
                    <div className="task-actions">
                        <a><span className="favicon"><i className="far fa-pause-circle"></i></span></a>
                        <a><span className="favicon"><i className="fas fa-trash"></i></span></a>
                    </div>
                </div>
            </div>
    )
}

export default Task
