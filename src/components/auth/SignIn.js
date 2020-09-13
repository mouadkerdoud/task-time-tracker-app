import React, { Component } from 'react'

export class SignIn extends Component {



    render() {
        return (
            <div className="container">
                <form  className="myform positional" >
                    <h5 >Sign In</h5>
                    <div className="input-container">
                        <div className="input-field positional-field">
                            <input placeholder="Email" type="email"  />
                        </div>
                        <div className="input-field positional-field">
                            <input placeholder="Password" type="password" />
                        </div>
                        <div className="input-field positional-field">
                            <button className="form-btn pos-btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
