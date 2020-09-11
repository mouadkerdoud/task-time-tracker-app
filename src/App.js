import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/layout/NavBar"

import "./App.css"


const App = () => {
  return (

    <Router >
      <div className="App" >
        <NavBar />
      </div>
    </Router>
    
  )
}

export default App
