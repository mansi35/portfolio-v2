import React from 'react'
import Particles from 'react-particles-js'
import AboutMe from './AboutMe'
import Skills from './Skills'
import '../css/About.css'

function About() {
    return (
        <div id="about" className="about">
            <Particles className="particles" />
            <div className="about__profile row" style={{width: "100%"}}>
                <AboutMe />
                <Skills />
            </div>
        </div>
    )
}

export default About
