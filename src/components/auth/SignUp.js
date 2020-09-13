import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <form  className="myform" >
                    <h5 >Sign Up</h5>
                    <div className="input-container">
                        <div className="input-field">
                            <input placeholder="First Name" type="text"  />
                        </div>
                        <div className="input-field">
                            <input placeholder="Last Name" type="text"  />
                        </div>
                        <div className="input-field">
                            <input placeholder="Email" type="email"  />
                        </div>
                        <div className="input-field">
                            <input placeholder="Password" type="password" />
                        </div>
                        <div className="input-field">
                            <button className="form-btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
