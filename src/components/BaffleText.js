import React, { useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import baffle from 'baffle-react/lib/baffle';

function BaffleText({ text, revealDuration }) {
    const sectionRef = useRef(null);
    const [count, setcount] = useState(0)
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    const b = baffle('.btext');

    b.set({
        character: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
        speed: 120
    })

    const baffleText = () => {
        b.start();
        b.reveal(revealDuration);
        b.stop();
        setcount(count+1);
    }


    intersection && intersection.intersectionRatio > 0.5 && count === 0
    ? baffleText()
    : console.log('hi')

    return (
        <div>
            <span className="baffle_text">
                <span ref={sectionRef} className="btext">{text}</span>
            </span>
        </div>
    )
}

export default BaffleText
