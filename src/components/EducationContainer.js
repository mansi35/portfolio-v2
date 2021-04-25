import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import EducationStat from './EducationStat'

function EducationContainer() {
    const settings = {
        dots: true,
        swipe: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        loop: true,
    }

    return (
        <div className="educations_container" style={{minHeight: "452.4px"}}>
            <div className="container">
                <div className="quote">
                    <div className="animated fadeIn slow" style={{opacity: 1, height: "auto"}}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="svg-inline--fa fa-quote-left fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                    </div>
                </div>
                <div className="animated fadeIn slow" style={{opacity: 1, height: "auto"}}>
                    <Slider {...settings}>
                        <EducationStat 
                            instituteName="Great Service"
                            educationContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet elit quam, et finibus leo feugiat quis. Ut in turpis vitae elit dapibus porta vel vitae justo. Fusce ut nisi blandit, pellentesque metus sed, hendrerit nisi. Duis aliquam ante non velit molestie, et laoreet enim consectetur. Duis rutrum mollis velit, id maximus elit finibus vel. Vestibulum ex sapien, pellentesque id finibus non, elementum bibendum ex. Curabitur vitae felis posuere, luctus lorem imperdiet, ultrices libero. Duis blandit venenatis felis, vitae vulputate mi. Aliquam vitae egestas tortor, eu congue ex. "
                            instituteImg="https://retro-show-r3tr0.vercel.app/static/b29c87419d488dfd551cda9a7e6b49b4/c42a3/image.jpg"
                            degree="Robert Doe"
                            stream="Software Engineer"
                        />
                        <EducationStat 
                            instituteName="Great Service"
                            educationContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet elit quam, et finibus leo feugiat quis. Ut in turpis vitae elit dapibus porta vel vitae justo. Fusce ut nisi blandit, pellentesque metus sed, hendrerit nisi. Duis aliquam ante non velit molestie, et laoreet enim consectetur. Duis rutrum mollis velit, id maximus elit finibus vel. Vestibulum ex sapien, pellentesque id finibus non, elementum bibendum ex. Curabitur vitae felis posuere, luctus lorem imperdiet, ultrices libero. Duis blandit venenatis felis, vitae vulputate mi. Aliquam vitae egestas tortor, eu congue ex. "
                            instituteImg="https://retro-show-r3tr0.vercel.app/static/b29c87419d488dfd551cda9a7e6b49b4/c42a3/image.jpg"
                            degree="Robert Doe"
                            stream="Software Engineer"
                        />
                        <EducationStat 
                            instituteName="Great Service"
                            educationContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet elit quam, et finibus leo feugiat quis. Ut in turpis vitae elit dapibus porta vel vitae justo. Fusce ut nisi blandit, pellentesque metus sed, hendrerit nisi. Duis aliquam ante non velit molestie, et laoreet enim consectetur. Duis rutrum mollis velit, id maximus elit finibus vel. Vestibulum ex sapien, pellentesque id finibus non, elementum bibendum ex. Curabitur vitae felis posuere, luctus lorem imperdiet, ultrices libero. Duis blandit venenatis felis, vitae vulputate mi. Aliquam vitae egestas tortor, eu congue ex. "
                            instituteImg="https://retro-show-r3tr0.vercel.app/static/b29c87419d488dfd551cda9a7e6b49b4/c42a3/image.jpg"
                            degree="Robert Doe"
                            stream="Software Engineer"
                        />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default EducationContainer
