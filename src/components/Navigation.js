import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../css/Navigation.css'
import scrollToElement from 'scroll-to-element';

function Navigation(props) {
    library.add(faBars, faTimes);
    const active = () => {
        document.getElementById("bars").classList.add("active");
    }

    const inactive = () => {
        document.getElementById("bars").classList.remove("active");
    }

    const sections = [
        {
            name: "Home"
        },
        {
            name: "About"
        },
        {
            name: "Achievements"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Education"
        },
        {
            name: "Contact"
        }
    ]

    const navScroll = (id, v) => {
        inactive();
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
        }).on('end', () => {
            props.change(v);
        });
    }

    const items = () => {
        return sections.map((value, index) => {
            return (
                <li key={index}>
                    <button onClick={() => navScroll(value.name.toLowerCase(), index)}>{value.name}</button>
                </li>
            )
        })
    }

    return (
        <div>
            <div className="opener">
                <FontAwesomeIcon icon="bars" onClick={active} />
            </div>
            <div id="bars" className="navigation">
                <FontAwesomeIcon className="closeNav" icon="times" onClick={inactive} />
                <div className="links">
                    <ul>
                        {items()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
