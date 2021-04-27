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
                    <PortfolioProject title="FAMista" image={mafia} url="https://famista.herokuapp.com/" />
                    <PortfolioProject title="The Naval Code" image={naval} url="https://github.com/mansi35/The-Naval-Code" />
                    <PortfolioProject title="REMO" image={remo} url="https://www.removirtual.com/" />
                    <PortfolioProject title="Coderita" image={coderita} url="http://coderita35.herokuapp.com/" />
                    <PortfolioProject title="Facebook Clone" image={fclone} url="https://facebook-clone-c25a5.web.app/" />
                    <PortfolioProject title="Amazon Clone" image={aclone} url="https://github.com/mansi35/amazon-clone" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioProjects
