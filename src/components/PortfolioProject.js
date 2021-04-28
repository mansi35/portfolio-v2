import React, { useEffect } from 'react'
import Tilt from 'react-tilt'
import Aos from "aos"
import 'aos/dist/aos.css'

function PortfolioProject({title, image, url}) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div data-aos="zoom-in" data-aos-once={true} className="portfolio_item col-md-4">
            <div style={{opacity: 1, height: "auto"}}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="Front-end Project" style={{maxHeight: "263.9px"}} />
                <Tilt className="Tilt" options={{ scale: 1, max: 50 }}>                                
                    <div className="overlay">
                        <span className="title">{title}</span>
                    </div>
                </Tilt>
                </a>
            </div>
        </div>
    )
}

export default PortfolioProject
