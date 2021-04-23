import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    return (
        <div className="content col-md-6 col-xs-12">
            <div className="content-text">
                <div className="line-text">
                    <h4>About Me</h4>
                </div>
                <h3>I'm a Full Stack web developer working from home</h3>
                <div className="separator"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero, sed condimentum lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.</p>
                <div className="social social_icons">
                    <FontAwesomeIcon className="social_icon" icon={faGithub} />
                    <FontAwesomeIcon className="social_icon" icon={faTwitter} />
                    <FontAwesomeIcon className="social_icon" icon={faYoutube} />
                    <FontAwesomeIcon className="social_icon" icon={faLinkedin} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
