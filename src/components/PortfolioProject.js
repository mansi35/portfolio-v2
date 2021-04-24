import React from 'react'
import Tilt from 'react-tilt'

function PortfolioProject({title, image}) {
    return (
        <div className="portfolio_item">
            <div style={{opacity: 1, height: "auto"}}>
                <img src={image} alt="Front-end Project" style={{maxHeight: "263.9px"}} />
                <Tilt className="Tilt" options={{ scale: 1, max: 50 }}>                                
                    <div className="overlay">
                        <span className="title">{title}</span>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default PortfolioProject
