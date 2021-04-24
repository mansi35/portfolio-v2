import React from 'react'
import HomeProfile from './HomeProfile'
import Navigation from './Navigation'
import '../css/HomeProfile.css'

function Home() {
    return (
        <div id="home" className="home">
            <div className="home__navigation row">
                <Navigation />
            </div>
            <div className="home__profile row" style={{width: "100%"}}>
                <HomeProfile />
            </div>
        </div>
    )
}

export default Home
