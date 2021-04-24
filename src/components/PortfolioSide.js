import React from 'react'
import BaffleText from './BaffleText'

function PortfolioSide() {
    return (
        <div className="side col-md-2 col-xs-12">
            <h2>
                <BaffleText
                    text="PORTFOLIO"
                    revealDuration={5000}
                />
            </h2>
        </div>
    )
}

export default PortfolioSide
