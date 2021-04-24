import React, { useEffect } from 'react'
import AchievementContainer from './AchievementContainer'
import '../css/Achievements.css'
import { faSmileBeam, faPizzaSlice, faCode, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos"
import 'aos/dist/aos.css'
import BaffleText from './BaffleText'
import AchievementStat from './AchievementStat'

function Achievements() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div id="achievements" className="achievements">
            <div className="top row" style={{maxHeight: "603.2px"}}>
                <div className="content">
                    <div className="col-md-12">
                        <div className="line-text"><h4>Achievements</h4></div>
                        <div className="heading">
                            <BaffleText
                                text="I Am Proud Of"
                                revealDuration={5000}
                            />
                        </div>
                        <div className="achievements-container" style={{minHeight: "452.4px"}}>
                            <div className="container">
                                <AchievementContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom row">
                <div data-aos="zoom-in" data-aos-once={true} className="container">
                    <AchievementStat Icon={faSmileBeam} value={100} text="Happy Clients" />
                    <AchievementStat Icon={faPizzaSlice} value={1000} text="Pizzas Ordered" />
                    <AchievementStat Icon={faQuoteRight} value={500} text="Reviews" />
                    <AchievementStat Icon={faCode} value={50000} text="Lines of Code" />
                </div>
            </div>
        </div>
    )
}

export default Achievements
