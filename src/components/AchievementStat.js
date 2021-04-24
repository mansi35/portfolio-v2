import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AchievementStat({Icon, value, text}) {
    return (
        <div className="col-md-3">
            <div data-aos="fade-up" data-aos-once={true} style={{opacity: "1", height: "auto"}}>
                <div className="counter_component">
                    <div className="icon">
                        <FontAwesomeIcon icon={Icon} />                                
                    </div>
                    <div className="value">
                        <span>{value}</span><span className="symbol">+</span>
                    </div>
                    <div className="text">{text}</div>
                </div>
            </div>
        </div>
    )
}

export default AchievementStat
