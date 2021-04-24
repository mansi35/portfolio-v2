import React from 'react'
import PortfolioProject from './PortfolioProject'

function PortfolioProjects() {
    return (
        <div className="recent-works col-md-10 col-xs-12">
            <div className="content">
                <div className="portfolio_container" style={{maxHeight: "603.2px"}}>
                    <PortfolioProject title="Front-end Development" image="https://retro-show-r3tr0.vercel.app/static/0cfa73e21e05a7314c70aebc92330dd8/c384e/image.jpg" />
                    <PortfolioProject title="Front-end Project" image="https://retro-show-r3tr0.vercel.app/static/f28fd91fef7c43a29140eb9d73692710/c384e/image.jpg" />
                    <PortfolioProject title="Angular Project" image="https://retro-show-r3tr0.vercel.app/static/e8c21764eea8570c2652f637007b16a4/c384e/image.jpg" />
                    <PortfolioProject title="Front-end Development" image="https://retro-show-r3tr0.vercel.app/static/8202c6000a44727fe8dee0f67a76c6bb/c384e/image.jpg" />
                    <PortfolioProject title="Front-end Project" image="https://retro-show-r3tr0.vercel.app/static/5501d19944e5e0d25e4b9b80a47c69fe/c384e/image.jpg" />
                    <PortfolioProject title="Angular Project" image="https://retro-show-r3tr0.vercel.app/static/b900f0a3dbc62d26ba0daef68169f0ea/c384e/image.jpg" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioProjects
