import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

function EducationStat({instituteName, educationContent, instituteImg, degree, stream}) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div data-aos="fade-zoom-in" data-aos-once={true}  className="education">
            <h2>{instituteName}</h2>
            <div className="education_content">
                <p>{educationContent}</p>
            </div>
            <div className="client_container">
                <div className="client">
                    <img src={instituteImg} alt="instituteImg" />
                    <div className="info">
                        <p className="name">{degree}</p>
                        <p className="profession">{stream}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationStat
