import React from 'react'
import '../css/Skills.css'
import Progress from './Progress'

function Skills() {
    return (
        <div className="skills col-md-6 col-xs-12">
            <div className="line-text">
                <h4>My Skills</h4>
            </div>
            <div className="skills-container">
                <Progress name="Web Design" value={90} delay={1100} />
                <Progress name="Angular" value={50} delay={1100} />
                <Progress name="React" value={80} delay={1100} />
                <Progress name="Vue" value={40} delay={1100} />
                <Progress name="MongoDB" value={100} delay={1100} />
                <Progress name="CSS" value={50} delay={1100} />
            </div>
        </div>
    )
}

export default Skills
