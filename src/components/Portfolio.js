import React from 'react'
import PortfolioProjects from './PortfolioProjects'
import PortfolioSide from './PortfolioSide'
import '../css/Portfolio.css'

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio">
            <div className="row">
                <PortfolioSide />
                <PortfolioProjects />
            </div>
        </div>
    )
}

export default Portfolio
