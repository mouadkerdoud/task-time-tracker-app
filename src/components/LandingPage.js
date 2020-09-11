import React from 'react'

const LandingPage = () => {
    return (
        <div className="container">
           <div className="body-content">
                <div className="actual-content">
                    <h1><span style={{color:"#ee2853"}}>Pl</span>anny</h1>
                    <p>Time isn't the main thing. It's the only thing. </p>
                </div>
                <img src={require("../img/plantBody.png")} className="body-img" alt="body image" />

           </div>
        </div>
    )
}

export default LandingPage
