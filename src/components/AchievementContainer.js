import { faAngular, faAws, faReact } from '@fortawesome/free-brands-svg-icons'
import { faPencilRuler, faRobot, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Aos from "aos"
import 'aos/dist/aos.css'

function AchievementContainer() {
        useEffect(() => {
            Aos.init({duration: 2000});
        }, [])

        return (
            <Row>
				<Col md={4} className="service">
					<div data-aos="fade-right" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faReact} />
					</div>
					<h4>Front-end React</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
				<Col md={4} className="service border-side">
					<div data-aos="fade-down" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faAngular} />
					</div>
					<h4>Angular Web App</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
					<div data-aos="fade-left" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faAws} />
					</div>
					<h4>AWS Management</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
				<div  data-aos="fade-right" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faPencilRuler} className="solid" />
					</div>
					<h4>UI/UX Design</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
				<Col md={4} className="service border-side">
				<div data-aos="fade-up" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faServer} className="solid" />
					</div>
					<h4>Linux Server Management</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
				<Col md={4} className="service">
				<div data-aos="fade-left" data-aos-once={true}>
					<div className="icon">
						<FontAwesomeIcon icon={faRobot} className="solid" />
					</div>
					<h4>Artifical Intelligence</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
						In et sem libero. Integer pretium, tellus eu pellentesque
						tristique, ex libero maximus elit, mollis tristique urna eros
						non tellus
					</p>
					</div>
				</Col>
            </Row>
          )
}

export default AchievementContainer
