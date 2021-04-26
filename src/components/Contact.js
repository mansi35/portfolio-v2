import React, { useEffect } from 'react'
import Particles from 'react-particles-js'
import '../css/Contact.css'
import BaffleText from './BaffleText'
import Aos from "aos"
import 'aos/dist/aos.css'

function Contact() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div id="contact" className="contact">
            <div className="row">
                <div class="side col-md-2">
                    <h2>
                        <BaffleText text="Contact" revealDuration={500} revealDelay={500} />
                    </h2>
                </div>

                <div class="form col-md-10">
                    <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto", zIndex: 1}}>
                        <div data-aos="fade-up" data-aos-once={true} class="form-container">
                            <div class="line-text">
                                <h4>Get In Touch</h4>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <input type="text" class="name " placeholder="Name" />
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <input type="email" class="email " placeholder="Email" />
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <input type="text" class="phone" placeholder="Phone" />
                                    </div>
                                </div>
                                <div class="animated fadeInUp fast" style={{opacity: 1, height: "auto"}}>
                                    <div class="form-group">
                                        <textarea class="message " placeholder="Message"></textarea>
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
                </div>
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
