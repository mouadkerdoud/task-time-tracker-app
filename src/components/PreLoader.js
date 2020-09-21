import React from 'react'

const PreLoader = () => {
    return (
        <div className="loading"> 
              <img className="loading-image" src={require("../img/loadingPlant.png")} alt="" />
        </div>
    )
}

export default PreLoader
