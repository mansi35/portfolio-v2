import React, { useEffect } from 'react'
import AchievementContainer from './AchievementContainer'
import '../css/Achievements.css'
import { faSmileBeam, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
                            <BaffleText text="I am Proud Of" revealDuration={500} revealDelay={500} />
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
                    <AchievementStat Icon={faSmileBeam} value={10} text="Projects" />
                    <AchievementStat Icon={faGithub} value={35} text="Repositories" />
                    <AchievementStat Icon={faLaptopCode} value={10} text="Certifications" />
                    <AchievementStat Icon={faCode} value={10000} text="Lines of Code" />
                </div>
            </div>
        </div>
    )
}

export default Achievements
