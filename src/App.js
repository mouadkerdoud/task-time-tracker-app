import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import NavBar from "./components/layout/NavBar"
import LandingPage from "./components/LandingPage"

import "./App.css"


const App = () => {
  return (

    <Router >
      <div className="App" >
        <NavBar />

        <Switch>
          <Route to="/" exact component={LandingPage} />
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
