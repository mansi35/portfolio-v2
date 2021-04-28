import React, { useEffect } from 'react'
import Particles from 'react-particles-js'
import '../css/Contact.css'
import BaffleText from './BaffleText'
import Aos from "aos"
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jqhu4pn', 'template_o60tcgt', e.target, 'user_G7N6V58OlazIVjkudDir7')
        .then((result) => {
            console.log(result.text);
            document.getElementById("confirm").innerHTML = "Message Sent";
            setTimeout(() => { 
                document.getElementById("confirm").innerHTML = ""; 
            }, 5000);
        }, (error) => {
            console.log(error.text);
            document.getElementById("confirm").innerHTML = "Uh oh! Something just broke.<br />Unable to send the message. Please try again!"
            setTimeout(() => { 
                document.getElementById("confirm").innerHTML = ""; 
            }, 5000);
        });

        e.target.reset();
    }

    return (
        <div id="contact" className="contact">
            <div className="row">
                <div class="side col-md-2">
                    <h2>
                        <BaffleText text="Contact" revealDuration={500} revealDelay={500} />
                    </h2>
                </div>
                <form class="form col-md-10" onSubmit={sendEmail}>
                    <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto", zIndex: 1}}>
                        <div data-aos="fade-up" data-aos-once={true} class="form-container">
                            <div class="line-text">
                                <h4>Get In Touch</h4>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <input type="text" class="name" placeholder="Name" name="from_name" required />
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <input type="email" class="email" placeholder="Email" name="from_email" required />
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <textarea class="message " placeholder="Message" name="message" required></textarea>
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <center>
                                    <div class="submit">
                                        <button type="submit" class="hover-button">
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sent_confirm">
                        <div id="confirm" style={{position: "relative", left: "-50%"}}></div>
                    </div>
                    <div className="social social_icons">
                        <a href="https://github.com/mansi35" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/mansi-sharma-617521191/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faLinkedin} /></a>
                        <a href="https://twitter.com/mansi035" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faTwitter} /></a>
                    </div>
                </form>
            </div>
            <Particles className="particles"
                height="754px"
                params={{
                    particles: {
                        number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1500,
                        }
                        },
                    },
                }}
            />
        </div>
    )
}

export default Contact
