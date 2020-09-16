import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {signUp} from "../../actions/authActions"
import NavBar from "../layout/NavBar"

export class SignUp extends Component {

    state={
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    handleChange = (e)=>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.signUp(this.state)
    }


    render() {
        const {authUid} = this.props
        if(authUid) return <Redirect to="/dashboard" />

        return (
            <>
             <NavBar />
            <div className="container">
                <form onSubmit={this.handleSubmit} className="myform" >
                    <h5 >Sign Up</h5>
                    <div className="input-container">
                        <div className="input-field">
                            <input 
                                name="firstName" 
                                placeholder="First Name" 
                                type="text" 
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <input 
                                name="lastName" 
                                placeholder="Last Name" 
                                type="text" 
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <input 
                                name="email" 
                                placeholder="Email" 
                                type="email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                                
                            />
                        </div>
                        <div className="input-field">
                            <input 
                                name="password" 
                                placeholder="Password" 
                                type="password" 
                                value={this.state.password}
                                onChange={this.handleChange}
                                
                            />
                        </div>
                        <div className="input-field">
                            <button className="form-btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        authError: state.auth.authErr,
        authUid:state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
