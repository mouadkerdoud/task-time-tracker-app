import React, { Component } from 'react'
import {connect} from "react-redux"
import {signIn} from "../../actions/authActions"
import {Redirect} from "react-router-dom"


export class SignIn extends Component {

        state={
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
            this.props.signIn(this.state)
        }

    render() {
        const {authError,authUid} = this.props
        if(authUid) return <Redirect to="/dashboard" />

        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit} className="myform positional" >
                    <h5 >Sign In</h5>
                    <div className="input-container">
                        <div className="input-field positional-field">
                            <input 
                                name="email" 
                                placeholder="Email" 
                                type="email" 
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="input-field positional-field">
                            <input 
                                name="password" 
                                placeholder="Password" 
                                type="password" 
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                        <div className="input-field positional-field">
                            <button className="form-btn pos-btn">Login</button>
                                <div className="authError">
                                    { authError ? <p>{authError}</p> : null }
                                </div>
                        </div>
                    </div>
                </form>
            </div>
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
    return{
        signIn : (creds)=>dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
 