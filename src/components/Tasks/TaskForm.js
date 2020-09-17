import React, { Component } from 'react'
import addTask from "../../actions/projectActions"
import {connect} from "react-redux"

export class TaskForm extends Component {

    state= {
        title:""
    }

    handleChange = (e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addTask(this.state)
        this.setState({title:""})
     }

    render() {
        return (
                <div className="task-form-container">
                    <form onSubmit={this.handleSubmit} className="task-form">

                        <input 
                            name="title" 
                            value={this.state.title}
                            type="text" 
                            placeholder="What do you want to work on?" 
                            onChange={this.handleChange}
                         />
                        
                        <div className="task-form-right">
                            <span className="time">00:00:00</span>
                            <span className="favicon"><i className="fas fa-play"></i></span>
                        </div>
                    </form>
                </div>
        )
    }
}



const mapDispatchToProps = (dispatch)=>{
    return{
        addTask: (task)=>dispatch(addTask(task))
    }
}
export default connect(null,mapDispatchToProps)(TaskForm)
