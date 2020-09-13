import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import NavBar from "./components/layout/NavBar"
import LandingPage from "./components/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateTask from "./components/Tasks/CreateTask"
import Dashboard from "./components/dashboard/Dashboard"

import "./App.css"


const App = () => {
  return (

    <Router >
      <div className="App" >
        <NavBar />
        <Switch>
          <Route  path="/" exact component={LandingPage} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/signIn"  component={SignIn} />
          <Route path="/signUp"  component={SignUp} />
          <Route path="/create"  component={CreateTask} />
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
