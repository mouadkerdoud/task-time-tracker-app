import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"


const Navbar = () => {
    return (
        <header>
            <div className="grouped-logo">
                <img src={require("../../img/plant.svg.png")}/>
                <li><NavLink className="mylink logo" to="/"><span style={{color:"#ee2853"}}>Pl</span>anny</NavLink></li>
            </div>
            <nav>
                <ul className="nav-elements" >
                    <SignedOutLinks />     
                </ul>
            </nav>
        </header>

    )
}

export default Navbar
