import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Aos from "aos"
import 'aos/dist/aos.css'
import intuit from '../resources/intuit.png'
import google from '../resources/google.png'
import microsoft from '../resources/LevelBeta.png'
import cisco from '../resources/cisco.png'
import sakura from '../resources/sakura.png'
import gdsc from '../resources/gdsc.png'

function AchievementContainer() {
        useEffect(() => {
            Aos.init({duration: 2000});
        }, [])

        return (
            <Row>
				<Col md={4} className="service">
					<div data-aos="fade-right" data-aos-once={true}>
					<img className="icon" src={intuit} height="50px" alt="intuit" />
					<h4>Intuit Augment 2021</h4>
					<p>
					I am one of the 9 students selected all over India for the Intuit Augment and Nurture program for 2nd year students that provides mentorship as well as internship opportunities with Intuit.
					</p>
					</div>
				</Col>
				<Col md={4} className="service border-side">
					<div data-aos="fade-down" data-aos-once={true}>
					<img className="icon" src={google} height="50px" alt="google" />
					<h4>Google WTEF Scholar</h4>
					<p>
					I am one of the 126 scholars selected all over India for the Women Techmakers Engineering Fellows Program conducted by Google with TalentSprint.
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
					<div data-aos="fade-left" data-aos-once={true}>
					<img className="icon" src={microsoft} height="50px" alt="microsoft" />
					<h4>Beta MLSA</h4>
					<p>
					Microsoft Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
				<div  data-aos="fade-right" data-aos-once={true}>
					<img className="icon" src={cisco} height="50px" alt="cisco" />
					<h4>Cisco thingQbator Technical Head</h4>
					<p>
					I am one of the core team members at Cisco thingQbator IGDTUW. Here I help conduct cohorts of students to build their ideas into working prototypes.
					</p>
					</div>
				</Col>
				<Col md={4} className="service border-side">
				<div data-aos="fade-up" data-aos-once={true}>
					<img className="icon" src={sakura} height="50px" alt="sakura" />
					<h4>JST Sakura Science Club Planning Coordinator</h4>
					<p>
					I am responsible for planning meetups and promotions of Japan Science and Technology Sakura Science Club in India.
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
				<div data-aos="fade-left" data-aos-once={true}>
					<img className="icon" src={gdsc} height="50px" alt="gdsc" />
					<h4>Google Developers Student Clubs Mentor</h4>
					<p>
					Mentor at Google Developer Student Clubs - IGDTUW for DSA Circle and Advanced Track Project Coordinator for Web Dev Circle
					</p>
					</div>
				</Col>
            </Row>
          )
}

export default AchievementContainer
