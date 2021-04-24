import React, { useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import CountUp from 'react-countup'

function Progress({ name, value, delay }) {
    const sectionRef = useRef(null);
    const [perc, setPerc] = useState(0);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1
    });

    const showProgress = () => {
        setTimeout(() => { 
            setPerc(value);
        }, delay);
    }

    intersection && intersection.intersectionRatio < 1
    ? showProgress()
    : showProgress()

    return (
        <div>
            <div className="progress-container">
                <span className="name">{name}</span>
                <span className="value"><CountUp start={0} end={perc} />%</span>
                <div className="progress" style={{width: `${perc}%`}}></div>
            </div>
        </div>
    )
}

export default Progress
