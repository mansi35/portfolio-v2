import React from 'react'
import PortfolioProject from './PortfolioProject'
import mafia from '../resources/mafia.PNG'
import naval from '../resources/navalCode.png'
import remo from '../resources/remo.jpeg'
import coderita from '../resources/coderita.png'
import fclone from '../resources/fclone.png'
import aclone from '../resources/aclone.png'

function PortfolioProjects() {
    return (
        <div className="recent-works col-md-10 col-xs-12">
            <div className="content">
                <div className="portfolio_container row" style={{maxHeight: "603.2px"}}>
                    <PortfolioProject title="FAMista" image={mafia} />
                    <PortfolioProject title="The Naval Code" image={naval} />
                    <PortfolioProject title="REMO" image={remo} />
                    <PortfolioProject title="Coderita" image={coderita} />
                    <PortfolioProject title="Facebook Clone" image={fclone} />
                    <PortfolioProject title="Amazon Clone" image={aclone} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioProjects
