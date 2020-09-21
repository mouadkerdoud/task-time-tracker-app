import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import LandingPage from "./components/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard"

import "./App.css"


const App = () => {
  return (

    <Router >
      <div className="App" >
       
        <Switch>
          <Route  path="/" exact component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
