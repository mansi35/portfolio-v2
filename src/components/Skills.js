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
                <Progress name="C++" value={90} delay={1100} />
                <Progress name="Python" value={70} delay={1100} />
                <Progress name="MongoDB" value={60} delay={1100} />
                <Progress name="React" value={70} delay={1100} />
                <Progress name="Node.js" value={60} delay={1100} />
                <Progress name="Firebase" value={90} delay={1100} />
                <Progress name="Unity" value={70} delay={1100} />
            </div>
        </div>
    )
}

export default Skills
