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
import profilePic from '../resources/mansi1.png'
import '../css/HomeProfile.css'

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
                            strings: ['A passionate learner', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <button className="hover-button">
                        <span>Download CV</span>
                    </button>
                </div>
                <img src={shape1} className="animated fadeIn move-down float-image" alt="shape" style={{left: "0%", bottom: "74.7866%"}} />
                <img src={shape10} className="animated fadeIn move-up float-image" alt="shape" style={{left: "10%", bottom: "20.2009%"}} />
                <img src={shape2} className="animated fadeIn move-down float-image" alt="shape" style={{left: "20%", bottom: "76.8563%"}} />
                <img src={shape3} className="animated fadeIn move-down float-image" alt="shape" style={{left: "30%", bottom: "22.2139%"}} />
                <img src={shape4} className="animated fadeIn move-down float-image" alt="shape" style={{left: "40%", bottom: "69.1844%"}} />
                <img src={shape5} className="animated fadeIn move-up float-image" alt="shape" style={{left: "50%", bottom: "21.8483%"}} />
                <img src={shape6} className="animated fadeIn move-up float-image" alt="shape" style={{left: "60%", bottom: "71.5472%"}} />
                <img src={shape7} className="animated fadeIn move-down float-image" alt="shape" style={{left: "70%", bottom: "23.5643%"}} />
                <img src={shape8} className="animated fadeIn move-up float-image" alt="shape" style={{left: "80%", bottom: "67.347%"}} />
                <img src={shape9} className="animated fadeIn move-up float-image" alt="shape" style={{left: "90%", bottom: "24.0729%"}} />
            </div>
            <div className="img col-md-6 col-xs-12">
                <img width="100%" src={profilePic} alt="profile_pic" />
            </div>
        </div>
    )
}

export default HomeProfile
