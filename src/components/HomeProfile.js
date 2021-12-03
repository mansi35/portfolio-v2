import React from 'react'
import Typewriter from "typewriter-effect"
import shape1 from '../resources/1.png'
import shape2 from '../resources/2.png'
import shape3 from '../resources/3.png'
import shape4 from '../resources/4.png'
import shape5 from '../resources/5.png'
import shape6 from '../resources/6.png'
import shape7 from '../resources/7.png'
import shape8 from '../resources/8.png'
import shape9 from '../resources/9.png'
import shape10 from '../resources/10.png'
import profilePic from '../resources/mansi_sharma.jpg'
import '../css/HomeProfile.css'
import resume from '../resources/Resume_Mansi_Sharma.pdf'

function HomeProfile() {
    return (
        <div className="row homeProfile">
            <div className="content col-md-6 col-xs-12">
                <div className="content__text">
                    <div className="line__text">
                        <h4>Hello, I'm</h4>
                    </div>
                    <div className="glitch" data-text="Mansi Sharma">
                        Mansi Sharma
                    </div>
                    <Typewriter
                        options={{
                            strings: ['A passionate learner', 'React Developer', 'Backend Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <a href={resume} download style={{textDecoration: "none"}}>
                    <button className="hover-button">
                        <span>Download CV</span>
                    </button>
                    </a>
                </div>
                <img src={shape1} className="animated fadeIn move-down float-image" alt="shape" style={{left: "0%", bottom: "67.7866%"}} />
                <img src={shape10} className="animated fadeIn move-up float-image" alt="shape" style={{left: "10%", bottom: "27.2009%"}} />
                <img src={shape2} className="animated fadeIn move-down float-image" alt="shape" style={{left: "20%", bottom: "69.8563%"}} />
                <img src={shape3} className="animated fadeIn move-down float-image" alt="shape" style={{left: "30%", bottom: "29.2139%"}} />
                <img src={shape4} className="animated fadeIn move-down float-image" alt="shape" style={{left: "40%", bottom: "62.1844%"}} />
                <img src={shape5} className="animated fadeIn move-up float-image" alt="shape" style={{left: "50%", bottom: "28.8483%"}} />
                <img src={shape6} className="animated fadeIn move-up float-image" alt="shape" style={{left: "60%", bottom: "64.5472%"}} />
                <img src={shape7} className="animated fadeIn move-down float-image" alt="shape" style={{left: "70%", bottom: "30.5643%"}} />
                <img src={shape8} className="animated fadeIn move-up float-image" alt="shape" style={{left: "80%", bottom: "60.347%"}} />
                <img src={shape9} className="animated fadeIn move-up float-image" alt="shape" style={{left: "90%", bottom: "31.0729%"}} />
            </div>
            <div className="img col-md-6 col-xs-12">
                <img width="100%" src={profilePic} alt="profile_pic" />
            </div>
        </div>
    )
}

export default HomeProfile
