import React from 'react'

const LandingPage = () => {
    return (
        <div className="container1">
           <div className="body-content">
                <div className="actual-content">
                    <h1><span style={{color:"#ee2853"}}>Pl</span>anny</h1>
                    <p><span style={{display:"block"}}>Time isn't the main thing.</span>It's the only thing. </p>
                </div>
                <img src={require("../img/plantBody2.png")} className="body-img" alt="body image" />

           </div>
        </div>
    )
}

export default LandingPage
