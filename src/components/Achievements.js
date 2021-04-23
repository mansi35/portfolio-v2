import React, { useEffect } from 'react'
import AchievementContainer from './AchievementContainer'
import '../css/Achievements.css'
import { faSmileBeam, faPizzaSlice, faCode, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos"
import 'aos/dist/aos.css'

function Achievements() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="achievements">
            <div className="top row" style={{maxHeight: "603.2px"}}>
                <div className="content">
                    <div className="col-md-12">
                        <div className="line-text"><h4>Achievements</h4></div>
                        <div className="heading" data-aos="flip-up"><span className="baffle_text"><span>What I Do</span></span></div>
                        <div className="achievements-container" style={{minHeight: "452.4px"}}>
                            <div className="container">
                                <AchievementContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom row">
                <div className="container">
                    <div className="col-md-3">
                        <div data-aos="fade-left" style={{opacity: "1", height: "auto"}}>
                            <div className="counter_component">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSmileBeam} />                                
                                </div>
                                <div className="value">
                                    <span>100</span><span className="symbol">+</span>
                                </div>
                                <div className="text">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div data-aos="fade-left" style={{opacity: "1", height: "auto"}}>
                            <div className="counter_component">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPizzaSlice} />
                                </div>
                                <div className="value">
                                    <span>1000</span><span className="symbol">+</span>
                                </div>
                                <div className="text">Pizzas Ordered</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div data-aos="fade-right" style={{opacity: "1", height: "auto"}}>
                            <div className="counter_component">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faQuoteRight} />                                
                                </div>
                                <div className="value">
                                    <span>500</span><span className="symbol">+</span>
                                </div>
                                <div className="text">Reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div data-aos="fade-right" style={{opacity: "1", height: "auto"}}>
                            <div className="counter_component">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <div className="value">
                                    <span>50000</span><span className="symbol">+</span>
                                </div>
                                <div className="text">Lines of Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
