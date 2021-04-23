import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../css/Navigation.css'

function Navigation() {
    library.add(faBars, faTimes);
    const active = () => {
        document.getElementById("bars").classList.add("active");
    }

    const inactive = () => {
        document.getElementById("bars").classList.remove("active");
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
                        <li><button>Home</button></li>
                        <li><button>About</button></li>
                        <li><button>Services</button></li>
                        <li><button>Portfolio</button></li>
                        <li><button>Testimonials</button></li>
                        <li><button>Contact</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
