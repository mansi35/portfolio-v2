import React from 'react'
import Baffle from "baffle-react";
import handleViewport from 'react-in-viewport'

class Baffle_Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            inViewport: false,
            animation_complete: false,
            obfuscate: true,
            force: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport})
            this.setState({animation_complete: true})
            this.setState({obfuscate: false})
            this.forceUpdate()
        }
    }

    forceUpdate() {
        const { revealDuration, revealDelay } = this.props
        setTimeout(() => { 
            this.setState({force:true})
        }, revealDuration+revealDelay);
    }

    render() {
        return(
            <div className="baffle">
                <span className="baffle_text">
                    <span className="btext">{this.text()}</span>
                </span>
            </div>
        )
    }

    text() {
        const { text, revealDuration, revealDelay } = this.props
        if (!this.state.force) {
            return (
                <span className="btext">
                <Baffle
                    speed={50}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
                    obfuscate={this.state.obfuscate}
                    update={true}
                    revealDuration={revealDuration}
                    revealDelay={revealDelay}
                >
                    {text}
                </Baffle>
                </span>
            )
        } else {
            return <span className="btext">{text}</span>
        }
    }
}
const BaffleText = handleViewport(Baffle_Text);

export default BaffleText
