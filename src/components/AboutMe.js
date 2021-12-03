import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    return (
        <div className="content col-md-6 col-xs-12">
            <div className="content-text">
                <div className="line-text">
                    <h4>About Me</h4>
                </div>
                <h3>I'm a Backend Enthusiast, and a React Developer</h3>
                <div className="separator"></div>
                <p>"Hardwork beats talent when talent doesn't work hard.."<br /><br /> Well this is more or less the motto of my life. <br />

                I love trying new things. So maybe you could call me a visionary, creating new methods and introducing new ideas. You'd always find me trying to convince my friends to try something new and exciting. Thinking what could be a better solution to a problem and how can I really help, and most importantly trying to learn by experiencing failure.
                <br/><br/>
                <h4>Fun fact about me:</h4> <br />
                I made my own video conferencing application, which I use to chat with my friends ;)
                </p>
                <div className="social social_icons">
                    <a href="https://github.com/mansi35" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/mansi-sharma-617521191/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faLinkedin} /></a>
                    <a href="https://twitter.com/mansi035" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
